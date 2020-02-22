$(function(){
 $('.featured__slider').slick({

 });

 $('.menu__btn').on('click', function () {
   $('.menu__list').slideToggle();
 })

 var mixer = document.querySelector(".newest__items");
 if (mixer) {
  mixer = mixitup('.newest__items');
 }
});