$(document).ready(function () {
    $('body').AddClassAnimation();

    var $burger = $('.js-header-burger');
    var $nav = $('.js-header-toggle nav');
    $burger.on('click', function () {
        $(this).toggleClass('open');
        $('.header').toggleClass('open');
        $nav.toggleClass('open');
        $('body').toggleClass('fixed-position');
    });

    $('.header__menu-item a').click(function () {
        $('a.active').removeClass('active');
        $(this).addClass('active');
        $('.js-header-burger').removeClass('open');
        $('.header').removeClass('open');
        $('.js-header-toggle nav').removeClass('open');
        $('.header__burger-letter').removeClass('open');
        $('.header__nav').removeClass('open');
        $('body').removeClass('fixed-position');
    });

    $('.js-to-item').on('click', function () {
        scrollToItem($(this));
    });

    $(window).scroll(function () {
        const height = $(window).scrollTop();

        if (height > 1) {
            $('.js-header').addClass('is-scroll');
        } else {
            $('.js-header').removeClass('is-scroll');
        }

    });


    $('.countries__dropdown > .countries__caption').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.countries__dropdown > .countries__list > .countries__item').on('click', function() {
        $('.countries__dropdown > .countries__list > .countries__item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open').children('.countries__caption').html($(this).html());

    });


    $('.valuebets__dropdown > .valuebets__caption').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.valuebets__dropdown > .valuebets__list > .valuebets__item').on('click', function() {
        $('.valuebets__dropdown > .valuebets__list > .valuebets__item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open').children('.valuebets__caption').html($(this).html());

    });


});

//Scroll animation
(function ($) {
    var addClassAnimation = {
        elementAnim: '.js-animate',
        classAnim: 'is-animated'
    };

    addClassAnimation.add = function () {
        var element = this.elementAnim;
        var addClass = this.classAnim;

        $(element).each(function () {
            var $this = $(this);
            var offsetEl = $this.offset();

            if (offsetEl.top <= $(document).scrollTop() + $(window).height() / 1.3) {
                $this.addClass(addClass);
            }
        });
    };

    $.fn.AddClassAnimation = function (options) {
        if (options && typeof options === 'object') {
            $.extend(addClassAnimation, options);
        }

        var $this = $(this);

        addClassAnimation.add($this);

        $(window).on('scroll', function () {
            addClassAnimation.add($this);
        });

        return this;
    };
})(jQuery);
//Scroll animation END


// scroll to element
function scrollToItem(elem) {
    var el = $(elem).attr('href').slice(1),
        elToScroll = $(`#${el}`),
        navHeight = ($('.js-header').outerHeight()),
        time = 600,
        gap = 10,
        offsetTop = elToScroll.offset().top,
        totalScroll = offsetTop - navHeight - gap;

    $('body,html').animate({
        scrollTop: totalScroll
    }, time);

    return false;
}
