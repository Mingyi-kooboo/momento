$(function() {
    $(".five-box > li").click(function() {
        $(this).siblings().children("p").hide().siblings("strong").removeClass("title-FB-hover");
        $(this).children("p").show().siblings("strong").addClass("title-FB-hover");
        $(this).siblings().children("strong").children("span").removeClass("icon-minus").addClass("icon-plus");
        $(this).children("strong").children("span").removeClass("icon-plus").addClass("icon-minus");
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

    /* media queries */
    mq();
    $(".wgt-menu>i").click(function() {       
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
