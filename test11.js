//ES6 导入
//命名导入
//命名导出可以使用*批量获取并赋值给保存导出集合的别名，而无须列出每个标识符：
import { add as add2, sub as sub2 } from './test10.js';
// import { add , sub as sub2 } from './test10.js';
console.log(add(1, 2));
console.log(sub2(1, 2));

import * as test10 from './test10.js';
console.log(test10.add(1, 2));
console.log(test10.sub(1, 2));
console.log(test10.a);




// 默认导入
import test100 from './test10.js';
console.log(test100.c);

import {default as test101} from './test10.js';//与上面的区别是，这里使用了别名 等价
console.log(test101.c);

//同时使用默认导入和命名导入
import test102, { add as add3, sub as sub3 } from './test10.js';
console.log(add3(1, 2));
console.log(sub3(1, 2));
console.log(test102.a); //不存在返回undefined
console.log(test102.c);

import{default as test103, add , sub as sub4} from './test10.js';
console.log(add(1, 2));
console.log(sub4(1, 2));
console.log(test103.c);
import test104, * as test105 from './test10.js';
console.log(test104.c);
console.log(test105.a);
console.log(test105.a);





