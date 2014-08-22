$(function() {
    $(".five-box > li").click(function() {
        $(this).siblings().children("div").hide().siblings("p").removeClass("title-FB-hover");
        $(this).children("div").show().siblings("p").addClass("title-FB-hover");
        $(this).siblings().children("p").children("span").removeClass("icon-minus").addClass("icon-plus");
        $(this).children("p").children("span").removeClass("icon-plus").addClass("icon-minus");
    });


    $('.slider').flexslider({
        controlNav: true,
        directionNav: false,
        start: function(slider) {
            //$(slider.directionNav).appendTo('.slider-topic');
        }
    });


    $('.slider2').flexslider({
        pauseOnAction: false,
        directionNav: false,
        controlNav: "thumbnails"
    });

    /* Date Picker */
    $('.date_picker').datepicker();

    mq();
    $("wgt-menu>i").click(function() {
        $(".wgt-menu>ul").toggleClass("active");
    });



});


function mq() {
    mq_fun();
    $(window).resize(function() {
        mq_fun();
    });
}

function mq_fun() {
    if ($(window).width() <= 960) {
        $(".wgt-concept").insertAfter(".wgt-gift-card-search");
    } else {
        $(".wgt-gift-card-search").insertAfter(".wgt-concept");
    }
}
