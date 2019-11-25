let count=1;
let count2=1;
    let text = document.querySelector('#pfirst');
    let iconAppear = document.getElementById("ipfirst");
    iconAppear.addEventListener("click", textAppear, true);

    function textAppear() {
        if(count===0) {
            iconAppear.className = "fas fa-eye-slash icon-password";
            let text = document.querySelector('#pfirst');
            text.type = "password";
            count=1;
        } else if(count==1){
            iconAppear.className = "fas fa-eye icon-password";
            let text = document.querySelector('#pfirst');
            text.type = "text";
            count=0;
        }
    }

    let textSecond = document.querySelector('#psecond');
    let iconAppearSecond = document.getElementById("ipsecond");
    iconAppearSecond.addEventListener("click", textAppearSecond, true);

    function textAppearSecond() {
        if(count2===0) {
            iconAppearSecond.className = "fas fa-eye-slash icon-password";
            let text = document.querySelector('#psecond');
            text.type = "password";
            count2=1;
        } else if(count2==1){
            iconAppearSecond.className = "fas fa-eye icon-password";
            let text = document.querySelector('#psecond');
            text.type = "text";
            count2=0;
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
            hiddenError();

        }

    }
    function hiddenError(){
        if(!h){
            let hFive=  document.querySelector("h5");
            hFive.remove();
        }
    }
    let error=document.querySelector(".btn");
    error.addEventListener("click",hiddenError, true);



    let button = document.querySelector(".btn");
    button.addEventListener("click", add, true);
