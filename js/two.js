$(function () {

    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    // mainSlide
    $('.mainSlide').slick({
        //slidesToShow: 2,
        //arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on')
            .siblings().removeClass('on');
        $('.mainVisual .main_num').text(c + 1)
    });

    $('.main_dots li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })

    $('.main_pro_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
    });

    $(function () {
        $(window).on('scroll', function () {
            var scr = $(window).scrollTop(); // 스크롤 값을 구함
            if (scr > 300) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
            //scr > 300 ? $('#toTop').fadeIn() : $('#toTop').fadeOut()

        });

        $('#toTop').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 2000)
        })


        $(function () {


            var bgColor = ['#f1e6d2', '#f0e5ed', '#d7e6e4'];
            $('.Art .inner').css({ background: bgColor[0] });


            $('.right_slide').on('init afterChange', function (e, s, c) {
                console.log(c);
                $('.Art .left_tab .itm').eq(c).addClass('on').siblings().removeClass('on');

                $('.Art .inner').css({ background: bgColor[c] });
                $('.num').text((c ? c + 1 : 1) + ' / ' + bgColor.length);
            });

            $('.right_slide').slick({
                slidesToShow: 2,
                dots: true,
                arrows: false,
                autoplay: true,
            });

            $('.arrows i:nth-child(1)').on('click', function () {
                $('.right_slide').slick('slickPrev')
            });
            $('.arrows i:nth-child(2)').on('click', function () {
                $('.right_slide').slick('slickNext')
            });
        })
        $(function () {


            var bgColor = ['#fff', '#fff', '#fff'];
            $('.Artt .inner').css({ background: bgColor[0] });


            $('.left_slide').on('init afterChange', function (e, s, c) {
                console.log(c);
                $('.Artt .right_tab .itm').eq(c).addClass('on').siblings().removeClass('on');

                $('.Artt .inner').css({ background: bgColor[c] });
                $('.num').text((c ? c + 1 : 1) + ' / ' + bgColor.length);
            });

            $('.left_slide').slick({
                slidesToShow: 1,
                arrows: true,
                autoplay: true,
            });

            $('.arrows i:nth-child(1)').on('click', function () {
                $('.left_slide').slick('slickPrev')
            });
            $('.arrows i:nth-child(2)').on('click', function () {
                $('.left_slide').slick('slickNext')
            });
        })

    })


})

//tab menu

$('.mainCustomer .tab_menu>li').on('click', function (event) {
    event.preventDefault();
    var _this = $(this); //이벤트가 적용된 자신을 반환
    var idx = $(this).index(); //이벤트가 적용된 자신의 번호를 반환 0,1,2
    _this.addClass('on').siblings().removeClass('on');
    $('.mainCustomer .tab_content>li').eq(idx).addClass('on')
        .siblings().removeClass('on')
});

$('#f_link').on('change', function () {
    var link = $(this).val();
    link && window.open(link);
})

