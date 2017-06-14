"use strict";
(function ($) {
    $(document).ready(function () {

//
// Screenshots
// --------------------------------------------------

//magnificPopup

        $('.js-screenshots').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

// owlCarousel

        $(".js-screenshots").owlCarousel({
            items: 4,
            margin: 10,
            nav: true,
            navContainer: '.js-owl-nav-container'
        });

//end
    });
})(jQuery);