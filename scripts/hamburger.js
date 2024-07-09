// Show nav buttons when hamburger menu is clicked
function hamburgerOpen() {
    $('.front-page-nav').removeClass(['hide']);
    $('.hamburger').removeClass('scroll-down');
    $('.hamburger').addClass('hide')
}

function hamburgerClose() {
    $('.front-page-nav').removeClass('in-menu');
    $('.front-page-nav').addClass(['scroll-down', 'hide']);
}
