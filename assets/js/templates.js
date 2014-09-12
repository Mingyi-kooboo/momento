$(function() {
    $(".five-box > li").click(function() {
        $(this).siblings().children("div").hide().siblings("p").removeClass("title-FB-hover");
        $(this).children("div").show().siblings("p").addClass("title-FB-hover");
        $(this).siblings().children("p").children("span").removeClass("icon-minus").addClass("icon-plus");
        $(this).children("p").children("span").removeClass("icon-plus").addClass("icon-minus");
    });


    $('.slider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false,
        start: function(slider) {           
        }
    });


    $('.slider2').flexslider({
        pauseOnAction: false,
        directionNav: false,
        controlNav: "thumbnails"
    });

    /* Date Picker */
    var array = ["2014-09-17","2014-09-19","2014-09-28"]
    $('.date_picker').datepicker({
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [ array.indexOf(string) == -1 ]
         },
        showOtherMonths: true,
        selectOtherMonths:true
    });

    /* media queries */
    mq();
    $(".wgt-menu>i").click(function() {
        $(".wgt-menu>ul").toggleClass("active");
    });

    /* select */
    $("select.flexselect").click(function() {
        if($(this).hasClass('cur')){
            $(".select-mask").hide();
            $(this).removeClass("cur");
        }else{
            $(".select-mask").show();
            $(this).addClass("cur");
        }
    });
    $(document).click(function(event) {
        if(!$(event.target).is("select")){
            $(".select-mask").hide();
        }
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
