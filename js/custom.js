$(function () {

    $(".toggle_bars").click(function () {
        $(".main_menu .navbar-nav").toggleClass("menu_active")
    });

    //    SLIDER JS HERE
    $('.slide_active').slick({
        arrows: true,
        nextArrow: ".btn_right",
        prevArrow: ".btn_left",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
    },

  ]
    });

    //    Work Gallery Mix Filter HERE
    var mixer = mixitup('.mix_wrap');

    //    VENOBOX POPUP HERE
    $('.ven').venobox();

    //    COUNTRER UP JS HERE
    $('.counter').counterUp({
        delay: 50,
        time: 10000
    });

    //    BRAND PART SLIDER

    $('.brand_active').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },

  ]




    });

    //NEWS SLIDER
    $('.news_active').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },

  ]

    });

    //WOW ANIMATION
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();

});
