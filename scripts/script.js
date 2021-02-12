$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600)
    })

    $('.multiple-items').slick({
        infinite: true,
        arrows: true,
        // dots: true,

        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        responsive: [{
                breakpoint: 1105,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 715,
                settings: {
                    arrows: false,
                    i: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,

                }
            }
        ]
    });

});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function() {
            swiper.changeDirection(getDirection());
        }
    },
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 1,

        },
        1024: {
            slidesPerView: 1,

        },
    }
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 1040 ? 'vertical' : 'horizontal';

    return direction;
}

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
            $('.burger-menu_nav').css('display', 'flex')
        } else {
            $('body').css('overflow', 'visible');
            $('.burger-menu_nav').css('display', 'none')
        }
    }
}

burgerMenu('.burger-menu');