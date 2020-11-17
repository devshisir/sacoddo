$(document).ready(function () {
    var school = $(window);
    var page = $('html, body');
    

    $('.leftPanelTopsliderActive').owlCarousel({
        stagePadding: 150,
        loop:true,
        margin:20,
        nav:true,
        smartSpeed: 1000,
        autoPlay: true,
        navText: ['<i class="far fa-arrow-left"></i>','<i class="far fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1,
                stagePadding: 50,
            },
            576:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                stagePadding: 70,
                items:1
            },
            1401:{
                stagePadding: 110,
                items:1
            },
            1700:{
                stagePadding: 150,
                items:1
            },
        }
    })


    $('.leftpanelBottomSliderActive').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        smartSpeed: 1000,
        autoPlay: true,
        navText: ['<i class="far fa-arrow-left"></i>','<i class="far fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })



    $("#dateInoutfild").flatpickr();
    $("#dateInoutfild2").flatpickr();
    $("#dateInoutfild3").flatpickr();
    $("#dateInoutfild4").flatpickr();


    $('.menutoggleBar span').on('click',function(){
        $('#mobile_menuContent').toggleClass('show');
    })

    $('.menuTopClose').on('click',function(){
        $('#mobile_menuContent').toggleClass('show');
    })
    

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('#headerTop').addClass('fixed animate__animated animate__slideInDown');
            $('#mobileHeder').addClass('fixed animate__animated animate__slideInDown');
        }
        else {
            $('#headerTop').removeClass('fixed animate__animated animate__slideInDown');
            $('#mobileHeder').removeClass('fixed animate__animated animate__slideInDown');
        }
    });



     



});