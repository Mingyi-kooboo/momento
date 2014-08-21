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

    mq();

});


function mq() {
    var mq = window.matchMedia('@media screen and (max-width: 960px)');
    if (mq.matches) {
        return;
    } else {
        if ($("body.home").length > 0) {
            $(".wgt-concept").insertAfter(".wgt-gift-card-search");
        }

    }

    mq.addListener(function(changed) {
        if (changed.matches) {
            return;
        } else {
            if ($("body.home").length > 0) {
                $(".wgt-concept").insertAfter(".wgt-gift-card-search");
            }
        }
    });
}
