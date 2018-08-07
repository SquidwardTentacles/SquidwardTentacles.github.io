
  $(function () {
//   $('.nav ul .li-game').mouseenter(function () {
//    $(this).find('.game').show() ;
//   });
//   $('.nav ul .li-game').mouseleave(function () {
//    $(this).find('.game').hide() ;
//   });
//   $('.nav ul .service-li').mouseenter(function () {
//     $(this).find('.service').show() ;
//   });
//   $('.nav ul .service-li').mouseleave(function () {
//     $(this).find('.service').hide() ;
//   });

  $('.nav').find('li').click(function () {
    $(this).addClass('bgcolor').siblings().removeClass('bgcolor');
    $(this).children('a').addClass('bgcolor').parent('li').siblings('li').children('a').removeClass('bgcolor');
  });


  // $(function () {
  //   $('.nav ul .li-game').mouseenter(function () {
  //     $(this).find('.game').show() ;
  //   });
  //   $('.nav ul .li-game').mouseleave(function () {
  //     $(this).find('.game').hide() ;
  //   });
  //   $('.nav ul .service-li').mouseenter(function () {
  //     $(this).find('.service').show() ;
  //   });
  //   $('.nav ul .service-li').mouseleave(function () {
  //     $(this).find('.service').hide() ;
  //   });

    // $('.nav').find('li').click(function () {
    //   $(this).addClass('bgcolor').siblings().removeClass('bgcolor');
      // $(this).children('a').addClass('bgcolor').parent('li').siblings('li').children('a').removeClass('bgcolor');
    // });

  //});
});
  $(function(){
    /*轮播图开始*/
    /*下方焦点轮播开始*/
    var num = 0;
    $('.pointer li').click(function(){
      var idx = $(this).index();//记录图片索引
      num = idx;
      $(this).addClass('active').siblings('li').removeClass('active');
      $('#lbt .img li').eq(idx).fadeIn(500).siblings('li').fadeOut(500);
    });
    var timerId = null;
    timerId=setInterval(autoMove, 1000);
    $('#main #lbt').mouseenter(function(){
      clearInterval(timerId);
    });
    $('#main #lbt').mouseleave(function(){
      timerId=setInterval(autoMove, 2000);
    })

    function autoMove(){
      num++;
      if(num==4){
        num=0;
      }
      $('.pointer li').eq(num).addClass('active').siblings('li').removeClass('active');
      $('#lbt .img li').eq(num).fadeIn(500).siblings('li').fadeOut(500);
    }
    /*下方焦点轮播结束*/
    /*轮播图结束*/
  });

  $(function() {
    /*tab栏开始*/
    $('#main .nav-game li').mouseenter(function(){
      $(this).addClass('style').siblings('li').removeClass('style');
      var idx = $(this).index();
      $('#main .nav-menu .two').eq(idx).addClass('selected').siblings('div').removeClass('selected');
    });
    /*tab栏结束*/

  
});