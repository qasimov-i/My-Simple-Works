let $itemContainer = $("<div class='tabs-container'></div>");
$("script:first").before($itemContainer);

$itemContainer.css({
    width:"1200px",
    height:"200px",
    display:"flex",
    textAlign:"center",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    margin:"0 auto"
});

let  $tabFirst =  $("<button class='tab-first tab-item'>Akali</button>");
$itemContainer.append($tabFirst);

let  $tabSecond =  $("<button class='tab-second tab-item'>Anivia</button>");
$itemContainer.append($tabSecond);
let  $tabThird =  $("<button class='tab-third tab-item'>Draven</button>");
$itemContainer.append($tabThird);

let  $tabFourth =  $("<button class='tab-fourth tab-item'>Garen</button>");
$itemContainer.append($tabFourth);
let  $tabFiveth =  $("<button class='tab-fiveth tab-item'>Katarina</button>");
$itemContainer.append($tabFiveth);
let $tabColor=function() {
    $(".tab-item").css({
        background: "#23201D",
        border: "none",
        width: "100px",
        height: "40px",
        color: "#937341"

    });
}
$tabColor();
$(".tab-item:first").css({
    background: "#937341",
    color:"#23201D"

});
let $texts = $("<div></div>");
$itemContainer.after($texts)
let $textFirst = $("<p class=text-first>Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no maste</p>")
$texts.append($textFirst);
let $textSecond = $("<p class=text-second>Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.</p>")
$texts.append($textSecond);
let $textThird = $("<p class=text-third>In Noxus, warriors known as reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, not to mention the spray of blood from each of his spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat whomever he must to ensure that his name is chanted throughout the empire forever more.</p>")
$texts.append($textThird);
let $textFourth = $("<p class=text-fourth>A proud and noble soldier, Garen fights at the head of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.</p>");
$texts.append($textFourth);
let $textFiveth = $("<p class=text-fiveth>Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.</p>");
$texts.append($textFiveth);
$("p").css({
    width:"1200px",
    margin:"0 auto"
});
let $displayNone= function(){
    $("p").hide();
};
$tabFirst.click(function(event){
    $displayNone();
    $tabColor();
    $textFirst.show();
    $tabFirst.css({
        background: "#937341",
        color:"#23201D"
    })
});
$tabSecond.click(function(event){
    $displayNone();
    $tabColor();

    $textSecond.show();
    $tabSecond.css({
        background: "#937341",
        color:"#23201D"
    })
});
$tabThird.click(function(event){
    $displayNone();
    $tabColor();

    $textThird.show();
    $tabThird.css({
        background: "#937341",
        color:"#23201D"
    })
});
$tabFourth.click(function(event){
    $displayNone();
    $tabColor();

    $textFourth.show();
    $tabFourth.css({
        background: "#937341",
        color:"#23201D"
    })
});
$tabFiveth.click(function(event){
    $displayNone();
    $tabColor();

    $textFiveth.show();
    $tabFiveth.css({
        background: "#937341",
        color:"#23201D"
    })
});