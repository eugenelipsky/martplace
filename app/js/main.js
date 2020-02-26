$(function(){
 $('.featured__slider').slick({

 });

 $('.menu__btn').on('click', function () {
   $('.menu__list').slideToggle();
 })

 var sliderrange = $(".js-range-slider");
 var $output = $(".js-output__range");
 sliderrange.ionRangeSlider({
  type: "double",
  min: 0,
  max: 310,
  from: 30,
  to: 300,
  prefix: "$"
 });

 sliderrange.on('change', function () {
  var $inp = $(this);
  var from = $inp.data("from");
  var to = $inp.data("to");

  $output.html("<div class='range__from'>" + from + "</div>" + "<div class='range__to'>" + to + "</div>");
 });

 $(function () {

  $(".rating").rateYo({
   starWidth: "15px",
   normalFill: "#fff",
   ratedFill: "#ffc000",
   'rating': 4.5,
   spacing: "3px"
  });

 });

 $('.list__filter').on('click', function () {
  $('.products__item').addClass('list');
  $('.list__filter').addClass('active')
  $('.grid__filter').removeClass('active')
 });

 $('.grid__filter').on('click', function () {
  $('.products__item').removeClass('list')
  $('.grid__filter').addClass('active')
  $('.list__filter').removeClass('active')
 })

 var mixer = document.querySelector(".newest__items");
 if (mixer) {
  mixer = mixitup('.newest__items');
 }
});