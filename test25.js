// for (let i = 1; i <= 10; ++i) {
//     console.log(i);
// } 


// let collection = ['foo', 'bar', 'baz']; 
// for (let index = 0; index < collection.length; ++index) { 
//  console.log(collection[index]); 
// } 


// let str = 'abc'; 
// let arr = ['a', 'b', 'c']; 
// let map = new Map().set('a', 1).set('b', 2).set('c', 3); 
// let set = new Set().add('a').add('b').add('c'); 
// let els = document.querySelectorAll('div'); 
// // 这些类型都实现了迭代器工厂函数
// console.log(str[Symbol.iterator]); // f values() { [native code] } 
// console.log(arr[Symbol.iterator]); // f values() { [native code] } 
// console.log(map[Symbol.iterator]); // f values() { [native code] } 
// console.log(set[Symbol.iterator]); // f values() { [native code] } 
// console.log(els[Symbol.iterator]); // f values() { [native code] } 
// // 调用这个工厂函数会生成一个迭代器
// console.log(str[Symbol.iterator]()); // StringIterator {} 
// console.log(arr[Symbol.iterator]()); // ArrayIterator {} 
// console.log(map[Symbol.iterator]()); // MapIterator {'a' => 1, 'b' => 2, 'c' => 3}
// console.log(set[Symbol.iterator]()); // SetIterator {'a', 'b', 'c'}
// console.log(els[Symbol.iterator]()); // ArrayIterator {}


// let num = 1;
// let obj = {a:1}; //原生对象
// let bol = true;
// let big = 1234567890123456789012345678901234567890n;
// let sym = Symbol('sym');
// let und = undefined;
// let nul = null;
// let str = 'abc';

// console.log(num[Symbol.iterator]); // undefined
// console.log(obj[Symbol.iterator]); // undefined
// console.log(bol[Symbol.iterator]); // undefined
// console.log(big[Symbol.iterator]); // undefined
// console.log(sym[Symbol.iterator]); // undefined
// console.log(und[Symbol.iterator]); // Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
// console.log(nul[Symbol.iterator]); // Uncaught TypeError: object null is not iterable (cannot read property Symbol(Symbol.iterator))
// console.log(str[Symbol.iterator]); // f [Symbol.iterator]() { [native code] }


// function makeRangeIterator(start = 0, end = Infinity, step = 1) { 
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//        next: function() {
//            let result;
//            if (nextIndex < end) {
//                result = { value: nextIndex, done: false }
//                nextIndex += step;
//                iterationCount++;
//                return result;
//            }
//            return { value: iterationCount, done: true }
//        }
//     };
//     return rangeIterator;
// }

// let it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//  console.log(result.value); // 1 3 5 7 9
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value); // 5



// // 可迭代对象
// let arr = ['foo', 'bar']; 
// // 迭代器工厂函数
// console.log(arr[Symbol.iterator]); // f values() { [native code] } 
// // 迭代器
// let iter = arr[Symbol.iterator](); 
// console.log(iter); // ArrayIterator {} 
// // 执行迭代
// console.log(iter.next()); // { done: false, value: 'foo' } 
// console.log(iter.next()); // { done: false, value: 'bar' } 
// console.log(iter.next()); // { done: true, value: undefined }

// const friends = ['Michael', 'Stacy', 'Andy'];

// function createIterator(items) {
//     let i = 0;
//     return {
//         next: function() {
//             let done = (i >= items.length);
//             let value = !done ? items[i++] : undefined;
//             return {
//                 done: done,
//                 value: value
//             };
//         }
//     };
// }

// const iterator = createIterator(friends);
// console.log(iterator.next()); // { done: false, value: 'Michael' }
// console.log(iterator.next()); // { done: false, value: 'Stacy' }
// console.log(iterator.next()); // { done: false, value: 'Andy' }
// console.log(iterator.next()); // { done: true, value: undefined }


// const info = {
//     friends: ['Michael', 'Stacy', 'Andy'],
//     [Symbol.iterator]: function() {
//         let index = 0;
//         return {
//             // next: () => {
//             //     let done = (index >= this.friends.length);
//             //     let value = !done ? this.friends[index++] : undefined;
//             //     return {
//             //         done: done,
//             //         value: value
//             //     };
//             // }
//             next: () => {
//                 if (index < this.friends.length) {
//                     return {done: false, value: this.friends[index++]};
//                 } else {
//                     return {done: true,value: undefined};
//                 }
//             }
            
//         };
//     }
// };


// //创建自定义迭代对象
// const info = {
//     friends: ['Michael', 'Stacy', 'Andy'],
//     [Symbol.iterator]: function() {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.friends.length) {
//                     return {done: false, value: this.friends[index++]};
//                 } else {
//                     return {done: true,value: undefined};
//                 }
//             }
//         };
//     }
// };
// //或者这么创建也是等价的(结果等价类型不同)
// // const info = ['Michael', 'Stacy', 'Andy'];
// // console.log(info[Symbol.iterator]().next()); // { done: false, value: 'Michael' }

// //for...of循环
// for (let friend of info) {
//     console.log(friend);
// }
// // console.log(Array.isArray(info)); // true
// //展开运算符
// console.log([...info]); // [ 'Michael', 'Stacy', 'Andy' ]
// //解构赋值
// let [first, second, third] = info;
// console.log(first, second, third); // Michael Stacy Andy
// //Array.from
// console.log(Array.from(info)); // [ 'Michael', 'Stacy', 'Andy' ]
// //Set构造函数
// console.log(new Set(info)); // Set { 'Michael', 'Stacy', 'Andy' }
// //Map构造函数
// console.log(new Map([[1, 'one'], [2, 'two'], [3, 'three']])); // Map { 1 => 'one', 2 => 'two', 3 => 'three' }
// //Promise.all
// Promise.all(info).then((values) => {
//     console.log(values); // [ 'Michael', 'Stacy', 'Andy' ]
// });

class Classroom {
    constructor(name, address, initialStudents) {
      this.name = name
      this.address = address
      this.initialStudents = initialStudents
    }

    *[Symbol.iterator]() {
      yield *this.initialStudents
      // let index = 0
      // return {
      //   next: () => {
      //     if (index < this.initialStudents.length) {
      //       return { done: false, value: this.initialStudents[index++] }
      //     } else {
      //       return { done: true, value: undefined }
      //     }
      //   },
      //   return() {
      //     console.log("迭代器提前终止")
      //     return { done: true }
      //   }
      // }
    }
  }

  const c1 = new Classroom("1101", "3幢222", ["abc", "cba", "nba", "mba"])
  function foo() {
    for (const stu of c1) {
     
      if (stu === "cba") {
        // throw new Error("aaaa")
        // break;
        // return;
        continue;
      }
      console.log(stu)
    }
  }
  foo()