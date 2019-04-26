'use strict';

(function () {
  var aboutBlock = document.querySelector('#about');
  var hiddenText = aboutBlock.querySelector('.about__desc-hidden');
  var textToggle = aboutBlock.querySelector('.about__toggle-wrapper');

  aboutBlock.classList.remove('about--nojs');

  var showHiddenText = function () {
    hiddenText.classList.remove('about__desc-hidden--closed');
    textToggle.classList.add('about__desc-hidden--closed');
    textToggle.removeEventListener('click', showHiddenText);
  };

  textToggle.addEventListener('click', showHiddenText);
})();
