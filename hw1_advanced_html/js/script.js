"use strict";

$(document).ready(function () {
  $('.burger-menu').on('click', function () {
    $('.burger-menu__open').toggle();
    $('.burger-menu__close').toggleClass('burger-menu__close--flex');
    $('.main-menu').toggle();
  });
});
//# sourceMappingURL=script.js.map
