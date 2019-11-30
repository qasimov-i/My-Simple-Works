/****dropdown menu****/
function createMenuList(){
   let $menu = $("<div class='header__slogan__dropDownMenu'></div>");
    $menu.css({
        position:"absolute",
        top:"0",
        right:"0",
        width:"18.1rem",
        height:"16rem",
        border:"0.1rem solid #e1e1e1"
    });
    $('.header__slogan').append($menu);


   let $menuList1=$("<div class='header__slogan__dropDownMenu__list '>" +
       "<p  class='header__slogan__dropDownMenu__list--link header__slogan__dropDownMenu__list--link1'><a href='#' class='header__slogan__dropDownMenu__list--link--a'>Pizza delivery</a></p></div>");
   let $menuList2=$("<div class='header__slogan__dropDownMenu__list'>" +
       "<p class='header__slogan__dropDownMenu__list--link header__slogan__dropDownMenu__list--link2'><a href='#' class='header__slogan__dropDownMenu__list--link--a'>UA/UX Salads</a></p></div>");
   let $menuList3=$("<div class='header__slogan__dropDownMenu__list '>" +
       "<p class='header__slogan__dropDownMenu__list--link header__slogan__dropDownMenu__list--link3'><a href='#' class='header__slogan__dropDownMenu__list--link--a'>Desserts</a></p></div>");
   let $menuList4=$("<div class='header__slogan__dropDownMenu__list '>" +
       "<p class='header__slogan__dropDownMenu__list--link header__slogan__dropDownMenu__list--link4'><a href='#' class='header__slogan__dropDownMenu__list--link--a'>About Us</a></p></div>");
   let $menuList5=$("<div class='header__slogan__dropDownMenu__list '>" +
       "<p class='header__slogan__dropDownMenu__list--link header__slogan__dropDownMenu__list--link5'><a href='#' class='header__slogan__dropDownMenu__list--link--a'>Contacts</a></p></div>");
    $menu.append($menuList1,$menuList2,$menuList3,$menuList4,$menuList5);
}
createMenuList();
$('.header__slogan__dropDownMenu').hide();




const $burger = $(".header__nav-bar__menu");
const ANIMATION_DURATION = 1000;

let count=0;

$burger.click(function (event) {
    const $lines = $burger.children();
    $lines.eq(1).toggle(ANIMATION_DURATION);
    const $first = $lines.eq(0);
    const $third = $lines.eq(2);
if(count===0) {
    $first.animate({borderSpacing: -90}, {
        step: function (now, fx) {
            $(this).css('transform', 'translate(0px, 2px) rotate(45deg)');
        },
    }, 'linear');
    $third.animate({borderSpacing: -90}, {
        step: function (now, fx) {
            $(this).css('transform', 'translate(0px, -2px) rotate(-45deg)');
        },
    }, 'linear');

    $(event.target).find(".header__nav-bar__menu--line")[1];
    $('.header__slogan__dropDownMenu').fadeIn();
    count=1;
}else {
    $first.animate({borderSpacing: 0}, {
        step: function (now, fx) {
            $(this).css('transform', 'translate(0px, 0px) rotate(0deg)');
        },
    }, 'linear');
    $third.animate({borderSpacing: 0}, {
        step: function (now, fx) {
            $(this).css('transform', 'translate(0px, 0px) rotate(0deg)');
        },
    }, 'linear');

    $(event.target).find(".header__nav-bar__menu--line")[1];
    count=0;
$('.header__slogan__dropDownMenu').hide();
}
});


