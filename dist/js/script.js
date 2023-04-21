$(document).ready(function(){
    $('.main__carousel_inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      autoplay: true,
      dots: true,
      appendDots:$('.dots'),
      prevArrow: $('.main__carousel_prev'),
      nextArrow: $('.main__carousel_next'),
      // responsive: [
      //   {
      //       breakpoint: 768,
      //       settings: {
      //         dots: true,
      //         arrows: false
      //       }
      //   }
      // ]
    });
    $('.products__slider_content').slick({
      speed: 1200,
      adaptiveHeight: true,
      autoplay: true,
      dots: false,
      // fade: true,
      // cssEase: 'linear',
      prevArrow: $('.products__slider-prev'),
      nextArrow: $('.products__slider-next'),
    });

    $('.products__slider-nav a').on('click', function(e){
      e.preventDefault();
      var slideIndex = $(this).data('slide');
      $('.products__slider_content').slick('slickGoTo', slideIndex);
    });
  });