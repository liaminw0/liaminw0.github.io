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
