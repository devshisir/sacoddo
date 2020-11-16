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
                items:1
            },
            600:{
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






});