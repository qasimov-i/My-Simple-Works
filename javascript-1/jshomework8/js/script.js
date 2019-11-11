document.querySelector('body').style.cssText="font-family:sans-serif";
function myFocusFunction() {
    document.querySelector(".text").style.borderColor = "green";
}
let span=document.querySelector('span');
let invalid=document.querySelector('invalid');

function reset(){

    document.querySelector('.text').style.borderColor="";
    let span = document.createElement('span');
    span.style.cssText="margin-left:10px";
    span.innerHTML = "Current price:" + `${document.querySelector(".text").value}`;
    textInput.append(span);
    let x = document.createElement('button');
    x.style.cssText="border-radius:50%;color:grey;background-color: white;";
    x.innerHTML = "X";
    span.append(x);
}
function myBlurFunction() {
    document.querySelector(".text").style.borderColor = "";
}
let textInput=document.querySelector("form");
textInput.addEventListener("focus", myFocusFunction, true);
textInput.addEventListener("blur", myBlurFunction, true);

function currentPrice() {


    if (document.querySelector(".text").value < 0) {

        let text = document.querySelector('label');
        document.querySelector('.text').style.borderColor = "red";
        let h = document.createElement('invalid');
        h.className = "error-text";
        h.innerHTML = `Please enter correct price`;

        text.append(h);
        h.style.cssText = "color:red ;margin:0 ;font-size:10px";
    } else  {
        reset();
    }

}
function hiddenError(){
    if(!invalid){
        let x=  document.querySelector("invalid");
        x.remove();
    }
}
let error=document.querySelector("form");
error.addEventListener("blur",hiddenError, true);


function hiddenPrice(){
    if(!span){
        let x=  document.querySelector("span");
        x.remove();
    }
}
let active=document.querySelector("form");
active.addEventListener("blur",hiddenPrice, true);

textInput.addEventListener("blur", currentPrice, true);
