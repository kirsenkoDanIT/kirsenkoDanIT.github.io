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
    const aboutTheHam = new Tabs('.slider-controls-img', 'slider-controls-img-active', '.slide');


})