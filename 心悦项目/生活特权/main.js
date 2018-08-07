//qq登录界面
$(function () {
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


//头部特权地图

$(function(){
    //点击你好,请登录显示遮罩层与qq
    $("#login").click( function() {
        $("#QQ-login").show()
        $(".mask").show()

    })

    // 特权地图移入展开盒子/移出收回盒子
    $("#map").mouseenter(function (){
        $("#tequanditu").stop().slideDown()
    })
    $("#map").mouseleave(function (){
        $("#tequanditu").stop().slideUp(100)
    })

})


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
});

//Nav部分结束



//轮播图
$(function(){
// 获取元素



// 定时器
var timeID  = setInterval(rightFun, 2000);
// 鼠标进入大盒子关闭定时器
    $("#g_movepic").mouseenter(function(){
    clearInterval(timeID);
});
// 鼠标离开重新开启定时器
    $("#g_movepic").mouseleave(function(){
    // 设表先关
    clearInterval(timeID);
    timeID = setInterval(rightFun, 2000);
});


// 给值
var index = 0;
// 右按钮的点击事件
    $("#rightBtn").click(rightFun);
// 右按钮的声明
function rightFun(){
    // 老图淡出
   $("#g_movepic .u_adshow_img li").eq(index).fadeOut(500);
    index ++;
    // 后验证
    if(index >  $("#g_movepic .u_adshow_img li").length - 1){
        index = 0;
    }

    // 新图淡入
    $("#g_movepic .u_adshow_img li").eq(index).fadeIn(500);
    // 小圆点改变
    $("#g_movepic #circles ol li").eq(index).addClass("cur").siblings().removeClass("cur");
}
//鼠标左键移入改变
    $("#leftBtn").mouseenter(function(){
        $("#leftBtn").css({
        backgroundPosition:" 94px 94px"
    })
})
    $("#leftBtn").mouseleave(function(){
        $("#leftBtn").css({
        backgroundPosition:" 0px 0px"
    })
})
// 左按钮点击事件
    $("#leftBtn").click(function(){
        // 老图淡出
    $("#g_movepic .u_adshow_img li").eq(index).fadeOut(500);
        // 信号量改变
        index --;
        if(index < 0){
            index = $("#g_movepic .u_adshow_img li").length - 1;
        }
        // 新图淡入
    $("#g_movepic .u_adshow_img li").eq(index).fadeIn(500);
        // 小圆点改变
        $("#g_movepic #circles ol li").eq(index).addClass("cur").siblings().removeClass("cur");

});
//鼠标右键移入改变
    $("#rightBtn").mouseenter(function(){
        $("#rightBtn").css({
        backgroundPosition:" -94px 0px"
    })
})
    $("#rightBtn").mouseleave(function(){
        $("#rightBtn").css({
        backgroundPosition:" 0px -94px"
    })
})

// 小圆点的事件
    $("#g_movepic #circles ol li").mouseenter(function(){
    // 老图淡出
    $("#g_movepic .u_adshow_img li").eq(index).stop(true).fadeOut(500);
    // 改变下标值
    index = $(this).index();
    // 新图淡入
    $("#g_movepic .u_adshow_img li").eq(index).stop(true).fadeIn(500);
    // 小圆点改变
    $(this).addClass("cur").siblings().removeClass("cur");
});
})


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

//使得top栏变色
$(function () {
    $(".right-login").click(function(){
        $("#QQ-login").show()
        $(".mask").show()
    })
    $('.item-bar').click(function () {
        $(this).addClass('ClickSJ').siblings().removeClass('ClickSJ')
    })


//下面图片的鼠标移入事件
$('.game-li').mouseenter(function () {
    $(this).children('.HD-jianjie').show().stop(false,true).animate({
        'top':0
    },50,function () {

    }).parent().siblings().children('.HD-jianjie').hide()
    $(this).children('.li-img').children('.over').stop(false,true).animate({
        'top':-70
    },100)



})
$('.game-li').mouseleave(function () {
    $(this).children('.HD-jianjie').show().stop(false,true).animate({
        'top':264
    },100).parent().siblings().children('.HD-jianjie').hide()
    $(this).children('.li-img').children('.over').stop(false,true).animate({
        'top':10
    },100)

})
$('.cli').on({
    'click':function () {
        $('.aiyo').show()
        $('.HD-moban').hide()
    }
})
$('.ClickSJ').on({
    'click':function () {
        $('.aiyo').hide()
        $('.HD-moban').show()
    }

})
$('.yijieshu').on({
    'click':function () {
        $('.aiyo').hide()
        $('.HD-moban').show()
    }

})

})



// //使得精灵图往上移动
// $(function(){
//     $(".HD-moban").mouseenter(function(){
//         $(".li-img .over").stop(true).animate({
//             'background-positionX':0+"px",
//             'background-positionY':200+"px"
//         },1000)
//
// })
//     $(".HD-moban").mouseleave(function(){
//         $(".li-img .over").animate({
//             'background-positionX':0+"px",
//             'background-positionY':98+"px"
//         },1000)
//
//     })
//
//
//
//
// })



