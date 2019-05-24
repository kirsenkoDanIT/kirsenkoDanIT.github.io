$(document).ready(function () {
    $("#header-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true
    });
});


$(document).ready(function () {
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
});
