const menuBtn = document.querySelector('.burger');
const navBar = document.querySelector('.navbar');
const menuItem = document.querySelectorAll('.menu-item');

function toggleMenu() {
  navBar.classList.toggle('is-active');
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
}

menuBtn.addEventListener('click', function () {
  toggleMenu();
});

menuItem.forEach(function(menuItem) {
  menuItem.addEventListener('click', function(event) {
    toggleMenu()
  });
});


//scroll to page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
          const offset = 100; // Adjust the offset/margin as needed
          const targetPosition = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
              top: targetPosition - offset,
              behavior: 'smooth'
          });
      }
  });
});

//month selector
const eventContainer = document.getElementById('event-container');
const eventList = document.querySelector('.events-list');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const monthDisplay = document.querySelector('.event-menu h1');

let currentDate = new Date();

// Function to update the event list based on the selected month
function updateEventList(month, year) {
    const formattedMonth = month.toLocaleString('nl-NL', { month: 'long' });
    monthDisplay.textContent = formattedMonth + ' ' + year;
    const events = eventList.querySelectorAll('li');
    let count = 0; // Counter for rendered items
    events.forEach(event => {
        const eventDate = new Date(event.querySelector('p').textContent);
        if (eventDate.getMonth() === month.getMonth() && eventDate.getFullYear() === year && count < 4) {
            event.style.display = 'block';
            count++;
        } else {
            event.style.display = 'none';
        }
    });
}

// Initial update
updateEventList(currentDate, currentDate.getFullYear());

// Event listeners for changing the month
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateEventList(currentDate, currentDate.getFullYear());
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateEventList(currentDate, currentDate.getFullYear());
});