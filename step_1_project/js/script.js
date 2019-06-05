"use strict";

$(document).ready(function () {
    const ourServices = new Tabs(
        ".our-services-header-tabs-btn",
        "services-tabs-btn-active",
        ".our-services-articles-item",
        "name"
    );
    const ourWork = new GalleryTabs(
        ".our-work-header-tabs-btn",
        "work-tabs-btn-active",
        ".our-work-gallery-item",
        "name",
        ".load-more"
    );
    const loadMore = new LoadMore(".our-work-gallery-item", ".load-more");
    const aboutTheHamSlider = new Slider(
        ".slider-controls-img",
        "slider-controls-img-active",
        ".slide",
        "name"
    );
    // const aboutTheHam = new Tabs(
    //     ".slider-controls-img",
    //     "slider-controls-img-active",
    //     ".slide",
    //     "name"
    // );

    function Tabs(tabClass, tabClassActive, itemClass, dataName) {
        const defaultTab = $(`${tabClass}.${tabClassActive}`).data(dataName);
        $(itemClass).each(function () {
            $(this).data(dataName) === defaultTab ? $(this).show() : $(this).hide();
        });
        $(document).on("click", tabClass, event => {
            $(event.currentTarget)
                .addClass(tabClassActive)
                .siblings()
                .removeClass(tabClassActive);
            $(itemClass).each(function () {
                $(event.currentTarget).data(dataName) === $(this).data(dataName) ?
                    $(this).show() :
                    $(this).hide();
            });
        });
    };

    function GalleryTabs(
        tabClass,
        tabClassActive,
        itemClass,
        dataName,
        loadMoreBtnClass
    ) {
        const sliceCount = count => {
            $(itemClass).hide();
            $(`${itemClass}:hidden`)
                .slice(0, count)
                .show();
        };
        const defaultTab = $(`${tabClass}.${tabClassActive}`).data(dataName);
        $(itemClass).each(function () {
            $(this).data(dataName) === defaultTab || !defaultTab ?
                $(this).show() :
                $(this).hide();
            $(this).css(
                "order",
                `${Math.floor(Math.random() * 13)}`
            );
        });

        if (!defaultTab) {
            sliceCount(12);
        };

        $(document).on("click", tabClass, event => {
            $(event.currentTarget)
                .addClass(tabClassActive)
                .siblings()
                .removeClass(tabClassActive);
            $(itemClass).hide()
            $(itemClass).each(function () {
                $(this).css(
                    "order",
                    `${Math.floor(Math.random() *13)}`
                );
                $(event.currentTarget).data(dataName) === $(this).data(dataName) ||
                    !$(event.currentTarget).data(dataName) ?
                    $(this).slideDown() :
                    $(this).hide();
            });

            if (!$(event.currentTarget).data(dataName)) {
                sliceCount(12);
            }

            $(event.currentTarget).data(dataName) ?
                $(loadMoreBtnClass).hide() :
                $(loadMoreBtnClass).show();
        });
    };

    function LoadMore(itemClass, loadMoreBtnClass) {
        $(document).on("click", loadMoreBtnClass, function () {
            $(this).hide();
            // $(`${itemClass}:hidden`).css('order', `${Math.floor(Math.random() *($(itemClass).length - $(`${itemClass}:visible`).length + 1) + $(`${itemClass}:visible`).length)}`);
            $(`${itemClass}:hidden`).css('order', 100);
            const timeout = setTimeout(() => {
                $(`${itemClass}:hidden`)
                    .slice(0, 12)
                    .slideDown();
                $(`${itemClass}:hidden`).length ? $(this).show() : $(this).hide();
                clearTimeout(timeout);
            }, 500);
        });
    };

    function Slider(tabClass, tabClassActive, itemClass, dataName) {

        let currentSlide = Math.floor(Math.random() * $(tabClass).length);
        $(tabClass)
            .eq(currentSlide)
            .addClass(tabClassActive);

        const defaultTab = $(`${tabClass}.${tabClassActive}`).data(dataName);
        $(itemClass).each(function () {
            $(this).data(dataName) === defaultTab ? $(this).show() : $(this).hide();
        });
        $(document).on("click", tabClass, event => {
            $(event.currentTarget)
                .addClass(tabClassActive)
                .siblings()
                .removeClass(tabClassActive);
            $(itemClass).each((item) => {
                $(event.currentTarget).data(dataName) === $(item).data(dataName) ?
                    $(item).show() :
                    $(item).hide();
            });
        });

        $(document).click(event => {
            currentSlide = $(`.${tabClassActive}`).index(tabClass);
            $(tabClass)
                .eq(currentSlide)
                .removeClass(tabClassActive);

            if ($(event.target).hasClass("slider-controls-right")) {
                currentSlide = (currentSlide + 1) % $(tabClass).length;
            } else if ($(event.target).hasClass("slider-controls-left")) {
                currentSlide = (currentSlide - 1) % $(tabClass).length;
            };

            $(tabClass)
                .eq(currentSlide)
                .addClass(tabClassActive);
            $(itemClass).each((i, item) => {
                $(item).data(dataName) ===
                    $(tabClass)
                    .eq(currentSlide)
                    .data(dataName) ?
                    $(item).fadeIn(1000) :
                    $(item).hide();
            });

        });
    };
    $(document).on("click", ".main-menu li a", function (event) {
        event.preventDefault();
        const id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

});