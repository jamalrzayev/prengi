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
      prevArrow: $('.products__slider-prev'),
      nextArrow: $('.products__slider-next'),
    });
  });