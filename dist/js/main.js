$(document).ready(function () {
    $('.tabs__title').click(function() {
        var i = $(this).index();
        $('.tabs__title--active').removeClass('tabs__title--active');
        $(this).addClass('tabs__title--active');
        $('.tabs__content--active').removeClass('tabs__content--active');
        $($('.tabs__content')[i]).addClass('tabs__content--active');
    })
    }) 