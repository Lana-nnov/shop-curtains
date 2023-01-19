'use strict';

(function () {
  var menu = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.main-nav__toggle');

  document.body.classList.remove('no-js');

  if (menuToggle) {
    menuToggle.addEventListener('click', function (evt) {
     
      if (menu) {
        evt.currentTarget.classList.toggle('main-nav__toggle--active');
        document.body.classList.toggle('menu--opened');
      }
    });
  }
  
})();
