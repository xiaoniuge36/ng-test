// let array1 = ['a', 'b', 'c'];

// let iterator1 = array1.entries();

// console.log(iterator1.next());

// console.log(iterator1.next().value);

// console.log(iterator1.next().value);

// console.log(iterator1.next().value);

// console.log(iterator1.next());

// let array = [1, 2, 3, 4, 5];

// console.log(array.every((element) => element > 4));
// console.log(array.every((element) => element < 6));
// var let = [1,2,3,4,5,6]
// // 结果是：false
// // arr.every(function (currentValue, index, arr) {
//        // 0;
// //     console.log(this);
// //     return this < currentValue;
// // }, 0);

// arr.every(function (currentValue, index, arr) {
//     //window;
//     console.log(this);
//     return 0 < currentValue;
// });


//填充二维数组
// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = i + j;
//     }
// }
// console.log(arr);

// // fill方法
// console.log([1, 2, 3, 4, 5].fill(0));
// console.log([1, 2, 3, 4, 5].fill([1]));
// console.log([1, 2, 3, 4, 5].fill(0, 1, 3));
// console.log([1, 2, 3, 4, 5].fill(0, 2));
// console.log([1, 2, 3, 4, 5].fill(0, -1));
// console.log([1, 2, 3, 4, 5].fill(0, 5));
// //生成一个二维数组
// console.log([0,0].map(() => new Array(3).fill(0)));

// let array = [1, 2, 3, 4, 5];
// console.log(array.filter((element) => element > 4));
// console.log(array.filter((element) => element < 6));
// console.log(array.filter((element) => element === 4));
// console.log(array.filter((element) => element === 5));
// console.log(array.filter((element) => element === 6));
// let array = [1, 2, 3, 4, 5];

// console.log(array.find((element) => element > 4));
// console.log(array.find((element) => element < 6));
// console.log(array.find((element) => element === 4));
// console.log(array.find((element) => element === 6));
// console.log(array.find());

// let array = [1, 2, 3, 4, 5];
// console.log(array.findIndex((element) => element > 4));
// console.log(array.findIndex((element) => element < 6));
// console.log(array.findIndex((element) => element === 4));
// console.log(array.findIndex((element) => element === 6));

// let array = [1,2,3,4,5];

// console.log(array.findLastIndex((element) => element > 4));
// console.log(array.findLastIndex((element) => element < 6));
// console.log(array.findLastIndex((element) => element === 4));
// console.log(array.findLastIndex((element) => element === 6));

// let array = [1,2,3,4,5,[1]];
// let array1 = [1,2,3,,5,[1]];
// let array2 = [1,2,3,4,5,[[1]]];
// console.log(array.flat());
// console.log(array);
// console.log(array1.flat());
// console.log(array1);
// console.log(array2.flat(2));

// let array = [1,2,3,4,5];
// console.log(array.forEach((element) => console.log(element)));
// console.log(array.forEach((element) => element*2));
// console.log(array);

// let array = [1,2,3,4,5];
// console.log(array.includes(1));
// console.log(array.includes(2));
// console.log(array.includes(3,1));
// console.log(array.includes(4,4));
// console.log(array.includes(5,-1));
// console.log(array.includes());

// let array = [1,2,3,4,5];
// console.log(array.indexOf(1));
// console.log(array.indexOf(2));
// console.log(array.indexOf(3,1));
// console.log(array.indexOf(4,4));
// console.log(array.indexOf(5,-1));
// console.log(array.indexOf());
// console.log(array);

// console.log(Array.isArray([1,2,3,4,5]));
// console.log(Array.isArray({0:1,1:2,2:3,3:4,4:5}));
// console.log(Array.isArray(function(){}));
// console.log(Array.isArray(/^/));
// console.log(Array.isArray(new Date()));
// console.log(Array.isArray(new Map()));
// console.log(Array.isArray(new Set()));
// console.log(Array.isArray(Array.prototype));

//类数组转换为数组
let arrayLike = {0:1,1:2,2:3,3:4,4:5,length:5};
let array = Array.from(arrayLike);
console.log(array);