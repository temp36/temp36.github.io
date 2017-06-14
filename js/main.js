"use strict";
(function ($) {
        $('.js-related-slots').perfectScrollbar();

    $(document).ready(function () {

//
// magnificPopup
// --------------------------------------------------

// Screenshots

        $('.js-screenshots').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

// js-screenshots-soft

        $('.js-screenshots-soft').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });



//
//  owlCarousel
// --------------------------------------------------

// Screenshots

        $(".js-screenshots").owlCarousel({
            margin: 10,
            nav: true,
            navContainer: '.js-owl-nav-container',
            responsive: {
                0: {
                    items: 2
                },
                420: {
                    items: 3
                },
                768: {
                    items: 4
                }
                ,
                992: {
                    items: 3
                }
                ,
                1211: {
                    items: 4
                }
            }
        });

        $(".js-screenshots-soft").owlCarousel({
            margin: 10,
            nav: true,
            navContainer: '.js-owl-nav-container',
            responsive: {
                0: {
                    items: 2
                },
                420: {
                    items: 3
                },
                768: {
                    items: 4
                }
                ,
                992: {
                    items: 5
                }
                ,
                1211: {
                    items: 5
                }
            }
        });


        // slot

        $(".js-slider__owl").owlCarousel({
            margin: 10,
            nav: true,
            navContainer: '.js-slider__owl-nav-container',
            items:1,
            autoHeight:true,
            dots:true
        });


//
// circle-progress.js
// --------------------------------------------------

        // .js-circle main page

        $('.js-circle').each(function () {
            $(this).circleProgress({

                /**
                 * This is the only required option. It should be from 0.0 to 1.0
                 * @type {number}
                 */
                value: $(this).attr('data-value'),

                /**
                 * Size of the circle / canvas in pixels
                 * @type {number}
                 */
                size: 50.0,

                /**
                 * Initial angle for 0.0 value in radians
                 * @type {number}
                 */
                startAngle: 11,

                /**
                 * Width of the arc. By default it's auto-calculated as 1/14 of size, but you may set it explicitly in pixels
                 * @type {number|string}
                 */
                thickness: 'auto',

                /**
                 * Fill of the arc. You may set it to:
                 *   - solid color:
                 *   - { color: '#3aeabb' }
                 *   - { color: 'rgba(255, 255, 255, .3)' }
                 *   - linear gradient (left to right):
                 *   - { gradient: ['#3aeabb', '#fdd250'], gradientAngle: Math.PI / 4 }
                 *   - { gradient: ['red', 'green', 'blue'], gradientDirection: [x0, y0, x1, y1] }
                 *   - image:
                 *   - { image: 'http://i.imgur.com/pT0i89v.png' }
                 *   - { image: imageObject }
                 *   - { color: 'lime', image: 'http://i.imgur.com/pT0i89v.png' } - color displayed until the image is loaded
                 */
                fill: {
                    gradient: ['#a31b59', '#a31b59']
                },

                /**
                 * Color of the "empty" arc. Only a color fill supported by now
                 * @type {string}
                 */
                emptyFill: 'rgba(211, 211, 211, 1)',

                /**
                 * <a href="http://www.jqueryscript.net/animation/">Animation</a> config (see jQuery animations: http://api.jquery.com/animate/)
                 */
                animation: {
                    duration: 1200,
                    easing: 'circleProgressEasing'
                },

                /**
                 * Default animation starts at 0.0 and ends at specified `value`. Let's call this direct animation.
                 * If you want to make reversed animation then you should set `animationStartValue` to 1.0.
                 * Also you may specify any other value from 0.0 to 1.0
                 * @type {number}
                 */
                animationStartValue: 0.0,

                /**
                 * Reverse animation and arc draw
                 * @type {boolean}
                 */
                reverse: false,

                /**
                 * Arc line cap ('butt' (default), 'round' and 'square')
                 * Read more: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.lineCap
                 * @type {string}
                 */
                lineCap: 'butt'
            });
        });

        // .js-full-rating-circle

        $('.js-full-rating-circle').each(function () {
            $(this).circleProgress({
                value: $(this).attr('data-value'),
                size: 69.0,
                startAngle: 11,
                 thickness: '4',
                fill: {
                    gradient: ['#a31b59', '#a31b59']
                },
                emptyFill: 'rgba(211, 211, 211, 1)'
            });
        });

        // .js-reviews-item__circle

        $('.js-reviews-item__circle').each(function () {
            $(this).circleProgress({
                value: $(this).attr('data-value'),
                size: 27.0,
                startAngle: 11,
                thickness: '2',
                fill: {
                    gradient: ['#a31b59', '#a31b59']
                },
                emptyFill: 'rgba(211, 211, 211, 1)'
            });
        });

        //  js-about-circle

        $('.js-about-circle').each(function () {
            $(this).circleProgress({
                value: $(this).attr('data-value'),
                size: 81.0,
                startAngle: 11,
                thickness: '4',
                fill: {
                    gradient: ['#a31b59', '#a31b59']
                },
                emptyFill: 'rgba(255, 255,255, 1)'
            });
        });

        // js-result-circle

        $('.js-result-circle').each(function () {
            $(this).circleProgress({
                value: $(this).attr('data-value'),
                size: 69.0,
                startAngle: 11,
                thickness: '4',
                fill: {
                    gradient: ['#a31b59', '#a31b59']
                },
                emptyFill: 'rgba(221, 221, 221, 1)'
            });
        });
//
// .js-header-search
// --------------------------------------------------

        $('.js-header-search a').on('click', function (event) {
            $('.js-header-search__form').toggleClass('hidden');
        });

//
// slick
// --------------------------------------------------

        // _Soft

        $('.js-soft-casino-list').slick({
            dots: true,
            infinite: false,
            speed: 300,
            adaptiveHeight: true,
            rows: 2,
            slidesToShow: 4,
            slidesToScroll: 4,
            dotsClass:"soft-casino-slider__dots",

            responsive: [

                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        rows: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1211,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }
            ]
        });

//
//  Form Styler
// --------------------------------------------------

        // _Online_slots

        $('.js-online-select').each(function(){
            $(this).styler();
        });

//
//  Form Styler
// --------------------------------------------------

        // _Slots


        // function changeSize() {
        //     var width = parseInt($("#Width").val());
        //     var height = parseInt($("#Height").val());
        //
        //     $("#Demo").width(width).height(height);
        //
        //     // update scrollbars
        //     $('#Demo').perfectScrollbar('update');
        //
        //     // or even with vanilla JS!
        //     Ps.update(document.getElementById('Demo'));
        // }


            // $('.js-related-slots').perfectScrollbar();


        // function changeSize() {
        //     var width = parseInt($(".js-related-slots").val());
        //     var height = parseInt($(".js-related-slots").val());
        //
        //     $(".js-related-slots").width(width).height(height);
        //
        //     // update scrollbars
        //     $('.js-related-slots').perfectScrollbar('update');
        //
        //
        // }
        // $(function() {
        //     $('.js-r').perfectScrollbar();
        // });
        // changeSize();







// --------------------------------------------------
// end wrap  $(document).ready(function () {
    });
})(jQuery);
