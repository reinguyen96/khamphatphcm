$(document).ready(function () { //đợi DOM tải xong mới chạy js

    /* THANH MENU */
    $("#navigation a").click(function () {        //Hành động click chuột
        $("#navigation a").removeClass("on");    //Xóa class on khỏi các link menu
        $(this).addClass("on");                  //Thêm class on, đánh dấu mục đang chọn
    });

    /* HIÊU ỨNG CUỘN TRANG LÊN */
    $("#navigation a").click(function (e) {        //Hiệu ứng cuộn lên khi click chọn vào thanh menu (các thẻ a trong navigation trên html)
        let target = $(this).attr("href");         //Lấy href của link trang tương ứng
        if (target.startsWith("#")) {              //kiểm tra href bắt đầu bằng #
            e.preventDefault();                    //ngăn các mặc định để xử lý cuộn
            $("html, body").animate({              //xly hiệu ứng cuộn 
                scrollTop: $(target).offset().top - 60        //vị trí cuộn cách đầu trang 60px
            }, 600);                                           //tgian cuộn 600ms
        }
    });

    /* VỀ ĐẦU TRANG */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });

    $("#backToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    /* LOAD TRANG XONG/
    $(window).on("load", function () {
    $(".content-row").addClass("show");
});
});

