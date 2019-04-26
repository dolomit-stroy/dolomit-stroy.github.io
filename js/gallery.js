'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var photo = document.querySelector('#photo');
  var fullPhotoWrap = photo.querySelector('.photo__full-photo');
  var fullPhoto = fullPhotoWrap.querySelector('.photo__full-photo-img');
  var fullPhotoDesc = fullPhotoWrap.querySelector('.photo__full-photo-desc');
  var buttonClose = fullPhotoWrap.querySelector('.photo__full-photo-close');
  var photoOverlay = photo.querySelector('.photo__overlay');
  var gallery = photo.querySelector('.photo__gallery');
  var galleryImages = gallery.querySelectorAll('.photo__gallery-img');

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeFullPhoto();
    }
  };

  var openFullPhoto = function () {
    fullPhotoWrap.classList.add('photo__full-photo--opened');
    photoOverlay.classList.add('photo__overlay--opened');
    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', onEscPress);
  };

  var closeFullPhoto = function () {
    fullPhotoWrap.classList.remove('photo__full-photo--opened');
    photoOverlay.classList.remove('photo__overlay--opened');
    document.body.classList.remove('overflow-hidden');
    document.removeEventListener('keydown', onEscPress);
  };

  var galleryClickHandler = function (evt) {
    var target = evt.target;

    fullPhoto.src = '';

    while (target != this) {
      if (target.classList.contains('photo__gallery-wrapper')) {

        var image = target.querySelector('img');
        var elementIndex = [].slice.call(galleryImages).indexOf(image);

        fullPhoto.src = 'img/photo/' + window.FULL_PHOTO_DATA[elementIndex];
        fullPhoto.alt = target.querySelector('.photo__gallery-img').alt;
        fullPhotoDesc.textContent = fullPhoto.alt;

        openFullPhoto();

        return;
      } else {
        target = target.parentNode;
      }
    }
  };

  photo.classList.remove('photo--nojs');

  gallery.addEventListener('click', galleryClickHandler);

  buttonClose.addEventListener('click', function () {
    closeFullPhoto();
  });

  fullPhotoWrap.addEventListener('click', function () {
    closeFullPhoto();
  });

  photoOverlay.addEventListener('click', function () {
    closeFullPhoto();
  });
})();
