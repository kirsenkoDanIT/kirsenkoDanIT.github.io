'use strict'

$(document).ready(function () {
    function Tabs(tabClass, tabClassActive, itemClass) {
        $(document).on('click', tabClass, (event) => {

            $(event.target).addClass(tabClassActive);
            $(event.target).siblings().removeClass(tabClassActive);

            $(itemClass).each(function () {
                console.log($(this).data('name'))
                if ($(event.target).text() === $(this).data('name')) {
                    $(this).show();
                } else $(this).hide();
            })

        });
    }

    const ourServices = new Tabs('.our-services-header-tabs-btn', 'services-tabs-btn-active', '.our-services-articles-item');
    const ourWork = new Tabs('.our-work-header-tabs-btn', 'work-tabs-btn-active', '.our-work-gallery-item');

})