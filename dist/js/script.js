// Slick slider
//Smartpone slider 

$(document).ready(function(){
    $('.main__carousel_inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      autoplay: true,
      dots: true,
      appendDots:$('.dots'),
      prevArrow: $('.main__carousel_prev'),
      nextArrow: $('.main__carousel_next')
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

    // Macbook slider

    $('.products__slider_content').slick({
      speed: 1200,
      adaptiveHeight: true,
      autoplay: true,
      dots: false,
      prevArrow: $('.products__slider-prev'),
      nextArrow: $('.products__slider-next')
    });

    // Moves to the slide that corresponds the index of nav

    $('.products__slider-nav a').on('click', function(e){
      e.preventDefault();
      var slideIndex = $(this).data('slide');
      $('.products__slider_content').slick('slickGoTo', slideIndex);
    });

    // Sets class active and color and removes from others

    $('.products__slider_content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.products__slider-nav a').removeClass('active');
      $('.products__slider-nav a[data-slide=' + nextSlide + ']').addClass('active').css('color', 'var(--main-color)');
      $('.products__slider-nav a[data-slide=' + currentSlide + ']').css('color', 'var(--root-white)');
    });
    
    // Setting active class, removing from others updated

    // $('.products__slider-nav a').on('click', function(e){
    //     e.preventDefault();
    //     var slideIndex = $(this).data('slide');
    //     $('.products__slider_content').slick('slickGoTo', slideIndex);
    //     $('.products__slider-nav a').removeClass('active');
    //     $('.products__slider-nav a[data-slide=' + slideIndex + ']').addClass('active');
    // });
      
    // $('.products__slider_content').on('afterChange', function(event, slick, currentSlide){
    //     $('.products__slider-nav a').removeClass('active');
    //     $('.products__slider-nav a[data-slide=' + currentSlide + ']').addClass('active');
    // });

    // Third try

    // $('.products__slider-nav a').on('click touchend', function(e){
    //     e.preventDefault();
    //     var slideIndex = $(this).data('slide');
    //     $('.products__slider-nav a').removeClass('active');
    //     $(this).addClass('active');
    //     $('.products__slider_content').slick('slickGoTo', slideIndex);
    // });

    // $('.products__slider_content').on('afterChange', function(event, slick, currentSlide){
    //     $('.products__slider-nav a').removeClass('active');
    //     $('.products__slider-nav a[data-slide=' + currentSlide + ']').addClass('active');
    // });
      
      

    // Header live ticker slider

    $('#live-ticker').slick({
        draggable: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3500,
        cssEase: 'linear',
        infinite: true,
        variableWidth: true,
        dots: false,
        arrows: false
    });

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    // Validate

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Должно быть больше {2} символов!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введён адрес почты"
                }
            }
        });
    }

    validateForms('.overlay .feed-form');

    // Masked

    $('input[name=phone]').mask("+994 (00) 000-00-00");

    // Form submission

    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     if (!$(this).valid()) {
    //         return;
    //     }
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#consultation').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
            if ($(this).scrollTop() > 4500) {
                $('.pageup img').attr('src', 'icons/pageup/pageup-white.svg');
              } else {
                $('.pageup img').attr('src', 'icons/pageup/pageup.svg');
              }
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^=#]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
  });

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.hamburger-menu'),
      overlay = document.querySelector('.hamburger-menu__overlay'),
      closeElem = document.querySelector('.hamburger-menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});