$(function () {
    let headerHeight = $("#header").innerHeight(),
        nav = $("#navbar-main"),
        scrollOffset = $(window).scrollTop(),
        isNoviBuilder = false,
        pageTransitionAnimationDuration = 500,
        plugins = {
            wow: $(".wow"),
            customToggle: $("[data-custom-toggle]"),
            counter: document.querySelectorAll('.counter'),
            progressLinear: document.querySelectorAll('.progress-linear'),
            preloader: $(".preloader"),
            swiper: $(".swiper-slider")
        };

    $(window).on('load', function () {
        if (plugins.preloader.length && !isNoviBuilder) {
            pageTransition({
                target: document.querySelector('.page'),
                delay: 0,
                duration: pageTransitionAnimationDuration,
                classActive: 'animated',
                conditions: function (event, link) {
                    return link && !/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(link);
                },
                onTransitionStart: function (options) {
                    setTimeout(function () {
                        plugins.preloader.removeClass('loaded');
                    }, options.duration * .75);
                },
                onReady: function () {
                    plugins.preloader.addClass('loaded');
                    windowReady = true;
                }
            });
        }

        if (plugins.counter) {
            for (const element of plugins.counter) {
                let
                    node = element,
                    counter = aCounter({
                        node: node,
                        duration: node.getAttribute('data-duration') || 1000
                    }),
                    scrollHandler = (function () {
                        if (Util.inViewport(this) && !this.classList.contains('animated-first')) {
                            this.counter.run();
                            this.classList.add('animated-first');
                        }
                    }).bind(node),
                    blurHandler = (function () {
                        this.counter.params.to = parseInt(this.textContent, 10);
                        this.counter.run();
                    }).bind(node);

                scrollHandler();
                window.addEventListener('scroll', scrollHandler);
                node.addEventListener('blur', blurHandler);
            }
        }
    });

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= headerHeight) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    }

    /** Open aside header */
    let showAsideBtn = $("#show-aside-content");
    showAsideBtn.on("click", function () {
        let navbarAside = $("#navbar-aside-content");
        if (navbarAside.hasClass("active")) {
            navbarAside.removeClass("active");
            showAsideBtn.removeClass("active");
        } else {
            navbarAside.addClass("active");
            showAsideBtn.addClass("active");
        }
    });

    /** Slider */
    const swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
    });

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [57.254271, 60.108602],
            zoom: 14,
            controls: ["zoomControl"],
        });
        if ($(window).width() <= 1100) {
            myMap.behaviors.disable(["scrollZoom"]);
        }
        myMap.geoObjects.add(
            new ymaps.Placemark(
                [57.254271, 60.108602],
                {
                    balloonContent:
                        "624130, Россия, Новоуральск, Красногвардейский проезд, д. 4",
                    iconCaption:
                        'Региональное отделение Российской фелинологической организации "Уральский племенной фелинологический центр',
                },
                {
                    preset: "islands#icon",
                    iconColor: "#0095b6",
                }
            )
        );
    }

    /** Burger toggle */
    $("#burger").on("click", function (event) {
        event.preventDefault();

        $("#burger").toggleClass("active");
        $("#nav-content").toggleClass("active");
    });

    /** Footer date */
    $(".copyright-year").text(new Date().getFullYear());
});

document.addEventListener('DOMContentLoaded', function () {
    let progressBars = document.querySelectorAll('.progress-linear');
    let isNoviBuilder = window.xMode;

    // Progress Bar
    for (const element of progressBars) {
        let
            container = element,
            counter = aCounter({
                node: container.querySelector('.progress-linear-counter'),
                duration: container.getAttribute('data-duration') || 1000,
                onStart: function () {
                    this.custom.bar.style.width = this.params.to + '%';
                }
            });

        counter.custom = {
            container: container,
            bar: container.querySelector('.progress-linear-bar'),
            onScroll: (function () {
                if ((Util.inViewport(this.custom.container) && !this.custom.container.classList.contains('animated')) || isNoviBuilder) {
                    this.run();
                    this.custom.container.classList.add('animated');
                }
            }).bind(counter),
            onBlur: (function () {
                this.params.to = parseInt(this.params.node.textContent, 10);
                this.run();
            }).bind(counter)
        };

        counter.custom.onScroll();
        if (isNoviBuilder) counter.params.node.addEventListener('blur', counter.custom.onBlur);
        else window.addEventListener('scroll', counter.custom.onScroll);
    }
});
