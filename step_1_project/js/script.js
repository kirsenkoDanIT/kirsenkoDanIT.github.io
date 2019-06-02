'use strict'

$(document).ready(function () {
    function Tabs(tabClass, tabClassActive, itemClass) {

        $(tabClass).each(function () {
            if ($(this).hasClass(tabClassActive) || !$(this).data('name')) {
                console.log('+');
            }
        })

        $(itemClass).each(function () {
            $(this).css("order", `${Math.floor(Math.random()*50)}`);

        })

        $(document).on('click', tabClass, (event) => {
            // console.log($(event.currentTarget))
            $(event.currentTarget).addClass(tabClassActive).siblings().removeClass(tabClassActive);

            $(itemClass).each(function () {
                // console.log($(this).data('name'))
                $(this).css("order", `${Math.floor(Math.random()*50)}`);
                if ($(event.currentTarget).data('name') === $(this).data('name') || !$(event.currentTarget).data('name')) {
                    $(this).show();
                } else $(this).hide();
            })

        });
    }

    // console.dir(Tabs)
    const ourServices = new Tabs('.our-services-header-tabs-btn', 'services-tabs-btn-active', '.our-services-articles-item');
    const ourWork = new Tabs('.our-work-header-tabs-btn', 'work-tabs-btn-active', '.our-work-gallery-item');
    const aboutTheHam = new Tabs('.slider-controls-img', 'slider-controls-img-active', '.slide');


})