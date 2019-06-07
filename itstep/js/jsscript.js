$(document).ready(function () {
  $("#header-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true
  });

  $("#rw-slider").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    margin: 30
  });

  function Archor(archorClass) {
    $(document).on("click", archorClass, function (event) {
      event.preventDefault();
      const id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1000);
    });
  }
  const up = new Archor('.arrow');
  const down = new Archor('.main-menu a');


  $(document).on('click', 'button.see-more', function () {
    $('#who_we_are').slideToggle();
  })

  $(document).on('scroll', () => {
    ($(document).scrollTop() >= $(window).height()) ? $('.arrow').fadeIn(500): $('.arrow').fadeOut(500);
  });

});