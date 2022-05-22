$(function () {

    "use strict";


    //=========menu fix js=========   
    if ($('.main_menu').offset() != undefined) {
        var navoff = $('.main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }


    //=========counter.js=========   
    $('.counter').countUp();


    //========venobox.js========
    $('.venobox').venobox();


    //*==========isotop============== 
    var $grid = $('.grid').isotope({});

    $('.wsus__portfolio_filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //active class
    $('.wsus__portfolio_filter button').on("click", function (event) {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();

    });


    //======TESTIMONIAL SLIDER====== 
    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fad fa-arrow-alt-right nextArrow"></i>',
        prevArrow: '<i class="fad fa-arrow-alt-left prevArrow"></i>',
    });





});
