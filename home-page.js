$(document).ready(function () { //đợi DOM tải xong mới chạy js

    /* THANH MENU */
    $("#navigation a").click(function () {        //Hành động click chuột
        $("#navigation a").removeClass("on");    //Xóa class on khỏi các link menu
        $(this).addClass("on");                  //Thêm class on, đánh dấu mục đang chọn
    });

    /* HIÊU ỨNG CUỘN TRANG LÊN */
    $("#navigation a").click(function (e) {        //Hiệu ứng cuộn lên khi click chọn vào thanh menu - các thẻ a trong navigation trên html
        let target = $(this).attr("href");         //Lấy href của link trang tương ứng
        if (target.startsWith("#")) {              //kiểm tra href bắt đầu bằng #
            e.preventDefault();                    //ngăn các mặc định để xử lý cuộn
            $("html, body").animate({              //xly hiệu ứng cuộn 
                scrollTop: $(target).offset().top - 60        //vị trí cuộn cách đầu trang 60px
            }, 600);                                           //tgian cuộn 600ms
        }
    });

    /* VỀ ĐẦU TRANG */
    $(window).scroll(function () {                //khi cuộn trang
        if ($(this).scrollTop() > 300) {          //khoảng cách đầu trang 300px thì xuất hiện nút về đầu trang
            $("#backToTop").fadeIn();            
        } else {
            $("#backToTop").fadeOut();            //ngược lại thì ẩn đi
        }
    });

    $("#backToTop").click(function () {        //Khi lick chọn nút trở về
        $("html, body").animate({              //Thực hiện cuộn lên về đầu trang, tgian 600ms
            scrollTop: 0
        }, 600);
    });

    $(windown).on("load", function(){
        $(".content-row").addClass("show");
    });

});



