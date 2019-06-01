'use strict'

$(document).ready(function () {
    function Tabs(tabClass, tabClassActive, itemClass) {

        $(itemClass).each(function () {
            $(this).css("order", `${Math.floor(Math.random()*50)}`);
        })

        $(document).on('click', tabClass, (event) => {

            $(event.target).addClass(tabClassActive);
            $(event.target).siblings().removeClass(tabClassActive);

            $(itemClass).each(function () {
                console.log($(this).data('name'))
                $(this).css("order", `${Math.floor(Math.random()*50)}`);
                if ($(event.target).text() === $(this).data('name')) {
                    $(this).show();
                } else $(this).hide();
            })

        });
    }
    console.log($('.our-work-gallery-item'));


    const ourServices = new Tabs('.our-services-header-tabs-btn', 'services-tabs-btn-active', '.our-services-articles-item');
    const ourWork = new Tabs('.our-work-header-tabs-btn', 'work-tabs-btn-active', '.our-work-gallery-item');

})