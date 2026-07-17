document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var navWrap = document.querySelector('.nav-wrap');
  var nav = document.querySelector('.nav-wrap nav');

  if (!hamburger || !navWrap || !nav) return;

  hamburger.addEventListener('click', function () {
    var isOpen = navWrap.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu after tapping a link
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navWrap.classList.remove('nav-open');
    });
  });
});
