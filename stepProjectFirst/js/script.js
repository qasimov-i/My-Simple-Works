        /****Tabs for information****/
$('.tab-active').css({
    backgroundColor:"#18cfab"
});






let tabBackGraund = function () {
    $('.option-tabs-item').css({
        backgroundColor:" #f8fcfe",
    borderTop:" 1px   solid #ebecec",
    borderBottom:" 1px   solid #ebecec",
    borderRight:" 1px solid #ebecec",

    })
    $('.tab-text').css({
        color:"#959697"
    })
};

let informationShow = function () {
   $('.options-tabs-information-item').hide();
};
let triangleShow = function (){
    $('.triangle').hide();
};

$('.tab-first').click(function(){
    triangleShow();
    tabBackGraund();
    informationShow();
    $('.tab-first').css({
        borderLeft: "px solid #18cfab",
    backgroundColor:" #18cfab",
    borderTop:" 1px   solid #18cfab",
    borderBottom:" 1px   solid #18cfab",
    borderRight: "px solid #18cfab"
    })
    $('.tab-text-first').css({
        color:"white"
    })

    $('.information-first').css({
        display:"flex"
    })
    $('.triangle-first').show();
});

$('.tab-second').click(function(){
    triangleShow();
    tabBackGraund();
    informationShow();
    $('.tab-second').css({
        borderLeft: "px solid #18cfab",
        backgroundColor:" #18cfab",
        borderTop:" 1px   solid #18cfab",
        borderBottom:" 1px   solid #18cfab",
        borderRight: "px solid #18cfab"
    })

    $('.information-second').css({
        display:"flex"
    })
    $('.tab-text-second').css({
        color:"white"
    })
    $('.triangle-second').show();

});


$('.tab-third').click(function(){
    triangleShow();
    tabBackGraund();
    informationShow();
    $('.tab-third').css({
        borderLeft: "px solid #18cfab",
        backgroundColor:" #18cfab",
        borderTop:" 1px   solid #18cfab",
        borderBottom:" 1px   solid #18cfab",
        borderRight: "px solid #18cfab"
    })
    $('.information-third').css({
        display:"flex"
    })
    $('.tab-text-third').css({
        color:"white"
    })
    $('.triangle-third').show();

});

        $('.tab-fourth').click(function(){
            triangleShow();
            tabBackGraund();
            informationShow();
            $('.tab-fourth').css({
                borderLeft: "px solid #18cfab",
                backgroundColor:" #18cfab",
                borderTop:" 1px   solid #18cfab",
                borderBottom:" 1px   solid #18cfab",
                borderRight: "px solid #18cfab"
            })
            $('.information-fourth').css({
                display:"flex"
            })
            $('.tab-text-fourth').css({
                color:"white"
            })
            $('.triangle-fourth').show();

        });

 $('.tab-fiveth').click(function(){
            triangleShow();
            tabBackGraund();
            informationShow();
            $('.tab-fiveth').css({
                borderLeft: "px solid #18cfab",
                backgroundColor:" #18cfab",
                borderTop:" 1px   solid #18cfab",
                borderBottom:" 1px   solid #18cfab",
                borderRight: "px solid #18cfab"
            })
            $('.information-fiveth').css({
                display:"flex"
            })
            $('.tab-text-fiveth').css({
                color:"white"
            })
            $('.triangle-fiveth').show();

        });


        $('.tab-sixth').click(function(){
            triangleShow();
            tabBackGraund();
            informationShow();
            $('.tab-sixth').css({
                borderLeft: "px solid #18cfab",
                backgroundColor:" #18cfab",
                borderTop:" 1px   solid #18cfab",
                borderBottom:" 1px   solid #18cfab",
                borderRight: "px solid #18cfab"
            })
            $('.information-sixth').css({
                display:"flex"
            })
            $('.tab-text-sixth').css({
                color:"white"
            })
            $('.triangle-sixth').show();
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


/***** picture date******/
