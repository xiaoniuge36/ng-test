//ES6 导入
//分别导入
// import { add, sub } from './test10.js';
// //使用
// console.log(add(1, 2));
// // console.log(sub(1, 2));
// console.log(add);
//统一导入
import * as test10 from './test10.js';
// console.log(test10.add(1, 2));
// console.log(test10.sub(1, 2));
console.log(test10.default.add(1, 2));
console.log(test10.default.sub(1, 2));
// //可同时用两种方式导入
// import { add as add1, sub as sub1 ,a } from './test10.js';
// console.log(add1(1, 2));
// console.log(sub1(1, 2));
// console.log(a);

// //默认导出多个
// import test10, { add as add2, sub as sub2 } from './test10.js';
// console.log(add2(1, 2));
// console.log(sub2(1, 2));
// console.log(test10.a);
// //默认导入
// import test10 from './test10.js';
// console.log(test10.add(1, 2));

console.log(this); // undefined

