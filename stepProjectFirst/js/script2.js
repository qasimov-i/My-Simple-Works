
/*********load more button***************/
let count =0;
$('.button-load-more').click(function(){

    let $img1 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img2 = $('<div class="item-images item-all">\n' +
    '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
    '                <div class ="more-info-img">\n' +
    '                    <div class ="circles">\n' +
    '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
    '                        <i  class="fas fa-search circle-second"></i>\n' +
    '                    </div>\n' +
    '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
    '                    <p class="text-info">Web Design</p>\n' +
    '                </div>\n' +
    '            </div>');
    let $img3 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img4 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img5 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img6 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img7 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img8 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img9 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img10 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img11 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    let $img12 = $('<div class="item-images item-all">\n' +
        '                <img src="img/web-design6.jpg" alt="" class="our-amazing-work-images-item ">\n' +
        '                <div class ="more-info-img">\n' +
        '                    <div class ="circles">\n' +
        '                        <img src="img/Forma%201@1X%20(5).png" class="circle-first">\n' +
        '                        <i  class="fas fa-search circle-second"></i>\n' +
        '                    </div>\n' +
        '                    <h3 class="green-text text-info-first">creative design</h3>\n' +
        '                    <p class="text-info">Web Design</p>\n' +
        '                </div>\n' +
        '            </div>');
    $('.column-first').append($img1,$img2,$img3);
    $('.column-second').append($img4,$img5,$img6);
    $('.column-third').append($img7,$img8,$img9);
    $('.column-fourth').append($img10,$img11,$img12);
    $('.button-load-more').hide();
    count++;
});


/********change images********/
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
     $('.item-all').css({
         display:"flex"
     }).show();
     if(count!==1){
        $('.button-load-more').show();
    }
count=0;

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
    $('.item-graphic').css({
        display:"flex"
    }).show();
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
    $('.item-press').css({
        display:"flex"
    }).show();
    $('.button-load-more').hide();
});
$('.tab-veb').click(function (event){
    $hideTopBorder();
    $('.tab-veb').css({
        borderTop:"2px solid  #18cfab",
    })
    $('.gallery-tab-text-veb').css({
        color:" #18cfab"
    });
    $('.item-images').hide();
    $('.item-veb').css({
        display:"flex"
    }).show();
    $('.button-load-more').hide();
});
$('.tab-landing').click(function (event){
    $hideTopBorder();
    $('.tab-landing').css({
        borderTop:"2px solid  #18cfab",
    })
    $('.gallery-tab-text-landing').css({
        color:" #18cfab"
    });
    $('.item-images').hide();
    $('.item-landing').css({
        display:"flex"
    }).show();
    $('.button-load-more').hide();
});

