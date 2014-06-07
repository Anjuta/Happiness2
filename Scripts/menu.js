$(function() {
    $('.menu').hover(
        function () {
            $(this).stop().animate({
                'marginTop': '-5px'
            },200);
        },
        function () {
            $(this).stop().animate({
                'marginTop': '0px'
            },200);
        }
    )
});