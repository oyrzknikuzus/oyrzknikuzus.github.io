
$(function(){
  $(window).scroll(function (){
    $(".fade_off1").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 1000){
        $(this).addClass("scrollin");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});



$(function(){
  $(window).scroll(function (){
    $(".fade_off2").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 2000){
        $(this).addClass("scrollin");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});
