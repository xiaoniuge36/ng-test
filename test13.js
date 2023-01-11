//扩展运算符
//对象扩展运算符
let bar = { a: 1, b: 2 };
let baz = { ...bar }; // { a: 1, b: 2 }

//数组扩展运算符
let arr = [1, 2, 3];
let arr2 = [...arr]; // [1, 2, 3]

//函数扩展运算符
//接收多个不固定参数的函数
function foo(...args) {
    console.log(arguments); // arguments是一个类数组对象
    console.log(...arguments); // 1 2 3
    console.log(args);
}
foo(1, 2, 3); // [1, 2, 3]
//相当于
let [ ...args] = [1, 2, 3];


function foo(a, b, ...rest) {
    console.log(a, b, rest);
}
foo(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]
//相当于
let [a, b, ...rest] = [1, 2, 3, 4, 5];

function foo(a, b, ...rest) {
    console.log(a, b, ...rest);
}
foo(1, 2, 3, 4, 5); // 1 2 3 4 5

//接受多个不固定参数的函数
function foo(...args) {
    console.log(args);
}
foo(1, 2, 3); // [1, 2, 3]

//接收多个固定参数的函数
function foo(a, b, ...rest) {
    console.log(a, b, rest);
}
foo(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]

function foo(a, b) {
    console.log(a, b);
}
foo(...[1, 2]); // 1 2