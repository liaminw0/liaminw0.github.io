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


//month
document.addEventListener("DOMContentLoaded", function() {
  const englishMonthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
  ];
  
  const dutchMonthNames = [
      "Januari", "Februari", "Maart", "April", "Mei", "Juni", 
      "Juli", "Augustus", "September", "Oktober", "November", "December"
  ];
  
  const monthDisplay = document.getElementById('currentMonth');
  const prevButton = document.getElementById('prevMonth');
  const nextButton = document.getElementById('nextMonth');
  const eventsList = document.querySelectorAll('.events-list a');
  
  let currentDate = new Date();
  let currentMonthIndex = currentDate.getMonth(); // Get current month index
  let currentYear = currentDate.getFullYear(); // Get current year
  
  function updateMonthDisplay() {
      monthDisplay.textContent = `${dutchMonthNames[currentMonthIndex]} ${currentYear}`;
      filterEvents();
  }
  
  function filterEvents() {
    const currentMonth = `${englishMonthNames[currentMonthIndex]}-${currentYear}`;
    let eventsFound = false;
    eventsList.forEach(event => {
        if (event.getAttribute('date-month') === currentMonth) {
            event.style.display = 'block';
            eventsFound = true;
        } else {
            event.style.display = 'none';
        }
    });

    if (!eventsFound) {
        noEventsMessage.style.display = 'block';
    } else {
        noEventsMessage.style.display = 'none';
    }
}
  
  prevButton.addEventListener('click', function() {
      if (currentMonthIndex === 0) {
          currentMonthIndex = 11;
          currentYear -= 1;
      } else {
          currentMonthIndex -= 1;
      }
      updateMonthDisplay();
  });
  
  nextButton.addEventListener('click', function() {
      if (currentMonthIndex === 11) {
          currentMonthIndex = 0;
          currentYear += 1;
      } else {
          currentMonthIndex += 1;
      }
      updateMonthDisplay();
  });
  
  updateMonthDisplay();  // Initial call to set the correct events
});