// let target = { a: 1, b: 2 };
// let source = { b: 4, c: 5 };

// let returnedTarget = Object.assign(target, source);
// console.log(target); // { a: 1, b: 4, c: 5 }
// console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

// target.a = 6;
// console.log(target); // { a: 6, b: 4, c: 5 }
// console.log(returnedTarget); // { a: 6, b: 4, c: 5 }

// let target2 = {  };
// let source2 = { a: 1, b: 2 };
// let returnedTarget2 = Object.assign(target2, source2);
// console.log(target2); // { a: 1, b: 2 }
// console.log(returnedTarget2); // { a: 1, b: 2 }

// let target3 = { a: 1};
// target3.a; //get
// target3.b = 2; // set
// console.log(target3); // { a: 1, b: 2 }

// let target4 = {a : 1, b : 2};
// Object.defineProperties(target4, { 
//     a : {
//         value : 3,
//         // writable : false, 是否可以修改
//         // enumerable : true, 是否可以遍历
//         // configurable : true 是否可以删除

//     },
//     c: {
//         value: 3,
//     },
//     d: {
//         value: 4,
//     }
// }
// );
// console.log(target4); // { a: 3, b: 2, c: 3, d: 4 }

// let target5 = { a: 1, b: 2 };

// Object.defineProperty(target5, 'a', { });
// target5.a = 3;
// console.log(target5); // { a: 3, b: 2 }

// let target6 = { a: 1, b: 2 };
// Object.defineProperty(target6, 'c', { value: 3 }); // 创建一个新属性
// console.log(target6); // { a: 1, b: 2, c: 3 }
// target6.c = 4; // 修改一个属性
// console.log(target6); // { a: 1, b: 2, c: 3 }

// let target7 = { a: 1, b: 2 };
// console.log(Object.entries(target7)); 
// console.log(Object.keys(target7)); 
// console.log(Object.values(target7));

// let target8 = { a: 1, b: 2 };
//  Object.freeze(target8);
//     target8.a = 3;
//     console.log(target8); // { a: 1, b: 2 }

// let target7 = { a: 1, b: 2 };

//  for (key in target7) {
//      console.log(target7);
//  }

// let target9 =[1,23,4,5,6,7,8,9,10];
// Object.freeze(target9);
// target9.push(11);
// console.log(target9);   // [1, 23, 4, 5, 6, 7, 8, 9, 10, 11]

// //创建键值对列表  
// let target10 = { a: 1, b: 2 };
// let entries = Object.entries(target10);
// console.log(entries); // [ ['a', 1], ['b', 2] ]
// Object.fromEntries(entries);
// console.log(target10); // { a: 1, b: 2 }

// //Map转换为对象
// let map = new Map([['a', 1], ['b', 2]]);
// console.log(map); // Map { 'a' => 1, 'b' => 2 }
// console.log(Object.fromEntries(map)); // { a: 1, b: 2 }
// console.log(map);

// let target11 = { a: 1, b: 2 };
// let d = Object.getOwnPropertyDescriptor( target11, 'a' );
// console.log(d);  // { value: 1, writable: true, enumerable: true, configurable: true }
// let f = Object.getOwnPropertyDescriptor(target11 , 'c');
// console.log(f); // undefined

// let target12 = { a: 1, b: 2 };
// let d = Object.getOwnPropertyDescriptors( target12 );
// console.log(d); // { a: { value: 1, writable: true, enumerable: true, configurable: true }, b: { value: 2, writable: true, enumerable: true, configurable: true } }

// let target13 = {};
// let d2 = Object.getOwnPropertyDescriptors( target13 );
// console.log(d2); // {}

// let target14 = { a: 1, b: 2 };
//  let b =Object.getOwnPropertyNames(target14)
//     console.log(b); // [ 'a', 'b' ]

// 合并两个数组 

// 数组排序 
// let target15 = [1,2,3,4,5,6,7,8,9,10];
// target15.sort((a,b)=>{
//     return a-b;
// }
// );
// console.log(target15); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]