// // What are functions?
// // *
// // functions are blocks of codes designed to perform a specific TextTrackList.

// // *Syntax

// // function function_name(){}

// function writeToConsole() {
//     console.log('this is a message to the console');
// }

// writeToConsole();


// /*Different ways of writing functions*/
// // function add(num1, num2){
// //     return num1 + num2
// // }

// // const addition = function(num1, num2){
// //     return parseInt(num1) + parseInt(num2);
// // }

// // const adding = (num1, num2) => {
// //     return parseInt(num1) + parseInt(num2);
// // }

// const ADD = (num1, num2) => parseInt(num1) + parseInt(num2);

// function sub(num1, num2) {
//     return parseInt(num1) - parseInt(num2)
// }

// function divide(num1, num2){
//     return num1 / num2
// }

// // add(1, 2);

// // add(5, 15);

// // console.log(divide(20, 2));

// // let ans = divide(10, 5);
// // console.log(ans);

// // add(divide(10, 2), divide(20, 5));

// var button = document.getElementById('calculate');
// var num1 = document.getElementById('num1');
// var num2 = document.getElementById('num2');
// var result = document.getElementById('result');

// // button.addEventListener('click', function (){
// //     var output = ADD(parseInt(num1.value), parseInt(num2.value));
// //     result.innerText = 'The answer is: ' + output;
// // })

// button.addEventListener('click',  () => {
//     var output = ADD(parseInt(num1.value), parseInt(num2.value));
//     result.innerText = 'The answer is: ' + output;
// })

function myName() {
    console.log ('My name is Pascal Osemene');
}
myName();

const name = function (){
    console.log("My name is Osemene Pascal O.");
}
name();

const NAME = () => {
       console.log('My name is Osemene O. Pascal');
     }
NAME();
    
const my_name = () => console.log('My name is Pascal O. Osemene');
my_name();

const my_name1 = _ => console.log('My name is Pascal O. Osemene');
my_name();