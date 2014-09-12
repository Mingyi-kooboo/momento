var momento = (function() {
    // 申明
    var momento = {
        // 设置首页Slider
        _setSliderHome: function() {
            $('.slider').flexslider({
                animation: "slide",
                controlNav: true,
                directionNav: false,
                start: function(slider) {}
            });
        },

        // 设置详细页面Slider
        _setSliderDetail: function() {
            $('.slider2').flexslider({
                pauseOnAction: false,
                directionNav: false,
                controlNav: "thumbnails"
            });
        },

        // 时间控件
        _setDatePicker: function() {
            var array = ["2014-09-17","2014-09-19","2014-09-28"]
            $('.date_picker').datepicker({
                beforeShowDay: function(date){
                    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                    return [ array.indexOf(string) == -1 ]
                 },                
                showOtherMonths: true,
                selectOtherMonths:true,
            });
            $('.date_picker').datepicker();
        },

        // 菜单显示隐藏
        _setMemu: function() {
            $(".wgt-menu>i").click(function() {
                $(".wgt-menu>ul").toggleClass("active");
            });
        },

        // 设置select
        _setSelect: function() {
            $("select.flexselect").click(function() {
                if ($(this).hasClass('cur')) {
                    $(".select-mask").hide();
                    $(this).removeClass("cur");
                } else {
                    $(".select-mask").show();
                    $(this).addClass("cur");
                }
            });
            $(document).click(function(event) {
                if (!$(event.target).is("select")) {
                    $(".select-mask").hide();
                }
            });
        },

        // 响应式
        _setResponsiveHome: function() {
            // 位置调整
            if ($(window).width() <= 960) {
                $(".wgt-concept").insertAfter(".wgt-gift-card-search");
            } else {
                $(".wgt-gift-card-search").insertAfter(".wgt-concept");
            }
        },

        // 初始化
        init: function() {
            this._setMemu();
            this._setSelect();
            this._setDatePicker();
            this._setSliderDetail();
            this._setSliderHome();
            this._setResponsiveHome();
            $(window).resize(function() {
                this._setResponsiveHome();
            });
        }       
    };
    return momento;
}());
