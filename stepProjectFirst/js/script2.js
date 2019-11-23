//
$('.item-images').hide();
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
    $('.item-images').hide();
    $('.item-all').show();

});
$('.tab-graphic').click(function(){
    $hideTopBorder();
    $('.tab-graphic').css({
        borderTop:"2px solid  #18cfab",
    })
    $('.gallery-tab-text-graphic').css({
        color:" #18cfab"
    })
    $('.item-images').hide();
    $('.item-graphic').show();
    $('.button-load-more').hide();

});

$('.tab-press').click(function (event){
    $hideTopBorder();
    $('.tab-press').css({
        borderTop:"2px solid  #18cfab",
    })
    $('.gallery-tab-text-press').css({
        color:" #18cfab"
    });
    $('.item-images').hide();
    $('.item-press').show();
    $('.button-load-more').hide();
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

