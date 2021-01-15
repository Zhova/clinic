"use strict";

$(document).ready(function () {
  $(".main-slider").slick({
    nextArrow: '<div class="main-slider__arrow main-slider__arrow-right"></div>',
    prevArrow: '<div class="main-slider__arrow main-slider__arrow-left"></div>',
    dots: true
  });
  $(".popularDest-slider, .specialists-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class="btn_default btn_big default-slider__arrow default-slider__arrow-right">Дальше</div>',
    prevArrow: '<div class="btn_default btn_big default-slider__arrow default-slider__arrow-left">Назад</div>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 850,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 590,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".reviews-slider, .news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="btn_default btn_big default-slider__arrow default-slider__arrow-right">Дальше</div>',
    prevArrow: '<div class="btn_default btn_big default-slider__arrow default-slider__arrow-left">Назад</div>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 790,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".slick-dots li button").text("");
  $(".slick-dots li button").wrap("<div class='dots-button-wrap'></div>");
});