//test9.js 导入test8.js
//分别导入 add 和 sub
var test8 = require('./test8');
//统一导入
var {add , sub } = require('./test8');
//可同时用两种方式导入
var {add:add1, sub:sub1 ,a } = require('./test8');
//
console.log(add(1, 2));
console.log(sub(1, 2));

console.log(test8.add(1, 2));
console.log(test8.sub(1, 2));

console.log(add1(1, 2));
console.log(sub1(1, 2));
console.log(a);

// 无论一个模块在 require()中被引用多少次，模块永远是单例。在下面的例子中，moduleA 只会
// 被打印一次。这是因为无论请求多少次，moduleA 只会被加载一次。
// console.log('moduleA'); 
// var a1 = require('./test8'); 
// var a2 = require('./test8'); 
// console.log(a1 === a2); // true

console.log(this);


