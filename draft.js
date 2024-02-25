"use strict";

// 16.04 functions, arrow functions
// let num = 20;
// function showFirstMessages(text) {
//     // text = 'HEllo WoRlD!';
//     console.log(text);
//      let num = 1;
//      console.log(num)
// }

// showFirstMessages('HEllo WoRlD!');

// console.log(num);

// console.log(calk(2, 3));
// console.log(calk(2, 5));
// console.log(calk(2, 7));

// function calk(a, b) {
//     return a + b;
// }

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum); 

// const logger = function() {
//     console.log('Hello!')
// };

// logger();

// const calc = (a, b) => a + b;
// console.log(calc(2,3))

// // arguments

// const usdCurr = 3.5;
// const eurCurr = 4;
// const discount = 0.9;


// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount)
// }

// const res = convert(500, usdCurr);
// promotion(res)

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if(i === 3) return
//     }
//     console.log('done')
// }

// test()

// function doNothing() {};
// console.log(doNothing() === undefined)

// function sayHello(name) {
//     return `Привет, ${name}`
// }


// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(6))

// function getMathResult(num, times) {
//     if(typeof(times) !== 'number' || times <= 0) {
//         return num
//     }

//     let result = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             result += `${num * i}`;
//         } else {
//             result += `${num * i}---`;
//         }
//     }

//     return result;
// }

// console.log(getMathResult(5, 3));

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// console.log(getMathResult(10, 5));

// const obj = {
//     a: 'one', 
//     s: 'two',
//     a: 'three'
// }
// console.log(obj)

//Methods

// const str = 'test';
// const arr = [1, 2, 3];


// console.log(str.toUpperCase()); //TEST

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('m')); //2
// console.log(fruit.indexOf('q')); //-1

// const logg = 'Hello world';

// console.log(logg.slice(6, logg.length)) //world
// console.log(logg.slice(6)) //world
// console.log(logg.slice(-5, -1)) //worl

// console.log(logg.substring(6, 11)) //world

// console.log(logg.substr(0, 5)) //Hello

const num = 12.2;
console.log(Math.round(num)); //12

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
