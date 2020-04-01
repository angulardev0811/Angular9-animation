(function($) {
    /*document ready*/
    $(document).ready(function() {
        if ($('.subpages').length !== 0) {
            $('.main__header').stop().addClass('sub__header');
        }

        if ($(window).width() < 768) {
            $('#menu-lang .lang-item-en a').text('EN');
            $('#menu-lang .lang-item-fr a').text('FR');
        }

        $('.bg-set').each(function() {
            var $this = $(this);
            var controller = new ScrollMagic.Controller();
            var scene = new ScrollMagic
                .Scene({
                    triggerElement: this,
                    reverse: true,
                    triggerHook: 0.6,
                })
                .addTo(controller);

            scene.on("start", function(event) {
                var bgColor = $this.attr('data-bg');
                $('.position').stop().removeClass('shadow');
                $($this).find('.position').stop().addClass('shadow');
                switch (bgColor) {
                    case 'dark':
                        $('.bg__overlay').stop().removeClass('light').addClass('dark');
                        break;
                    case 'light':
                        $('.bg__overlay').stop().removeClass('dark').addClass('light');
                        break;
                }
            });

            scene.on("leave", function(event) {
                $('.position').stop().removeClass('shadow');
                var bgColor = $this.prev().attr('data-bg');
                switch (bgColor) {
                    case 'dark':
                        $('.bg__overlay').stop().removeClass('light').addClass('dark');
                        break;
                    case 'light':
                        $('.bg__overlay').stop().removeClass('dark').addClass('light');
                        break;
                    case undefined:
                        $('.bg__overlay').stop().removeClass('light').addClass('dark');
                        break;
                }
            });
        });

        $('.donwload_btn, .donwload_link a').on('click', function() {
        
            let btn_down = $('.download__buttons').filter(function() {
                return $(this).offset().top > $(window).scrollTop();
            });
            let btn_top = 0;

            if (btn_down.length > 0) {
                btn_top = btn_down.first().offset().top;
                $('html, body').animate({ scrollTop: btn_top - 150 }, 500);


            } else {
                btn_top = $('.download__buttons:last').offset().top;
                $('html, body').animate({ scrollTop: btn_top - 150 }, 500);

            }
        });

        if ($(window).width() < 1199) {
            document.querySelectorAll('.content__slider').forEach((slider) => {
                let pagination = slider.children[1];
                new Swiper(slider, {
                    loop: false,
                    pagination: {
                        el: pagination,
                    },
                });
            });
        }

        var lastScrollTop = $(window).scrollTop();

        lastScrollTop > 0 ? $('.main__header').stop().addClass('sticky') : $('.main__header').stop().removeClass('sticky');

        $(window).on('scroll', () => {
            let st = $(this).scrollTop();
            st > 0 ? $('.main__header').stop().addClass('sticky') : $('.main__header').stop().removeClass('sticky');
        });
        // anchors

        $('.logo__anchor').on('click', function() {
            if ($(window).width() < 500) {
                $('.hamburger').stop().removeClass('is-active');
                $('.main__nav').stop().slideUp(500).removeClass('opened');
            }
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
        });


        if ($('body').hasClass('home')) {
            $('.anchor__link').on('click', function(element) {
                element.preventDefault();
                var currentHeaderHeight = $('.main__header').outerHeight() - 1;
                var el = $(element.target.getAttribute('href'));
                var elOffset = el.offset().top;
                var currentTarget = elOffset - currentHeaderHeight;
                if ($(window).width() < 768) {
                    $('.hamburger').stop().removeClass('is-active');
                    $('.main__nav').stop().slideUp(500).removeClass('opened');
                }

                $('html, body').stop().animate({
                    scrollTop: currentTarget
                }, 1500);
                return false;
            });
        } else {
            $('.anchor__link').each(function() {
                let url = window.location.protocol + '//' + window.location.hostname + '/';
                if (lang != curr_lang) {
                    url += lang + '/';
                }
                console.log(url);
                if ($(this).attr('href')) {
                    $(this).attr('href', url + $(this).attr('href'));
                } else {
                    console.log($(this));

                    let hash = $(this).find('a').attr('href');
                    // console.log(hash);
                    $(this).find('a').attr('href', url + hash);
                }
            });
        }
        // Hamburger

        $('.hamburger').on('click', function() {
            $(this).stop().toggleClass('is-active');
            $('.main__nav').stop().slideToggle(500).toggleClass('opened');
        });
        // animations

        var chartTl = new TimelineMax(),
            dotTl = new TimelineMax({ repeat: -1 }),
            shadowTl = new TimelineMax({ repeat: -1 });

        var motionPath = MorphSVGPlugin.pathDataToBezier(".chart-line", { align: ".chart-dot" });

        TweenMax.set(".chart-dot", { xPercent: -50, yPercent: -50 });
        $('[data-delay]').each(function() {
            var thisDelay = $(this).attr('data-delay');
            $(this).css('transition-delay', thisDelay + 's');
        });

        $('.animation').each(function() {
            const thisController = new ScrollMagic.Controller();
            var contentAnimation = new ScrollMagic
                .Scene({
                    triggerElement: this,
                    triggerHook: 0.8,
                    reverse: false
                })
                .setClassToggle(this, "animated")
                .addTo(thisController);

            contentAnimation.on('start', function(event, scrollDirection) {
                if (event.target.triggerElement().classList.contains('chart-row')) {
                    chartTl
                        .set('.chart__box', { visibility: "visible" })
                        .staggerFromTo('.chart-grid-line', 2.5, { drawSVG: "0%" }, { drawSVG: "102%", ease: Power4.easeOut }, 0.15)
                        .fromTo('.chart-line', 2.5, { drawSVG: "0%" }, {
                            drawSVG: "102%",
                            ease: Power4.easeOut,
                            onComplete: function() {
                                dotTl
                                    .set('.chart-dot', { visibility: "visible" })
                                    .from(".chart-dot", 0.5, { opacity: 0 })
                                    .to(".chart-dot", 5, { bezier: { values: motionPath, type: "cubic" } }, '-=0.5')
                                    .to(".chart-dot", 0.5, { opacity: 0 }, '-=0.5');
                            }
                        }, '-=2')
                        .from('.chart-shadow', 2, {
                            opacity: 0,
                            ease: Power4.easeOut,
                            onComplete: function() {
                                shadowTl
                                    .to('.chart-shadow', 0, { className: '+=pulse' });
                            }
                        }, '-=1.5');
                }

            });

        });

        document.querySelectorAll('*[data-from]').forEach((box) => {
            const thisController = new ScrollMagic.Controller();
            let thisFromPercent = box.getAttribute('data-from'),
                thisToPercent = box.getAttribute('data-to'),
                thisImg = box.children[0];

            const parallaxItem = new TimelineMax()
                .fromTo(thisImg, 1, { y: thisFromPercent }, { y: thisToPercent, ease: Linear.easeNone });

            new ScrollMagic
                .Scene({
                    triggerElement: box,
                    reverse: true,
                    triggerHook: 0.9,
                    duration: '160%'
                })
                .setTween(parallaxItem)
                .addTo(thisController);
        });
    });
    /*window load*/
    $(window).on('load', function() {
        $('.subscribe__form [type="submit"]').wrap('<div class="submit__wrapper">');
    });
    /*window resize*/
    $(window).resize(function() {

    });
})(jQuery);