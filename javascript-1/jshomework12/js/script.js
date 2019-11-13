
let item = document.querySelectorAll(".item");

let index = 0;
slide();

function slide (){
    for(let i=0;i<item.length;i++){
        item[i].style.display="none";
    }
    index++;
    if (index > item.length) {index = 1}
    item[index-1].style.display = "block";
}
    let time = setInterval(slide,10000);

let stop = document.querySelector(".stop");
let continuing = document.querySelector(".continue");
function pause(){
    clearInterval(time);
}

function play(){
    time = setInterval(slide, 10000);
}

continuing.addEventListener('click',play);
stop.addEventListener('click',pause);