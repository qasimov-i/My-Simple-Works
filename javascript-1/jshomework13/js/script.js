
let red,green,blue,opacity;
const div = document.querySelector(".container");

red=localStorage.getItem('myColorRed');
green=localStorage.getItem('myColorGreen');
blue=localStorage.getItem('myColorBlue');
opacity=localStorage.getItem('myColorOpacity');
div.style.backgroundColor = `rgba(${red},${green},${blue},${opacity})`;
const randomColor = function (){
     red =parseInt(Math.random() * 254);
     green =parseInt(Math.random() * 254);
     blue =parseInt(Math.random() * 254);
     opacity =Math.random();
    return `rgba(${red},${green},${blue},${opacity})`;

};


const willBeenClicked = document.querySelector(".click-button");
const clickHandler = function(){
    localStorage.setItem('myColorRed',red);
    localStorage.setItem('myColorGreen',green);
    localStorage.setItem('myColorBlue',blue);
    localStorage.setItem('myColorOpacity',opacity);
    div.style.backgroundColor = randomColor();
};


willBeenClicked.addEventListener("click",clickHandler);
