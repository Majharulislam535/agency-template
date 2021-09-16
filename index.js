new WOW().init();

$('#hamburger').click(() => {
    $('.side-menu').css({ 'right': '0px' });
})

$('#close').click(() => {
    $('.side-menu').css({ 'right': '-400px' });
})