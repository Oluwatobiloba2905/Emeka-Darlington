/*global $, jQuery, alert*/
$(document).ready(function () {

    'use strict';

    // ========================================================================= //
    //  //SMOOTH SCROLL
    // ========================================================================= //


    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
            if ($(window).width() < 768) {
                $('.nav-menu').slideUp();
            }
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target;

        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top - 80
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });


    function onScroll(event) {
        if ($('.home').length) {
            var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
            });
        }
    }

    // ========================================================================= //
    //  //NAVBAR SHOW - HIDE
    // ========================================================================= //


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("#main-nav, #main-nav-subpage").slideDown(700);
            $("#main-nav-subpage").removeClass('subpage-nav');
        } else {
            $("#main-nav").slideUp(700);
            $("#main-nav-subpage").hide();
            $("#main-nav-subpage").addClass('subpage-nav');
        }
    });

    // ========================================================================= //
    //  // RESPONSIVE MENU
    // ========================================================================= //

    $('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });

    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //

    var typed = $(".typed");

    $(function () {
        typed.typed({
            strings: ["Actor.", "Model", "Content Creator", "Entertainer."],
            typeSpeed: 100,
            loop: true,
        });
    });


    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //


    $('.services-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 4
            }
        }
    });

    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //

    var magnifPopup = function () {
        $('.popup-img').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };


    // Call the functions
    magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {

    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-thumbnail',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

})







/*global $, jQuery, alert*/
$(document).ready(function () {

    'use strict';

    // ========================================================================= //
    //  SMOOTH SCROLL
    // ========================================================================= //

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
            if ($(window).width() < 768) {
                $('.nav-menu').slideUp();
            }
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target;

        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top - 80
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event) {
        if ($('.home').length) {
            var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
            });
        }
    }

    // ========================================================================= //
    //  NAVBAR SHOW - HIDE
    // ========================================================================= //

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("#main-nav, #main-nav-subpage").slideDown(700);
            $("#main-nav-subpage").removeClass('subpage-nav');
        } else {
            $("#main-nav").slideUp(700);
            $("#main-nav-subpage").hide();
            $("#main-nav-subpage").addClass('subpage-nav');
        }
    });

    // ========================================================================= //
    //  RESPONSIVE MENU
    // ========================================================================= //

    $('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });

    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //

    var typed = $(".typed");

    $(function () {
        typed.typed({
            strings: ["Actor.", "Model", "Content Creator", "Entertainer."],
            typeSpeed: 100,
            loop: true
        });
    });

    // Make typed text less bold
    $('.typed').css('font-weight', '400');

    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //

    $('.services-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 4
            }
        }
    });

    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //

    var magnifPopup = function () {
        $('.popup-img').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    magnifPopup();

    // ========================================================================= //
    //  Follower Count Animation
    // ========================================================================= //

    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('count')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

// ========================================================================= //
//  Portfolio isotope and filter
// ========================================================================= //
$(window).load(function () {

    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-thumbnail',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

});





let currentIndex = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const messages = [
    "This is a beautiful mountain view at sunrise 🌄",
    "Experience the calm of a quiet lakeside moment 🌊",
    "Adventure through rocky hills and deep skies ⛰️",
    "Find serenity in nature's endless palette 🍃"
];

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
    updateSlidePosition();
}

setInterval(() => {
    moveSlide(1);
}, 4000);

function showModal(index) {
    const modal = document.getElementById('popupModal');
    const modalText = document.getElementById('modalText');
    modalText.innerText = messages[index] || "Default popup message";
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('popupModal').style.display = "none";
}


let slideIndex = {
    carouselTrack1: 0,
    carouselTrack2: 0
};

function moveSlide(direction, trackId) {
    const track = document.getElementById(trackId);
    const slides = track.children;
    const totalSlides = slides.length;

    slideIndex[trackId] += direction;

    if (slideIndex[trackId] < 0) slideIndex[trackId] = totalSlides - 1;
    if (slideIndex[trackId] >= totalSlides) slideIndex[trackId] = 0;

    track.style.transform = `translateX(-${slideIndex[trackId] * 100}%)`;
}