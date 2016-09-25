/**
 * Created by Administrator on 2016/9/23 0023.
 */
(function () {

    $(".light-btn").on("click", function() {
        $(".light-btn-on").fadeIn()
        $(".light-off").fadeOut()
        $(".light-on").fadeIn()
    })

    var swiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        // loop: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })


})();