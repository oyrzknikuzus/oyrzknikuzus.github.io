if (window.matchMedia( "(max-width: 768px)" ).matches) {


#スマホ用

  $(function(){
    $(window).scroll(function (){
      $(".fade_off1").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + 500){
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
        if (scroll > imgPos - windowHeight + 700){
          $(this).addClass("scrollin");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
  });

  $(function(){
    $(window).scroll(function (){
      $(".fade_off3").each(function(){
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
}else{







＃PC用



  $(function(){
    $(window).scroll(function (){
      $(".fade_off1").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + 500){
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
        if (scroll > imgPos - windowHeight + 700){
          $(this).addClass("scrollin");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
  });

  $(function(){
    $(window).scroll(function (){
      $(".fade_off3").each(function(){
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

}
