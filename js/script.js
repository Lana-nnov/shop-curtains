
'use strict';

(function () {
  if (window.$) {
    var $ = window.$;

    var headerSlider = $('.header__slider');
    headerSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      responsive: [{
        breakpoint: 1118,
        settings: {
            arrows: false,
            dots: true
        }
      }]
    });   

    var productsPopularSlider = $('.main-products__list');
    productsPopularSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: false,
      responsive: [{
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          dots: false,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },  
    {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });   
    
    var formSlider = $('.form');
    formSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: false
    });    
  }
})();

