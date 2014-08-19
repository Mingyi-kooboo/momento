$(function(){
            $(".five-box > li").click(function(){
                $(this).siblings().children("p").hide().siblings("strong").removeClass("title-FB-hover");
                $(this).children("p").show().siblings("strong").addClass("title-FB-hover");
                $(this).siblings().children("strong").children("span").removeClass("icon-minus").addClass("icon-plus");
                $(this).children("strong").children("span").removeClass("icon-plus").addClass("icon-minus");
            });
        });