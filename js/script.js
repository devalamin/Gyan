$('.banner-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,

        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
  });




  // 3d slider start

  var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');  
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');  
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),  
  prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  speed: 1000,
  arrows: false,
  dots: true,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  /*infinite: false,*/
});

// 3d slider end



// counterup js start
$('.counter').counterUp({
  delay: 10,
  time: 1000
});


// counterup js end


// course slider start

$('.course-slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:'0',
  prevArrow:'<i class="fas fa-chevron-left prev"></i>',
  nextArrow:'<i class="fas fa-chevron-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots:true,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});

// course slider end



// testimonial slider start

var rev = $('.testi_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');  
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');  
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),  
  prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  asNavFor:".text-slider",
  prevArrow:'<i class="fas fa-chevron-left prev"></i>',
  nextArrow:'<i class="fas fa-chevron-right next"></i>',
  
  customPaging: function(slider, i) {
    return '';
  },
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});



$('.text-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor:".testi_slider",

});

// footer-slider start

$('#footer-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  centerMode:true,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});






