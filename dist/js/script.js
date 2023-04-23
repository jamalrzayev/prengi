// Slick slider

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

    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
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