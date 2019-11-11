
    let text = document.querySelector('#pfirst');
    let iconAppear = document.getElementById("ipfirst");
    iconAppear.addEventListener("click", textAppear, true);

    function textAppear() {
        text.type = "text";
        iconAppear.className = iconAppear.className.replace(/\bfas fa-eye-slash icon-password\b/g, "fas fa-eye icon-password");
        if (text.type === "text") {
            let iconDisAppear = document.getElementById("ipfirst");
            iconDisAppear.addEventListener("click", textDisAppear, true);

            function textDisAppear() {
                let text = document.querySelector('#pfirst');
                iconAppear.className = iconAppear.className.replace(/\bfas fa-eye icon-password\b/g, "fas fa-eye-slash icon-password");
                text.type = "password";
            }
        }
    }

    let textSecond = document.querySelector('#psecond');
    let iconAppearSecond = document.getElementById("ipsecond");
    iconAppearSecond.addEventListener("click", textAppearSecond, true);

    function textAppearSecond() {
        textSecond.type = "text";
        iconAppearSecond.className = iconAppear.className.replace(/\bfas fa-eye-slash icon-password\b/g, "fas fa-eye icon-password");
        if (textSecond.type === "text") {
            let iconDisAppear = document.getElementById("ipsecond");
            iconDisAppear.addEventListener("click", textDisAppear, true);

            function textDisAppear() {
                let text = document.querySelector('#psecond');
                iconAppearSecond.className = iconAppear.className.replace(/\bfas fa-eye icon-password\b/g, "fas fa-eye-slash icon-password");
                textSecond.type = "password";
            }
        }

    }
    let h=document.querySelector("h5");

    function add(){
        if (text.value !== textSecond.value) {
            let error = document.querySelector('.btn');
            let h = document.createElement('h5');
            h.innerHTML = `You need to enter the identical values`;
            error.before(h);
            h.style.cssText = "color:red ;margin-left:100px ;margin-top:0;font-family:sans-serif";
        }
        else{
            alert("You are welcome");
        }

    }
    function hiddenError(){
        if(!h){
            let x=  document.querySelector("h5");
            x.remove();
        }
    }
    let error=document.querySelector(".btn");
    error.addEventListener("click",hiddenError, true);



    let button = document.querySelector(".btn");
    button.addEventListener("click", add, true);
