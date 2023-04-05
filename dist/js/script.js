$(document).ready(function(){
    $('.main__carousel_inner').slick({
      speed: 1200,
      // adaptiveHeight: true,
      autoplay: true,
      dots: true,
      appendDots:$('.dots'),
      prevArrow: $('.main__carousel_prev'),
      nextArrow: $('.main__carousel_next'),
      // prevArrow: '<button type="button" class="main__carousel_prev"><img src="icons/main/rounded_rectangle_left.svg"></button>',
      // nextArrow: '<button type="button" class="main__carousel_next"><img src="icons/main/rounded_rectangle_right.svg"></button>',
      responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false
            }
        }
      ]
    });
  });