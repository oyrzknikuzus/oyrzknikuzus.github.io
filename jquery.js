if (window.matchMedia( "(max-width: 768px)" ).matches) {



  $(function(){
    $(window).scroll(function (){
      $(".fade_off1").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + 100){
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
        if (scroll > imgPos - windowHeight + 800){
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
        if (scroll > imgPos - windowHeight + 850){
          $(this).addClass("scrollin");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
  });
}else{













  $(function(){
    $(window).scroll(function (){
      $(".fade_off1").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + 100){
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
        if (scroll > imgPos - windowHeight + 1100){
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
        if (scroll > imgPos - windowHeight + 1150){
          $(this).addClass("scrollin");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
  });

}
