$(document).ready(function(){
        var $slider = $('.slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          appendDots: $('.slider-dots'),
          customPaging: function(slider, i) {
            return '<div class="slider-dot"></div>';
          },
        });
    
        $('.slider-dot').on('click', function() {
          var index = $(this).index();
          $slider.slick('slickGoTo', index);
        });
    
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          $('.slider-dot').eq(nextSlide).addClass('active').siblings().removeClass('active');
        });
      });
      
