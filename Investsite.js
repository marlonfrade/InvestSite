/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
    if ($(window).scrollTop() >= 360) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});
// $(window).scroll(function () {
//     var sc = $(window).scrollTop()
//     if (sc > 100) {
//         $("#header-sroll").addClass("small")
//     } else {
//         $("#header-sroll").removeClass("small")
//     }
// });