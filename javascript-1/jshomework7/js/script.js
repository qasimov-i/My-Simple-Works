let listData = [
    'Blue',
    'Red',
    'White',
    'Green',
    'Black',
    'Orange',
    1,
    124,
    null,
    '34'
];
let fragment = document.createElement('ul');
function   getList(arr)// if I add rest array(...arr) as argument here , the code will be wrong
{
    arr.map(function(x){
        let li = document.createElement('li');
        li.innerHTML =x;
        fragment.append(li);
    });
    return fragment;

}
let div=document.querySelector('div');//or I can create new "div"
// :let div= document.createElement('div');
div.append(getList(listData));

// // if (typeof (arr[i]) !== 'object' || arr[i] === null) {// this is for advanced level of task
//
// //  }
//
//
//
 /***  I tried to solve the advanced level of task below, but i couldn`t it***/
//
//
// // else {
// //
// //     let roots = arr[i].map(function (num) {
// //         arr2.push(num);
// //     });
// //
// //     let fragment = document.createElement('ul');
// //     for (let i = 0; i < arr2.length; i++) {
// //         li = document.createElement('li');// i create 'li' tag;
// //         li.innerHTML = arr2[i];// i fill out list
// //         fragment.append(li);
// //     }
// //
// //     let div = document.querySelector('li');
// //
// //     div.append(fragment);
// //
// }