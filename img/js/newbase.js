; (function (window, $) {
    function init() {
        bindEvt();
    }
    init();
    function bindEvt() {
        $("#FriendLink").bind("change",function() {
            var selectedHref = $("#FriendLink :selected").val();
            if (selectedHref != "") {
                window.open(selectedHref);
            }
        });
        $(".nav li").hover(navLiMouseOver, navLiMouseOut);
        
    }
    function navLiMouseOver() {
        $(this).parent().parent().find("li").removeClass("hov");
        $(this).addClass("hov");
    }
    function navLiMouseOut() {
        $(".nav li").removeClass("hov");
    }
    //Set SearchInput
    $("#searchForm").children(':text').focus(function () {
        if (!this.initValue) {
            this.initValue = this.value;
        }
        if (this.value === this.initValue) {
            this.value = '';
        }
    }).blur(function () {
        if (this.value === '' || this.value === null) {
            this.value = this.initValue;
        }
    });
})(window, jQuery);
