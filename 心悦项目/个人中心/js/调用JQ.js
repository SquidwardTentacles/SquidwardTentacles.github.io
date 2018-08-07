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
//内容content开始
$(function (  ) {
    //左侧 移入移出点击事件
    $(".btn").mouseenter(function (  ) {
        $(this).css("background-position","-200px 0")
    });
    $(".btn").mouseleave(function (  ) {
        $(this).css("background-position","0 0")
    });
    //个人中心点击事件
    $(".l_person .pn01").click(function (  ) {
        $(".l_person .pn01 .s").css("background-position","-264px -96px").parent("a").css("background","#f2f3f7");
        $(".r_login,.r_login_none").hide();
        $(".l_person .pn01 .arr").show();
        $(".r_person").show();
        $(".con-r").off("mouseenter");
    })

    //右边图片鼠标移入移出事件
    $(".con-r").mouseenter(function (  ) {
        $(".r_login_none").show()
    })
    $(".con-r").mouseleave(function (  ) {
        $(".r_login_none").hide()
    })

    //左侧栏点击移入移出事件
    $(".li1 a").click(function (  ) {

        $("html,body").stop(true,false).animate({ scrollTop: 0 }, 500);
    })

    $(".li3 a").mouseenter(function (  ) {
        $("#app_ewm").css("display","block")
    })
    $(".li3 a").mouseleave(function (  ) {
        $("#app_ewm").css("display","none")
    })

});
//内容content结束

//遮罩层与登录框开始
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
//遮罩层与登录框结束

$(function (  ) {
    //点击小叉叉关闭登陆框与遮罩层
    $("#QQ-login .close").click(function (  ) {
        $(".mask").hide();
        $("#QQ-login").hide();
    })
    //所有点击显示登录框
    $("#login,.btn,#z1,#z2,.li2,.li4,.pn02,.pn03,.pn04,.pn05,.pn06").click(function (  ) {
        $(".mask").show();
        $("#QQ-login").show();
    })
});


