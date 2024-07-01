$(document).scroll(function() {
    if ($(document).scrollTop() >= 30) {
        $('.front-page-nav').addClass('scroll-down');
        $('.front-page-link').hide();
        $('#front-page-color-select').hide();
    } else {
        $('.front-page-nav').removeClass('scroll-down');
        $('.front-page-link').show();
        $('#front-page-color-select').show();
    }
});