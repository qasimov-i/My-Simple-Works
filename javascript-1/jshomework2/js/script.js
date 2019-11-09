/* Theoretical question
-instead of rewriting the same operation over and over
 again, we can write it once in a cycle and do it as we want.and we can use operation how many we want.
 */
/*     The task    *//*
let userNumber=parseInt(prompt("Please,Enter number"));
while(isNaN(userNumber) ){
    userNumber=parseInt(prompt("Enter the number correctly "));
}
//for (let i=5;i<=userNumber;i+5){
//    console.log(i);
//}
if(userNumber<5){
    console.log(`Sorry, no numbers`);
}else{
        for(let i=0;i<=userNumber;i++) {
            if (i % 5 == 0) console.log(i);
        }
}*/


/*An optional advanced complexity task:  */
let m=parseInt(prompt("Please,Enter the m"));
while(isNaN(m) ){
    m=parseInt(prompt("Enter the m correctly "));
}

let n=parseInt(prompt("Please,Enter the n"));
while(isNaN(n) ){
    n=parseInt(prompt("Enter the n correctly "));
}

while(m>n){
    alert("Numbers are correct !!! ")
    m=parseInt(prompt("Enter the m , m is smaller  number "));
    n=parseInt(prompt("Enter the n , n is larger number "));
}

let count=0;
for(m;m<=n;m++){
    for(let j=1;j<=(m/2);j++){
        if(m%j===0) count++;
    }
    if(count===1) console.log(m);
    count=0;
}

