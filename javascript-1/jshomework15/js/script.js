const $buttonUp= $("<button class='button-up'></button>");
const screenHeights= $(window).height();

$buttonUp.css({
    width: "50px",
height: "50px",
position: "fixed",
bottom: "5px",
right: "5px",
backgroundColor: "goldenrod"

});

$buttonUp.click(function (event) {
    $('html').animate({
        scrollTop: 0
    }, 1000)
});

$buttonUp.hide();
$(window).scroll(function (event) {
    console.log($(window));
    if($(window).scrollTop() >= screenHeights){
        $buttonUp.show();
        $("script:first").before($buttonUp);
    } else {
        $buttonUp.hide();
    }
});


$('.dodger-blue').click(function(){
    $('html').animate({
        scrollTop: 100
    }, 1000)
});
$('.red').click(function(){
    $('html').animate({
        scrollTop: 620
    }, 1000)
});
$('.green').click(function(){
    $('html').animate({
        scrollTop: 1120
    }, 1000)
});
$('.blue').click(function(){
    $('html').animate({
        scrollTop: 1620
    }, 1000)
});
$('.yellow').click(function(){
    $('html').animate({
        scrollTop: 2120
    }, 1000)
});

$buttonSectionAppear = $("<button class='section-show'></button>");
$('.section-green').after($buttonSectionAppear);


$buttonSectionAppear.text("Hide");
$buttonSectionAppear.css({
    width:"100px",
   alignItems:"center",
    height:"20px",
    backgroundColor: "grey",
    color:"white"
});
let count =1;
$buttonSectionAppear.click(function(){
    if(count===1) {
        $('.section-green').css({
            display: "none"
        })
        $buttonSectionAppear.text("Show");
    count=0;
    }
    else{
        $buttonSectionAppear.text("Hide");

        $('.section-green').css({
            display: "block"
        });
        count=1;
    }
});
