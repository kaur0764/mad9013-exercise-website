
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');

function toggleNav(ev) {
  ev.preventDefault();
  navToggle.classList.toggle('open');
  nav.classList.toggle('open');
}

navToggle.addEventListener('click', toggleNav);
navToggle.addEventListener('click', toggleNav);