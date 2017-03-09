$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.logo').css({
      'transform':'translate(0px, '+ wScroll / 2.2 +'%)'
    });
    $('.fore-bird').css({
      'transform':'translate(0px, -'+ wScroll / 30 +'%)'
    });

    if(wScroll > $('.clothes-pictures').offset().top - $(window).height() / 1.2){
        $('.clothes-pictures figure').each(function(i){
          setTimeout(function(){
            $('.clothes-pictures figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));
        });
    }

    if(wScroll > $('.our-offices').offset().top - 800){
      console.log('really?');
      $('.landing-cta-1').css({'transform':'translate(0px, 0px)'});
      $('.landing-cta-2').css({'transform':'translate(0px, 0px)'});
    }
    if(wScroll > 603) {
      $('.navigation-bar').addClass('navigation-bar-fixed')
    }
    else {
      $('.navigation-bar').removeClass('navigation-bar-fixed');
    }
  });
  $('#searchButton').on('click', function(){
    $('.search-hidden-cta').toggleClass("search-hidden-cta-slide");
  });
  $(window).load(function(){
    $('.about-us-portrait').each(function(n){
      setTimeout(function(){
        $('.about-us-portrait').eq(n).addClass('is-showing-1');
      }, 300 * (n+1));
    })
  });
});
