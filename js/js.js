$(function(){
  //슬라이드
start();
 var imgs = 2;
 var now = 0;

 function start(){
   $('.slide>a>img').eq(0).siblings().fadeIn({'margin-left':'-1200px'});
   setInterval(function(){slide();},3000);
 }

 function slide(){
   now = now==imgs?0:now+=1;
   $('.slide>a>img').eq(now-1).fadeOut({'margin-left':'-1200px'})
   $('.slide>a>img').eq(now).fadeIn({'margin-left':'0px'})
 }

 //탭메뉴
 $('ul.tab li').click(function() {
   var activeTab = $(this).attr('data-tab');
   $('ul.tab li').removeClass('current');
   $('.tab_content').removeClass('current');
   $(this).addClass('current');
   $('#' + activeTab).addClass('current');
 });

//팝업
  $(".pop").click(function(){
      $('#popup').addClass('active');
    });
  $('#popup button').click(function(){
      $('#popup').removeClass('active');
    });
});
