"use strict";

var _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $(document).ready(function () {
//     $('.certificate__slider').slick({
//     });
// });
$('.certificate__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.certificate__slider-nav'
});
$('.certificate__slider-nav').slick((_$$slick = {
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.certificate__slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
}, _defineProperty(_$$slick, "centerMode", true), _defineProperty(_$$slick, "centerPadding", '60px'), _defineProperty(_$$slick, "prevArrow", "<img src='./images/arrow-previous.svg' class='prev' alt='1'>"), _defineProperty(_$$slick, "nextArrow", "<img src='./images/arrow-next.svg' class='next' alt='2'>"), _$$slick));

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//# sourceMappingURL=index.js.map
