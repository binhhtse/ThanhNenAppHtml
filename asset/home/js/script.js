/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function($) {
    "use strict";
    $(".video-play").modalVideo();

    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");


    });
    $(".portfolio-single-slider").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".clients-logo").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".testimonial-wrap").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".product-dictionary").slick({
        slidesToShow: 2,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".banner-gallery").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000

    });

    $(".portfolio-gallery").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: true,
        autoplay: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".portfolio-gallery").each(function() {
        $(this)
            .find(".popup-gallery")
            .magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
            });
    });

    $(".banner-gallery").each(function() {
        $(this)
            .find(".popup-gallery")
            .magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
            });
    });
    var map;

    function initialize() {
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(50.97797382271958, -114.107718560791),
            // styles: style_array_here
        };
        map = new google.maps.Map(
            document.getElementById("map-canvas"),
            mapOptions
        );
    }

    var google_map_canvas = $("#map-canvas");

    if (google_map_canvas.length) {
        google.maps.event.addDomListener(window, "load", initialize);
    }

    // Counter

    $(".counter-stat").counterUp({
        delay: 10,
        time: 1000,
    });


    $(".product-colors span").click(function() {
        $(".product-colors span").removeClass("active");
        $(this).addClass("active");
        //$("body").css("background", $(this).attr("data-color"));
        $(".product-price").css("color", $(this).attr("data-color"));
        $(".product-button").css("color", $(this).attr("data-color"));
        $(".product-pic").css("background-image", $(this).attr("data-pic"));
    });
})(jQuery);