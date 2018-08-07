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
        $(this).addClass('bgcolor').children('a').css("color","white").parent().siblings().removeClass('bgcolor').children().css("color","#52505a");
    })

  $('.nav').find('li').mouseenter(function () {
    $(this).addClass('bgcolor').children().css("color","white");
  });

  $('.nav').find('li').mouseleave(function () {
    $(this).removeClass('bgcolor');
  })
    //导航栏点击变色结束
    //导航栏小标签移入变色开始
    $('.nav').find("div").children("a").mouseenter(function () {
        $(this).css("color","#f06a45");
    })
    $('.nav').find("div").children("a").mouseleave(function () {
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
      if (res != true){
            $(this).find("a:eq(0)").css("color","#52505a");
        }
    })

  $(".nav>ul>li").mouseleave(function (){
   var col = $(this).children('a').hasClass('bgcolor')
    if (col!=false){
       $(this).children('a').css('color','#fff') ;
    }
  })
    //导航栏li标签移入变色结束
});
//Nav部分结束

//登陆窗点击出现开始
$(function () {
    $("#login").click(function () {
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