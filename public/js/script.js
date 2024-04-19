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
