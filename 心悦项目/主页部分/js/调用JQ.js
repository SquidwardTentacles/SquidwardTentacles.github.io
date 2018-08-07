//TOP部分开始
//特权地图移入移出事件开始
$(function(){
    $("#map").mouseenter(function (){
        $("#tequanditu").stop().slideDown()
    })
    $("#map").mouseleave(function (){
        $("#tequanditu").stop().slideUp(100)
    })
})
//特权地图移入移出事件结束
//TOP 部分结束 (登陆部分空缺)

//Nav部分开始
$(function () {
    $('.nav ul .li-game').mouseenter(function () {
        $(this).find('.game').show() ;
    });
    $('.nav ul .li-game').mouseleave(function () {
        $(this).find('.game').hide() ;
    });
    $('.nav ul .service-li').mouseenter(function () {
        $(this).find('.service').show() ;
    });
    $('.nav ul .service-li').mouseleave(function () {
        $(this).find('.service').hide() ;
    });
    //导航栏点击变色开始
    $('.nav').find('li').click(function () {
        $(this).addClass('bgcolor').children().css("color","white").parent().siblings().removeClass('bgcolor').children().css("color","#52505a");
    })
    //导航栏点击变色结束
    //导航栏小标签移入变色开始
    $('.nav').find("div").find("a").mouseenter(function () {
        $(this).css("color","#f06a45");
    })
    $('.nav').find("div").find("a").mouseleave(function () {
        $(this).css("color","#52505a");
    })
    // 导航栏小标签移出变色结束
    //导航栏li标签移入变色开始
    $(".nav>ul>li").mouseenter(function (){
        var res=$(this).hasClass("bgcolor");
        if (res!=true){
            $(this).find("a:eq(0)").css("color","#468dff");
        }
    })
    $(".nav>ul>li").mouseleave(function (){
        var res=$(this).hasClass("bgcolor");
        if (res!=true){
            $(this).find("a:eq(0)").css("color","#52505a");
        }
    })
    //导航栏li标签移入变色结束
});
//Nav部分结束

//登陆窗点击出现开始
$(function () {
    $("#login,#loginBar").click(function () {
        $("#QQ-login").show();
        $("#mask").show();
    })
    //登陆窗点击出现结束
    //qq登录鼠标点击事件
    $('#qq-denglu').click(function () {
        $('#wx-BigBox').hide();
        $('#login-box2').show();
        $('#qq-denglu').css({
            'border-top':'3px solid #468dff ',
            'border-bottom':'1px solid white '
        });
        $('#wx-denglu').css({
            'border-top':'3px solid white ',
            'border-bottom':'1px solid #468dff '
        });
        $('#login-box1').css({
            'border-bottom':'1px solid #468dff '
        })
    });
    //右边点击关闭事件
    $('#gaunbi').mouseenter(function () {
        $(this).css({
            'cursor':'pointer'
        })
        $('#gaunbi').click(function () {
            $('.mask').hide();
            $('#QQ-login').hide()

        })
    });
    //微信登录移入事件
    $('#wx-denglu').mouseenter(function () {
        $(this).css({
            'cursor':'pointer'
        })
    });
    //qq登录移入事件
    $('#qq-denglu').mouseenter(function () {
        $(this).css({
            'cursor':'pointer'
        })
    })
    $('#wx-denglu').click(function () {
        $('#wx-BigBox').show();
        $('#login-box2').hide();

        $('#wx-denglu').css({
            'border-top':'3px solid #13d210 ',
            'border-bottom':'1px solid white '

        });
        $('#qq-denglu').css({
            'border-top':'3px solid white ',
            'border-bottom':'1px solid #13d210 '
        })
        $('#login-box1').css({
            'border-bottom':'1px solid #13d210 '
        })
    });
    $('#login-box4').mouseenter(function () {
        $('#login-ewm').stop().animate({
            left:40
        })
        $('#login-JLT').stop().show(500);
    })
    $('#login-box4').mouseleave(function () {
        $('#login-ewm').stop().animate({
            left:115
        })
        $('#login-JLT').stop() .hide(300);
    })
})
//登陆窗关闭


