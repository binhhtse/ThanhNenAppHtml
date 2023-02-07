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
    $(".news-gallery").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
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
    $(".portfolio-gallery").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: true,
        autoplay: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        autoplaySpeed: 1200,
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

    var words = ['Xe Chính Hãng', 'Xe Đã Qua Sử Dụng'],
        words1 = ['Honda', 'Yamaha', 'SYM', 'Xe Nhập Khẩu'],
        words2 = ['Sơn-Custom màu xe', 'Đồ chơi xe', 'Dọn xe'],
        words3 = ['Duyệt hồ sơ Online', 'Lãi suất thấp/Giao cavet gốc', 'Giao xe về tận nhà']

    var wordflick = function() {
        var part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            skip_delay = 15,
            speed = 120;
        setInterval(function() {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.word1').text(part);
        }, speed);
    };
    var wordflick1 = function() {
        var part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            skip_delay = 15,
            speed = 120;
        setInterval(function() {
            if (forwards) {
                if (offset >= words1[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words1[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.word2').text(part);
        }, speed);
    };
    var wordflick2 = function() {
        var part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            skip_delay = 15,
            speed = 120;
        setInterval(function() {
            if (forwards) {
                if (offset >= words2[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words2[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.word3').text(part);
        }, speed);
    };
    var wordflick3 = function() {
        var part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            skip_delay = 15,
            speed = 120;
        setInterval(function() {
            if (forwards) {
                if (offset >= words3[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words3[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.word4').text(part);
        }, speed);
    };
    //wordflick();
    //wordflick1();
    //wordflick2();
    //wordflick3();
    jQuery.rnd = function(m, n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    function hearts() {
        $.each($(".particletext.hearts"), function() {
            var heartcount = ($(this).width() / 50) * 5;
            for (var i = 0; i <= heartcount; i++) {
                var size = ($.rnd(60, 120) / 10);
                $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
            }
        });
    }
    hearts();
})(jQuery);