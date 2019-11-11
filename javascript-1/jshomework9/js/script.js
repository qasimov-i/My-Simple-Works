let a=  document.querySelector(".tabs-content-first");
let b=  document.querySelector(".tabs-content-second");
let c=  document.querySelector(".tabs-content-third");
let d=  document.querySelector(".tabs-content-fourth");
let e=  document.querySelector(".tabs-content-fifth");

let ul=document.querySelector(".tabs-content");
function firstTab(){
    b.remove();
    c.remove();
    d.remove();
    e.remove();
    if(a){
        ul.append(a);
    }

}
function secondTab(){
    a.remove();
    c.remove();
    d.remove();
    e.remove();
    if(b){
        ul.append(b);
    }
}
function thirdTab(){
    b.remove();
    a.remove();
    d.remove();
    e.remove();
    if(c){
        ul.append(c);
    }
}
function fourthTab(){
    b.remove();
    c.remove();
    a.remove();
    e.remove();
    if(d){
        ul.append(d);
    }
}
function fifthTab(){
    b.remove();
    c.remove();
    d.remove();
    a.remove();
    if(e){
        ul.append(e);
    }
}
let active=document.querySelector(".active");
active.addEventListener("click",firstTab, true);


let second=document.querySelector(".second");
second.addEventListener("click",secondTab, true);


let third=document.querySelector(".third");
third.addEventListener("click",thirdTab, true);
let fourth=document.querySelector(".fourth");
fourth.addEventListener("click",fourthTab, true);

let fifth=document.querySelector(".fifth");
fifth.addEventListener("click",fifthTab, true);
