
$('.our-amazing-work-images-item').hide();
$('.item-all').show();


 function $hideTopBorder () {
    $('.our-amazing-work-tabs-item').css({
        borderTop: "1px solid #ebebeb"
    });
    $('.gallery-tab-text').css({
        color:"#717171"
    })
};



 $('.tab-all').click(function(){
     $hideTopBorder();
     $('.tab-all').css({
         borderTop:"2px solid  #18cfab",
     })
     $('.gallery-tab-text-all').css({
         color:" #18cfab"
     })
     $('.our-amazing-work-images-item').hide();
     $('.item-all').show();

     $('.button-load-more').show();

 })


$('.tab-graphic').click(function (event){
    $hideTopBorder();
    $('.tab-graphic').css({
        borderTop:"2px solid  #18cfab",
    })
        $('.gallery-tab-text-graphic').css({
            color:" #18cfab"
        })
    $('.our-amazing-work-images-item').hide();
    $('.item-graphic').show();
});

$('.tab-veb').click(function (event){
    $hideTopBorder();
    $('.tab-veb').css({
        borderTop:"2px solid  #18cfab",
    })
    $('.gallery-tab-text-veb').css({
        color:" #18cfab"
    })
    $('.our-amazing-work-images-item').hide();
    $('.item-veb').show();
});

$('.tab-landing').click(function (event){
    $hideTopBorder();
    $('.tab-landing').css({
        borderTop:"2px solid  #18cfab",
    })
    $('.gallery-tab-text-landing').css({
        color:" #18cfab"
    })
    $('.our-amazing-work-images-item').hide();
    $('.item-landing').show();
});

$('.tab-word-press').click(function (event){
    $hideTopBorder();
    $('.tab-press').css({
        borderTop:"2px solid  #18cfab",
    })
    $('.gallery-tab-text-press').css({
        color:" #18cfab"
    })
    $('.our-amazing-work-images-item').hide();
    $('.item-press').show();
    $('.our-amazing-work-images-item').mouseover(function (){
        $('.more-info-img').hide();
        if($('.our-amazing-work-images-item').hide()){
            $('.item-press').show()
        }

        let $moreInfo = $("<div class ='more-info-img'></div>");
        $(this).after($moreInfo);
        $(this).hide();

        let $circle1 = $("<div class ='circle-one'></div>");
        let $circle2 = $("<div class ='circle-two'></div>");
        $moreInfo.append($circle1,$circle2);

        $circle1.css({
            backgroundColor: "red",
            width:"50px",
            height:"50px"
        })
        $moreInfo.css({
            borderTop:"4px solid #18cfab ",
            backgroundColor:"#f8fcfe",
            width: "290px",
            height: "200px",
        })
    });
});



/*********load more button***************/

$('.button-load-more').click(function(){
    let $img1 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img2 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img3 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img4 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img5 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img6 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img7 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img8 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img9 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img10 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img11 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    let $img12 = $('<img src="img/Layer%207@1X.png" class=our-amazing-work-images-item>');
    $('.column-first').append($img1,$img2,$img3);
    $('.column-second').append($img4,$img5,$img6);
    $('.column-third').append($img7,$img8,$img9);
    $('.column-fourth').append($img10,$img11,$img12);
    $('.button-load-more').hide();
});







/***** our amazzing work : picture hover *****/

$('.our-amazing-work-images-item').hover(function (){
    $('.more-info-img').hide();
    if($('.our-amazing-work-images-item').hide()){
        $('.item-all').show()
    }

    let $moreInfo = $("<div class ='more-info-img'></div>");
    $(this).after($moreInfo);
    $(this).hide();

    let $circle1 = $("<div class ='circle-one'></div>");
    let $circle2 = $("<div class ='circle-two'></div>");
    $moreInfo.append($circle1,$circle2);

    $circle1.css({
        backgroundColor: "red",
        width:"50px",
        height:"50px"
    })
    $moreInfo.css({
        borderTop:"4px solid #18cfab ",
        backgroundColor:"#f8fcfe",
        width: "290px",
        height: "200px",
    })
});

