$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active_1");
        } else {
           
           $(".header").removeClass("active_1");
        }
    });
});