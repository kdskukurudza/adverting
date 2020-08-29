$(document).ready(function() { 
  // -------------------------------- NAV WITH BURGER -------------------
  $('.menu__button--burger').click(function(e){
    $('.menu').slideToggle(700);
}) 
  $(".header__button--burger").click(function() {      
      $(".header__button--burger").toggleClass("active");
      $(".menu").toggleClass("active");
  });  
});
// -------------------------------- SLIDER ----------------------------
$(document).ready(function(){
  $('.slider__main').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: $('.slider__button--previous'),
    nextArrow: $('.slider__button--next'),
    // responsive: [      
    //   {
    //     breakpoint: 1880,
    //     settings: { 
    //       arrows: false,
    //     }
    //   }
    // ]
  })
})