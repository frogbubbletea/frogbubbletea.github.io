// Hide hamburger on initial load
$(document).ready(function() {
    $('.hamburger').addClass('hide');
});

// Collapse navbar into hamburger
$(document).scroll(function() {
    if ($(document).scrollTop() >= 30) {
        $('.front-page-nav').addClass(['scroll-down', 'hide']);
        $('.hamburger').removeClass('hide');
        $('.hamburger').addClass('scroll-down');
    } else {
        $('.hamburger').removeClass('scroll-down');
        $('.hamburger').addClass('hide');
        $('.front-page-nav').removeClass(['scroll-down', 'hide']);
    }
});