//大轮播图开始
$(function() {
    $ ( ".denglu .loginBar" ).mouseenter ( function () {
        $ ( "#orange" ).show ()
    } )
    $ ( ".denglu .loginBar" ).mouseleave ( function () {
        $ ( "#orange" ).hide ()
    } )
    //计时器行数开始
    var timerID=null;
    var PicIndex=0;
    function AutoLunbo(){
        clearInterval(timerID)
        timerID=setInterval(function(){
            $(".pic1").find("li").eq(PicIndex).fadeIn(500).siblings("li").fadeOut(500)
            $(".lunbotu .chooseBtn>li").eq(PicIndex).css("backgroundColor","red").siblings("li").css("backgroundColor","skyblue")
            if (PicIndex<2){
                PicIndex++;
            }
            else {
                PicIndex=0;
            }
        },1000)
    }
    AutoLunbo();
//        计时器函数结束
//    按钮移入移出事件开始
    $(".lunbotu .chooseBtn>li").mouseenter(function(){
        clearTimeout(timerID)
        var Idx=$(this).index();
        PicIndex=$(this).index();
        $(this).css("backgroundColor","red").siblings("li").css("backgroundColor","skyblue");
        $(".lunbotu .pic1").find("li").eq(Idx).fadeIn().siblings("li").fadeOut()
    })
    // $(".lunbotu .chooseBtn>li").mouseleave(function(){
    //     AutoLunbo();
    // })
//    按钮移入移出事件结束
$(".lunbotu").mouseenter(function () {
    clearTimeout(timerID);
})
    $(".lunbotu").mouseleave(function () {
        AutoLunbo();
    })

})

//大轮播图结束



//中间内容部分开始
$(function () {
//    图片移入边框变色
    $("#cellLeft,#cellRight").mouseenter(function(){
        $(this).css("border","1px solid #f06a45")
    })
    $("#cellLeft,#cellRight").mouseleave(function(){
        $(this).css("border","1px solid #ccc")
    })
//   图片移出边框还原
//切换开始
    $(".daohang li").mouseenter(function(){
        var idx = $(this).index()/2;
        $('.content>ul').eq(idx).show().siblings('ul').hide();
        $(this).find("div").show()
    })
    $(".daohang li").mouseleave(function(){
        $(this).find("div").hide()
    })
//切换结束

//    快速入口开始
    $("#quickLeft>li").mouseenter(function () {
     $(this).find("div").show()
    })
    $("#quickLeft>li").mouseleave(function () {
        $(this).find("div").hide()
    })
//快速入口结束

//    小轮播图开始
//    生活特权动画开始
    $("#lunbotu").mouseenter(function(){
        $("#life").animate({
            left:-20
        },500)
    })
    $("#lunbotu").mouseleave(function() {
        $ ( "#life" ).animate ( {
            left : 0
        }, 500 )

    })
    //    生活特权动画结束
        //计时器行数开始
        var timerId=null;
        var picIndex=0;
        function autoLunbo(){
            clearInterval(timerId)
            timerId=setInterval(function(){
                $(".pictures").find("li").eq(picIndex).fadeIn(500).siblings("li").fadeOut(500)
                $("#lunbotu .chooseBtn>li").eq(picIndex).css("backgroundColor","red").siblings("li").css("backgroundColor","skyblue")
                if (picIndex<3){
                    picIndex++;
               }
               else {
                    picIndex=0;
               }
            },1000)
        }
        autoLunbo();
//        计时器函数结束
//    按钮移入移出事件开始
$("#lunbotu .chooseBtn>li").mouseenter(function(){
    clearTimeout(timerId)
    var idx=$(this).index();
    picIndex=$(this).index();
    $(this).css("backgroundColor","red").siblings("li").css("backgroundColor","skyblue");
    $("#lunbotu .pictures").find("li").eq(idx).fadeIn().siblings("li").fadeOut()
})
        $("#lunbotu .chooseBtn>li").mouseleave(function(){
            autoLunbo();
        })
//    按钮移入移出事件结束



})
//中间部分结束

//右侧栏
$(function(){
    //移入顶部
    $("#returnTop").click(function(){
        $("html,body").stop(true,false).animate({
            scrollTop:0
        },1000,"linear")
    })
    //打开微信
    $(".rb4").click(function(){
        $("#QQ-login").show()
        $(".mask").show()
    })
    //打开微信
    $(".rb3").click(function(){
        $("#QQ-login").show()
        $(".mask").show()
    })
    //鼠标移入显示二维码
    $(".rb2").mouseenter(function(){
        $("#DcodeBox").show()
    })

    $(".rb2").mouseleave(function(){
        $("#DcodeBox").hide()
    })

})