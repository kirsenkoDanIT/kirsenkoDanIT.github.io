"use strict";

$(document).ready(function () {
  $('.main-menu').css('display', '');
  $('.burger-menu').on('click', function () {
    $('.burger-menu__open').toggle();
    $('.burger-menu__close').toggleClass('burger-menu__close--flex');
    $('.main-menu').css('display') !== 'flex' ? $('.main-menu').css('display', 'flex') : $('.main-menu').css('display', '');
  });
});
//# sourceMappingURL=script.js.map
