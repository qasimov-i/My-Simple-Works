
let activeTriangle = document.querySelector(".triangle-active");
let optionTabsItem = document.getElementsByClassName(".option-tabs-item");
optionTabsItem.click(function(target){
    console.log("salam");
});


$('.slick-bigger').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick-smaller'
});
$('.slick-smaller').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-bigger',
});

const slickSmallerItems= document.querySelectorAll("slick-smaller-item");

slickSmallerItems.forEach(element=>{
   element.addEventListener("click",function(event){
      slickSmallerItems.style.cssText="transform: translateY(20px)";

   })

});