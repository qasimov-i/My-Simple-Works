/* Theoretical question
-I think that functions are very important when working on a large project.
    So if the same operation is needed in
different parts of the project, we can write the operation to a function instead of writing it every time.
and when i need to  same operation , i call function.


 */

let number1=parseInt(prompt("Please,Enter the number1"));
while(isNaN(number1) ){
    number1=parseInt(prompt("Enter the number1 correctly "));
}
let operation=prompt(`Enter the operation : *  /  -  +   %`);
let number2=parseInt(prompt("Please,Enter the number2"));
while(isNaN(number2) ){
    number2=parseInt(prompt("Enter the number2 correctly "));
}
function simpleCalc(num1,num2,opr) {
    if(opr==="/") console.log(`${num1} ${opr} ${num2} = ` + (num1 / num2));
    else if(opr==="-") console.log(`${num1} ${opr} ${num2} = ` + (num1 - num2));
    else if(opr==="+") console.log(`${num1} ${opr} ${num2} = ` + (num1 + num2));
    else if(opr==="%") console.log(`${num1} ${opr} ${num2} = ` + (num1 % num2));
    else if(opr==="*") console.log(`${num1} ${opr} ${num2} = ` + (num1 * num2));

}
simpleCalc(number1,number2,operation);
