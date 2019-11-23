//
// $('.our-amazing-work-images-item').hide();
// $('.item-all').show();
//
//
//  function $hideTopBorder () {
//     $('.our-amazing-work-tabs-item').css({
//         borderTop: "1px solid #ebebeb"
//     });
//     $('.gallery-tab-text').css({
//         color:"#717171"
//     })
// };
//
//
//
//
//
//
//
//
//  $('.tab-all').click(function(){
//      $hideTopBorder();
//      $('.tab-all').css({
//          borderTop:"2px solid  #18cfab",
//      })
//      $('.gallery-tab-text-all').css({
//          color:" #18cfab"
//      })
//      $('.our-amazing-work-images-item').hide();
//      $('.item-all').show();
//
//
//      $('.our-amazing-work-images-item').mouseover(function (){
//          $('.more-info-img').hide();
//          if($('.our-amazing-work-images-item').hide()){
//              $('.item-all').show()
//          }
//
//
//          let $moreInfo = $("<div class ='more-info-img'></div>");
//          $(this).after($moreInfo);
//          $(this).hide();
//
//          let $circles = $("<div class ='circles'></div>");
//          $moreInfo.append($circles)
//
//          $circles.css({
//              display:"flex"
//          })
//          let $circle1 = $("<a href='#'><div class ='circle-one'></div></a>");
//          let $circle2 = $("<a href='#'><div class ='circle-two'></div></a>");
//          $circles.append($circle1,$circle2);
//
//          let $circle1Img = $("<img src='img/Forma 1@1X (5).png' alt=''>");
//          $circle1.append($circle1Img);
//
//          let $circle2Img =$("<i class=\"fas fa-search\"></i>");
//          $circle2.append($circle2Img);
//
//          let $imgText1 =$("<h3 class='green-text'>Creative Design</h3>");
//          $moreInfo.append($imgText1);
//
//
//          let $imgText2 =$("<h4 >Web Design</h4>");
//          $moreInfo.append($imgText2);
//
//          $imgText2.css({
//              margin:"0",
//              color:"#bdbfc0"
//          })
//          $circle1Img.css({
//              width:"25px",
//              height:"25px",
//
//          })
//
//          $circle1.css({
//              border:"1px solid #18cfab ",
//              width:"50px",
//              height:"50px",
//              borderRadius:"50%",
//              display:"flex",
//              alignItems: "center",
//              justifyContent: "center",
//              marginRight:"10px"
//          })
//          $circle2.css({
//              backgroundColor: "#18cfab",
//              width:"50px",
//              height:"50px",
//              borderRadius:"50%",
//              display:"flex",
//              alignItems: "center",
//              justifyContent: "center"
//
//          })
//          $moreInfo.css({
//              borderTop:"4px solid #18cfab ",
//              backgroundColor:"#f8fcfe",
//              width: "290px",
//              height: "200px",
//              display:"flex",
//              flexDirection:"column",
//              textAlign:"center",
//              justifyContent:"center",
//              alignItems:"center"
//          })
//          $moreInfo.css({})
//      });
//      $('.button-load-more').hide();
//      $('.button-load-more').show();
//
//  })
//
//
// $('.tab-graphic').click(function (event){
//     if($('.more-info-img').mouseout()){
//         $('.more-info-img').hide();
//     }
//     $('.item-graphic').show();
//
//     $hideTopBorder();
//     $('.tab-graphic').css({
//         borderTop:"2px solid  #18cfab",
//     })
//         $('.gallery-tab-text-graphic').css({
//             color:" #18cfab"
//         })
//     $('.our-amazing-work-images-item').hide();
//     $('.item-graphic').show();
//
//
//     $('.our-amazing-work-images-item').mouseover(function (){
//         $('.more-info-img').hide();
//         if($('.our-amazing-work-images-item').hide()){
//             $('.item-graphic').show()
//         }
//
//
//         let $moreInfo = $("<div class ='more-info-img'></div>");
//         $(this).after($moreInfo);
//         $(this).hide();
//
//         let $circles = $("<div class ='circles'></div>");
//         $moreInfo.append($circles)
//
//         $circles.css({
//             display:"flex"
//         })
//         let $circle1 = $("<a href='#'><div class ='circle-one'></div></a>");
//         let $circle2 = $("<a href='#'><div class ='circle-two'></div></a>");
//         $circles.append($circle1,$circle2);
//
//         let $circle1Img = $("<img src='img/Forma 1@1X (5).png' alt=''>");
//         $circle1.append($circle1Img);
//
//         let $circle2Img =$("<i class=\"fas fa-search\"></i>");
//         $circle2.append($circle2Img);
//
//         let $imgText1 =$("<h3 class='green-text'>Creative Design</h3>");
//         $moreInfo.append($imgText1);
//
//
//         let $imgText2 =$("<h4 >Graphic Design</h4>");
//         $moreInfo.append($imgText2);
//
//         $imgText2.css({
//             margin:"0",
//             color:"#bdbfc0"
//         })
//         $circle1Img.css({
//             width:"25px",
//             height:"25px",
//
//         })
//
//         $circle1.css({
//             border:"1px solid #18cfab ",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginRight:"10px"
//         })
//         $circle2.css({
//             backgroundColor: "#18cfab",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center"
//
//         })
//         $moreInfo.css({
//             borderTop:"4px solid #18cfab ",
//             backgroundColor:"#f8fcfe",
//             width: "290px",
//             height: "200px",
//             display:"flex",
//             flexDirection:"column",
//             textAlign:"center",
//             justifyContent:"center",
//             alignItems:"center"
//         })
//         $moreInfo.css({})
//     });
//     $('.button-load-more').hide();
// });
//
// $('.tab-veb').click(function (event){
//     if($('.more-info-img').mouseout()){
//         $('.more-info-img').hide();
//     }
//     $('.item-veb').show();
//
//     $hideTopBorder();
//     $('.tab-veb').css({
//         borderTop:"2px solid  #18cfab",
//     })
//     $('.gallery-tab-text-veb').css({
//         color:" #18cfab"
//     })
//     $('.our-amazing-work-images-item').hide();
//     $('.item-veb').show();
//
//     $('.our-amazing-work-images-item').mouseover(function (){
//         $('.more-info-img').hide();
//         if($('.our-amazing-work-images-item').hide()){
//             $('.item-veb').show()
//         }
//
//
//         let $moreInfo = $("<div class ='more-info-img'></div>");
//         $(this).after($moreInfo);
//         $(this).hide();
//
//         let $circles = $("<div class ='circles'></div>");
//         $moreInfo.append($circles)
//
//         $circles.css({
//             display:"flex"
//         })
//         let $circle1 = $("<a href='#'><div class ='circle-one'></div></a>");
//         let $circle2 = $("<a href='#'><div class ='circle-two'></div></a>");
//         $circles.append($circle1,$circle2);
//
//         let $circle1Img = $("<img src='img/Forma 1@1X (5).png' alt=''>");
//         $circle1.append($circle1Img);
//
//         let $circle2Img =$("<i class=\"fas fa-search\"></i>");
//         $circle2.append($circle2Img);
//
//         let $imgText1 =$("<h3 class='green-text'>Creative Design</h3>");
//         $moreInfo.append($imgText1);
//
//
//         let $imgText2 =$("<h4 >Web Design</h4>");
//         $moreInfo.append($imgText2);
//
//         $imgText2.css({
//             margin:"0",
//             color:"#bdbfc0"
//         })
//         $circle1Img.css({
//             width:"25px",
//             height:"25px",
//
//         })
//
//         $circle1.css({
//             border:"1px solid #18cfab ",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginRight:"10px"
//         })
//         $circle2.css({
//             backgroundColor: "#18cfab",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center"
//
//         })
//         $moreInfo.css({
//             borderTop:"4px solid #18cfab ",
//             backgroundColor:"#f8fcfe",
//             width: "290px",
//             height: "200px",
//             display:"flex",
//             flexDirection:"column",
//             textAlign:"center",
//             justifyContent:"center",
//             alignItems:"center"
//         })
//         $moreInfo.css({})
//     });
//     $('.button-load-more').hide();
// });
//
// $('.tab-landing').click(function (event){
//     if($('.more-info-img').mouseout()){
//         $('.more-info-img').hide();
//     }
//         $('.item-landing').show();
//     $hideTopBorder();
//     $('.tab-landing').css({
//         borderTop:"2px solid  #18cfab",
//     })
//     $('.gallery-tab-text-landing').css({
//         color:" #18cfab"
//     })
//
//
//     $('.our-amazing-work-images-item').hide();
//     $('.item-landing').show();
//     $('.our-amazing-work-images-item').mouseover(function (){
//         $('.more-info-img').hide();
//         if($('.our-amazing-work-images-item').hide()){
//             $('.item-landing').show()
//         }
//
//
//         let $moreInfo = $("<div class ='more-info-img'></div>");
//         $(this).after($moreInfo);
//         $(this).hide();
//
//         let $circles = $("<div class ='circles'></div>");
//         $moreInfo.append($circles)
//
//         $circles.css({
//             display:"flex"
//         })
//         let $circle1 = $("<a href='#'><div class ='circle-one'></div></a>");
//         let $circle2 = $("<a href='#'><div class ='circle-two'></div></a>");
//         $circles.append($circle1,$circle2);
//
//         let $circle1Img = $("<img src='img/Forma 1@1X (5).png' alt=''>");
//         $circle1.append($circle1Img);
//
//         let $circle2Img =$("<i class=\"fas fa-search\"></i>");
//         $circle2.append($circle2Img);
//
//         let $imgText1 =$("<h3 class='green-text'>Creative Design</h3>");
//         $moreInfo.append($imgText1);
//
//
//         let $imgText2 =$("<h4 >Landing Pages</h4>");
//         $moreInfo.append($imgText2);
//
//         $imgText2.css({
//             margin:"0",
//             color:"#bdbfc0"
//         })
//         $circle1Img.css({
//             width:"25px",
//             height:"25px",
//
//         })
//
//         $circle1.css({
//             border:"1px solid #18cfab ",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginRight:"10px"
//         })
//         $circle2.css({
//             backgroundColor: "#18cfab",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center"
//
//         })
//         $moreInfo.css({
//             borderTop:"4px solid #18cfab ",
//             backgroundColor:"#f8fcfe",
//             width: "290px",
//             height: "200px",
//             display:"flex",
//             flexDirection:"column",
//             textAlign:"center",
//             justifyContent:"center",
//             alignItems:"center"
//         })
//         $moreInfo.css({})
//     });
//     $('.button-load-more').hide();
// });
//
//
//
//
//
// $('.tab-word-press').click(function (event){
//     $hideTopBorder();
//     $('.tab-press').css({
//         borderTop:"2px solid  #18cfab",
//     })
//     $('.gallery-tab-text-press').css({
//         color:" #18cfab"
//     })
//
//
//     /*******image hover*********/
//     $('.our-amazing-work-images-item').hide();
//     $('.item-press').show();
//     $('.our-amazing-work-images-item').mouseover(function (){
//         $('.more-info-img').hide();
//         if($('.our-amazing-work-images-item').hide()){
//             $('.item-press').show()
//         }
//
//
//         let $moreInfo = $("<div class ='more-info-img'></div>");
//         $(this).after($moreInfo);
//         $(this).hide();
//
//         let $circles = $("<div class ='circles'></div>");
//         $moreInfo.append($circles)
//
//         $circles.css({
//             display:"flex"
//         })
//         let $circle1 = $("<a href='#'><div class ='circle-one'></div></a>");
//         let $circle2 = $("<a href='#'><div class ='circle-two'></div></a>");
//         $circles.append($circle1,$circle2);
//
//         let $circle1Img = $("<img src='img/Forma 1@1X (5).png' alt=''>");
//         $circle1.append($circle1Img);
//
//             let $circle2Img =$("<i class=\"fas fa-search\"></i>");
//         $circle2.append($circle2Img);
//
//         let $imgText1 =$("<h3 class='green-text'>creative design</h3>");
//         $moreInfo.append($imgText1);
//
//
//         let $imgText2 =$("<h4 >Wordpress</h4>");
//         $moreInfo.append($imgText2);
//
//         $imgText2.css({
//             margin:"0",
//             color:"#bdbfc0"
//         })
//          $circle1Img.css({
//             width:"25px",
//             height:"25px",
//
//         })
//
//         $circle1.css({
//             border:"1px solid #18cfab ",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginRight:"10px"
//         })
//         $circle2.css({
//             backgroundColor: "#18cfab",
//             width:"50px",
//             height:"50px",
//             borderRadius:"50%",
//             display:"flex",
//             alignItems: "center",
//             justifyContent: "center"
//
//         })
//         $moreInfo.css({
//             borderTop:"4px solid #18cfab ",
//             backgroundColor:"#f8fcfe",
//             width: "290px",
//             height: "200px",
//             display:"flex",
//             flexDirection:"column",
//             textAlign:"center",
//             justifyContent:"center",
//             alignItems:"center"
//         })
//         $moreInfo.css({})
//     });
//     $('.button-load-more').hide();
//     $(this).mouseleave(function () {
//
//     //     $('.more-info-img').hide();
//     //     $(this).show();
//      });
//
//
// });



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

const willBeenClicked = document.querySelector(".item-all");
const clickHandler = function(event){
};
willBeenClicked.focus=clickHandler();

const item = document.getElementsByClassName('item-all')
 const onclick = function (event) {
alert("dgfhj");
};
item.addEventListener('click',onclick);


