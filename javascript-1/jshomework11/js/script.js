let enter =  document.querySelector(".enter");
let s =  document.querySelector(".s");
let e =  document.querySelector(".e");
let o =  document.querySelector(".o");
let n =  document.querySelector(".n");
let l =  document.querySelector(".l");
let z =  document.querySelector(".z");


document.addEventListener("keydown", function (event) {
    //  all.style.color="white";
    if (event.code === "KeyS") {
        enter.style.backgroundColor = "black";
        o.style.backgroundColor = "black";
        e.style.backgroundColor = "black";
        n.style.backgroundColor = "black";
        l.style.backgroundColor = "black";
        z.style.backgroundColor = "black";
        s.style.backgroundColor = "blue";
    } else if (event.code === "Enter") {
        enter.style.backgroundColor = "blue";
        o.style.backgroundColor = "black";
        e.style.backgroundColor = "black";
        n.style.backgroundColor = "black";
        l.style.backgroundColor = "black";
        z.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
    }else if (event.code === "KeyO") {
        enter.style.backgroundColor = "black";
        o.style.backgroundColor = "blue";
        e.style.backgroundColor = "black";
        n.style.backgroundColor = "black";
        l.style.backgroundColor = "black";
        z.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
    }else if (event.code === "KeyE") {
        enter.style.backgroundColor = "black";
        o.style.backgroundColor = "black";
        e.style.backgroundColor = "blue";
        n.style.backgroundColor = "black";
        l.style.backgroundColor = "black";
        z.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
    }else if (event.code === "KeyZ") {
        enter.style.backgroundColor = "black";
        o.style.backgroundColor = "black";
        e.style.backgroundColor = "black";
        n.style.backgroundColor = "black";
        l.style.backgroundColor = "black";
        z.style.backgroundColor = "blue";
        s.style.backgroundColor = "black";
    }else if (event.code === "KeyL") {
        enter.style.backgroundColor = "black";
        o.style.backgroundColor = "black";
        e.style.backgroundColor = "black";
        n.style.backgroundColor = "black";
        l.style.backgroundColor = "blue";
        z.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
    }else if (event.code === "KeyN") {
        enter.style.backgroundColor = "black";
        o.style.backgroundColor = "black";
        e.style.backgroundColor = "black";
        n.style.backgroundColor = "blue";
        l.style.backgroundColor = "black";
        z.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
    }
});