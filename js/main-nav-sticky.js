'use strict';

;
(function () {
  var REQUIRED_SCREEN_WIDTH = 768;

  if (window.screen.width >= REQUIRED_SCREEN_WIDTH) {
    var REQUIRED_Y_SCROLL = 400;
    var header = document.querySelector('.page-header');
    var sections = document.querySelectorAll('.anchor');
    var links = document.querySelectorAll('.main-nav__link');

    document.addEventListener('scroll', function () {
      var scroll = window.scrollY;

      if (scroll >= REQUIRED_Y_SCROLL) {
        header.classList.add('page-header--sticky');
      } else {
        header.classList.remove('page-header--sticky');
      }

      sections.forEach(function (it, i) {
        var top = it.offsetTop - 100;
        var bottom = top + it.offsetHeight;

        links[i].classList.remove('current');

        if (scroll > top && scroll < bottom) {
          links[i].classList.add('current');
        }
      });
    });
  };
})();
