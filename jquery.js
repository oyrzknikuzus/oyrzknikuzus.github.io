
$(function(){
  $(window).scroll(function (){
    $(".fade_off").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 900){
        $(this).addClass("scrollin");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});
