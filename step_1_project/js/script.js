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
    const overlay = $(
        `<div class="overlay">
            <span class = "overlay-img"><i class = "fas fa-link"></i></span>
            <span class="overlay-img"><i class="fas fa-search"></i></span>
            <h3 class="overlay-title">creative design</h3>
            <p class = "overlay-name"></p>
         </div>`);

    $(".our-work-gallery-item").hover(
        function () {
            $(this).append($(overlay));
            $('.overlay-name').text($(this).data('name'));
        },
        function () {
            $(overlay).remove();
        }
    );

    function compareRandom() {
        return Math.random() - 0.5;
    }

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
                .sort(compareRandom)
                .slice(0, count)
                .slideDown()
        };
        const defaultTab = $(`${tabClass}.${tabClassActive}`).data(dataName);

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
                if ($(event.currentTarget).data(dataName)) {
                    $(this).css(
                        "order",
                        `${Math.floor(Math.random() * itemClass.length)}`
                    )
                } else $(this).css(
                    "order",
                    ""
                )
                $(event.currentTarget).data(dataName) === $(this).data(dataName) ?
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
            $('.loader').show();
            $(`${itemClass}:hidden`).css('order', $(`${itemClass}:visible`).length);
            const timeout = setTimeout(() => {
                $(`${itemClass}:hidden`)
                    .sort(compareRandom)
                    .slice(0, 12)
                    .slideDown();
                $('.loader').hide();
                $(`${itemClass}:hidden`).length ? $(this).show() : $(this).hide();
                clearTimeout(timeout);
            }, 2000);
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