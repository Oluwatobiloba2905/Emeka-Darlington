new Swiper(".wrapper", {
    loop: true,
    spaceBetween: 30,
    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // Pagination bullets
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


function contactSales() {
    alert("Redirecting to Sales Contact Page...");
    window.location.href = "mailto:emekadarlington87@gmail.com ";
}

function goToHelpCenter() {
    alert("Redirecting to Help Center...");
    window.location.href = "mailto:emekadarlington87@gmail.com";
}