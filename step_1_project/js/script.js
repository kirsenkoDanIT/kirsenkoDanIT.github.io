'use strict'

$(document).ready(function () {

    function Tabs(tabClass, tabClassActive, itemClass) {
        const defaultTab = $(`${tabClass}.${tabClassActive}`).data('name')
        $(itemClass).each(function () {
            ($(this).data('name') === defaultTab || !defaultTab) ? $(this).show(): $(this).hide();
            $(this).css("order", `${Math.floor(Math.random()*50)}`);
        })

        $(document).on('click', tabClass, (event) => {
            $(event.currentTarget).addClass(tabClassActive).siblings().removeClass(tabClassActive);

            $(itemClass).each(function () {
                $(this).css("order", `${Math.floor(Math.random()*50)}`);
                ($(event.currentTarget).data('name') === $(this).data('name') || !$(event.currentTarget).data('name')) ? $(this).show(): $(this).hide();
            })
        });
    }
    const ourServices = new Tabs('.our-services-header-tabs-btn', 'services-tabs-btn-active', '.our-services-articles-item');
    const ourWork = new Tabs('.our-work-header-tabs-btn', 'work-tabs-btn-active', '.our-work-gallery-item');

    const sliderAboutTheHam = new Slider('.slider-controls-img', 'slider-controls-img-active', '.slide')
    const aboutTheHam = new Tabs('.slider-controls-img', 'slider-controls-img-active', '.slide');

    function Slider(tabClass, tabClassActive, itemClass) {

        let currentSlide = 0;
        $(tabClass).eq(currentSlide).addClass(tabClassActive);
        $(document).on('click', '.slider-controls-right', function () {
            currentSlide = $(`.${tabClassActive}`).index(tabClass);
            $(tabClass).eq(currentSlide).removeClass(tabClassActive);
            currentSlide = (currentSlide + 1) % $(tabClass).length;
            $(tabClass).eq(currentSlide).addClass(tabClassActive);
            $(itemClass).each(function () {
                ($(this).data('name') === $(tabClass).eq(currentSlide).data('name')) ? $(this).show(): $(this).hide();
            })
        })
        $(document).on('click', '.slider-controls-left', function () {
            currentSlide = $(`.${tabClassActive}`).index(tabClass);
            $(tabClass).eq(currentSlide).removeClass(tabClassActive);
            currentSlide = (currentSlide - 1) % $(tabClass).length;
            $(tabClass).eq(currentSlide).addClass(tabClassActive);
            $(itemClass).each(function () {
                ($(this).data('name') === $(tabClass).eq(currentSlide).data('name')) ? $(this).show(): $(this).hide();
            })
        })
    }
})