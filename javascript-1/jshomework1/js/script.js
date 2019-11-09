/*## Theoretical question
 -when we declare
 a variable via "var" , the variable will be global
-when we declare a variable via "let" ,the variable  will be
variable scope and we can use just it
 inside the declared brackets
-As seen in the name of const , it is a constant variable and we cannot change its value
and  we can use just it inside the declared brackets

 */



alert('Please,first enter your name')
let userName=prompt(`Please,enter your name`);
while (userName==""){
    userName=prompt(`Enter your name ,It is important`);
}
confirm(`is your name ${userName} ?`);
let userAge=parseInt(prompt(`Please,enter your age`));
while(isNaN(userAge)){
    userAge=parseInt(prompt("Enter your age  correctly "));
}
if(userAge<18){
    alert(`You are not allowed to visit this website`);
}else if(18<=userAge && userAge<=22  ){
    let bottom=confirm(`Are you sure you want to continue?`);

    if(bottom==true){
        alert('Welcome, '+ userName);
    }else alert(`You are not allowed to visit this website`);
}else {
    alert('Welcome, '+ userName);
}