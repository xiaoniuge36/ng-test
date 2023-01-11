// let array1 = [5, 12, 8, 130, 44];
// let array2 = [6, 13, 10, 20, 45];
// let array3 = [7, 14, 11, 21, 46];
// let array4 = [8, 15, 12, 22, 47];

// console.log(array1.concat());
// console.log(array1.concat(array2));
// console.log(array1.concat(array2, array3));
// console.log(array1.concat(array2, array3, array4));
// console.log(array1.concat(array2, array3, array4, [1, 2, 3]));


// let array1 = [1,2,3,4];
// let array2 = [5,6,7,8];
// console.log(array1.push(5));
// console.log(array1);
// //合并两个数组，array2（第二个数组） 过大时候少用
// console.log(Array.prototype.push.apply(array1, array2));

// let array1 = [1,2,3,4];

// console.log(array1.reduceRight((pre, cur) => { return pre + cur }));

//reduceRight() 方法对数组中的每个元素执行一个由您提供的函数。
// reduceRight() 方法接受一个函数作为参数，该函数调用一个累加器（accumulator）和当前值（currentValue），并且返回一个值。
// reduceRight() 方法会从数组的右侧开始，同时将累加器的值与当前值进行累加。
// reduceRight() 方法会把累加器的值作为数组中的最后一个值，并且返回这个值。
// reduceRight() 方法会把累加器的值作为数组中的最后一个值，并且返回这个值。


// let array1 = [1,3,2,4];

// console.log(array1.pop()); //4   
// console.log(array1); //[1,3,2]


//  let array1 = [1,3,2,4];
// array1.forEach((item, index) => {
//     console.log(item, index); 
// }
// );

// 
console.log(Array.from('foo')); // ['f', 'o', 'o']

console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]




`                                                                                                                                                               `