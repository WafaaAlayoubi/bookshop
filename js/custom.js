/* global $, alert ,consoler */

// Header height
$(function() {
    var myHeader = $(".header"),
        mySlider = $(".bxslider");
    myHeader.height($(window).height());
    $(window).resize(function() {
        myHeader.height($(window).height());
        mySlider.each(function() {
            $(this).css(
                "paddingTop",
                ($(window).height() - $(".bxslider li").height()) / 2
            );
        });
    });

    //Add active class
    $(".links li a").click(function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    // adjust slider
    mySlider.each(function() {
        $(this).css(
            "paddingTop",
            ($(window).height() - $(".bxslider li").height()) / 2
        );
    });
    // Trigger The Slider

    mySlider.bxSlider({
        pager: false,
    });

    //Smooth scrol to div
    $(".links li a").click(function() {
        $("html, body").animate({
                scrollTop: $("#" + $(this).data("value")).offset().top,
            },
            1000
        );
        console.log("#" + $(this).data("value"));
    });

    // our Slider
    (function autoSlider() {
        $(".slider .active").each(function() {
            if (!$(this).is(":last-child")) {
                $(this)
                    .delay(3000)
                    .fadeOut(1000, function() {
                        $(this).removeClass("active").next().addClass("active").fadeIn();
                        autoSlider();
                    });
            } else {
                $(this)
                    .delay(3000)
                    .fadeOut(1000, function() {
                        $(this).removeClass("active");
                        $(".slider div").eq(0).addClass("active").fadeIn();
                        autoSlider();
                    });
            }
        });
    })();
    //  MixitUp
    $("#Container").mixItUp();
    // Shuffle Links

    $(".shuffle li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    // Nice Scroll

    $("html").niceScroll({
        cursorcolor: "#919A76",
        cursorwidth: "10px",
        cursorborder: "1px solid #919A76",
        cursorborderradius: 0,
    });
});