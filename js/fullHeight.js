$(function() {
    $(window).resize(function() {
        $('.cover').height($(window).height() - $('.cover').offset().top);
    });
    $(window).resize();
});
