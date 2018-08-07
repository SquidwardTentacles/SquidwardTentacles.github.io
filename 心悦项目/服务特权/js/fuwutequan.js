//TOP部分开始
//登录事件
// $(function () {
//   $('#login').click({
//
//   })
// })
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

//登录界面的开始
$(function () {
  $('#login').click(function () {
    $('#QQ-login').show();
    $('.mask').show();
  })
});

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
});
//登录界面的结束
//Nav部分结束

//main 转圈效果开始
$(function (){
  $('.main-l').mouseenter(function () {
    $(".tl-h2").stop().animate({width:220},300)
    $(".dr-h2").stop().animate({width:220},300)
    $(".ld-h2").stop().animate({height:250},300)
    $(".rt-h2").stop().animate({height:250},300)
  });

  $('.main-l').mouseleave(function () {
    $(".tl-h2").stop().animate({width:5},300)
    $(".dr-h2").stop().animate({width:5},300)
    $(".ld-h2").stop().animate({height:5},300)
    $(".rt-h2").stop().animate({height:5},300)
  });
})

//main 转圈效果结束

//登录查看我的信息开始
$(function () {
  $('#register').on('click',function () {
    $('#QQ-login').fadeTo(1000,1);
    $('.mask').show();
  })
});
//登录查看我的信息结束

//main 轮播图开始
$(function () {
  //点击轮播
  var num = 0;
  $('.main-r ol li').mouseenter(function () {
    var idx = $(this).index()
    num = idx
    $(this).addClass('mainCurrent').siblings('li').removeClass()
    $('.main-r ul li').eq(idx).stop().fadeIn(500).siblings('li').stop().fadeOut(500);
  });
  //自动轮播
  var timer= null
var idx=0;
  timer= setInterval( danru,2000)

  $('.main-r').mouseenter(function () {
    idx=$(this).index()
      num = idx;
        clearInterval(timer);
      }
  )
  $('.main-r').mouseleave(function () {
        timer= setInterval( danru,2000)
      }
  )
    danru();
    function danru()  {
    if (num==4){
      num=0
        $ ( '.main-r ol li' ).eq ( num ).addClass ( 'mainCurrent' ).siblings ( 'li' ).removeClass ()
        $ ( '.main-r ul li' ).eq ( num ).fadeIn ( 1000 ).siblings ( 'li' ).fadeOut ( 1000 );
    }
    else {
        $ ( '.main-r ol li' ).eq ( num ).addClass ( 'mainCurrent' ).siblings ( 'li' ).removeClass ()
        $ ( '.main-r ul li' ).eq ( num ).fadeIn ( 1000 ).siblings ( 'li' ).fadeOut ( 1000 );
        num ++;
    }

  }
});

//main 轮播图结束

//快速入口鼠标移入的开始
$(function () {
  $('#fuli').find('li').on({'mouseenter':function () {
      $(this).find('.io').css('display','none'),
      $(this).find('.i1').css('display','block').parent('li').css('background-color','#f4f4f5')
    },
  });
});
$(function () {
  $('#fuli').find('li').on({'mouseleave':function () {
      // console.log($(this));
      $(this).find('.io').css('display','block').parent('li').css('background-color','#ffffff')
      $(this).find('.i1').css('display','none')
    },
  });
});
//快速入口鼠标移入的结束

//content 尊享服务鼠标移入开始
$(function () {
  //移入
  $('.zxfw li').mouseenter(function () {
    var idx = $(this).index()
    idx+=1
    $(this).find('a').css('background','#f4f4f5 url(img/zx_hover'+idx+'.jpg) no-repeat 50% 10px')
  });
//移出
  $('.zxfw li').mouseleave(function () {
    var ix = $(this).index()
    ix+=1
    $(this).find('a').css('background','#fbfbfb url(img/zx'+ix+'.jpg) no-repeat 50% 10px')
  });
});
//content 尊享服务鼠标移入结束

//content 安全保障鼠标移入开始
$(function () {
  //移入
  $('.aqbz li').mouseenter(function () {
    var idx = $(this).index()
    idx+=1
    $(this).find('a').css('background','#f4f4f5 url(img/aqh'+idx+'.jpg) no-repeat 50% 10px')
  });
//移出
  $('.aqbz li').mouseleave(function () {
    var ix = $(this).index()
    ix+=1
    $(this).find('a').css('background','#fbfbfb url(img/aq'+ix+'.jpg) no-repeat 50% 10px')
  });
});
//content 安全保障鼠标移入结束


//右侧栏目
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

//服务团队变化
$(function (){
    //移入
	$('.content-r li').mouseenter(function (){
		$(this).find('.intro').css("display","none").next().css("display","block")
      $(this).find(".tl-h2").stop().animate({width:171},300)
      $(this).find(".dr-h2").stop().animate({width:171},300)
      $(this).find(".ld-h2").stop().animate({height:308},300)
      $(this).find(".rt-h2").stop().animate({height:308},300)
	})
    //移出
  $('.content-r li').mouseleave(function (){
    $(this).find('.intro').css("display","block").next().css("display","none")
    $(this).find(".tl-h2").stop().animate({width:5},300)
    $(this).find(".dr-h2").stop().animate({width:5},300)
    $(this).find(".ld-h2").stop().animate({height:5},300)
    $(this).find(".rt-h2").stop().animate({height:5},300)
  })
})