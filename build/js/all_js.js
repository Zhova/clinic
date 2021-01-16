"use strict";

$(document).ready(function () {
  $(".main-slider").slick({
    nextArrow: '<div class="main-slider__arrow main-slider__arrow-right"></div>',
    prevArrow: '<div class="main-slider__arrow main-slider__arrow-left"></div>',
    dots: true
  });
  $(".single-service .specialists-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="btn_default btn_big default-slider__arrow default-slider__arrow-right">Дальше</div>',
    prevArrow: '<div class="btn_default btn_big default-slider__arrow default-slider__arrow-left">Назад</div>',
    responsive: [{
      breakpoint: 850,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
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
  $(".single-service-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="main-slider__arrow main-slider__arrow-right"></div>',
    prevArrow: '<div class="main-slider__arrow main-slider__arrow-left"></div>',
    dots: true
  });
  $(".slick-dots li button").text("");
  $(".slick-dots li button").wrap("<div class='dots-button-wrap'></div>"); // btn lines

  $(".btn-lines").wrap('<div class="btn-lines-wrap"></div>');
  $(".btn-lines_red").before('<div class="btn-line btn-line_red btn-line_before"></div>');
  $(".btn-lines_red").after('<div class="btn-line btn-line_red btn-line_after"></div>'); // price table

  $(".price-table__line_head").on("click", function () {
    $(this).parent().toggleClass("active");
  });
});