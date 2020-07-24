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
$('.certificate__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.certificate__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: "<img src='./images/arrow-previous.svg' class='prev' alt='1'>",
    nextArrow: "<img src='./images/arrow-next.svg' class='next' alt='2'>",
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}