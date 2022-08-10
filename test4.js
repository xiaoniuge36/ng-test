// let a = {a:1};
// //a添加一个Symbol属性
// a[Symbol.iterator] = function(){
//     let i = 0;
//     return {
//         next: function(){
//             return {
//                 value: i++,
//                 done: false
//             }
//         }
//     }
// }

// // Object.getOwnPropertySymbols(a);



// var obj = {};
// var a = Symbol("a");
// var b = Symbol.for("b");

// obj[a] = "localSymbol";
// obj[b] = "globalSymbol";

// var objectSymbols = Object.getOwnPropertySymbols(obj);

// console.log(obj); // {a: "localSymbol", Symbol(b): "globalSymbol"}
// console.log(objectSymbols.length); // 2
// console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
// console.log(objectSymbols[0])      // Symbol(a) 


// let a = {a:1};
// let b = Object.create(a);
// console.log(a); // {a: 1}
// console.log(b); // {} 在原型链上没有a属性，但是在Object.create(a)上有a属性 Object.create(a)是a的一个实例 因此b也有a属性
// console.log(b.a); // 1
// console.log(Object.getPrototypeOf(b) === a); // true
// let obj = { a:0, b:1,c:null,d:undefined };
// Object.hasOwn(obj, "a"); // true
// Object.hasOwn(obj, "b"); // true
// Object.hasOwn(obj, "c"); // true
// Object.hasOwn(obj, "d"); // true
// Object.hasOwn(obj, "e"); // false

// const example = {};
// example.prop = 'exists';

// // `hasOwn` will only return true for direct properties:
// // Object.hasOwn(example, 'prop');             // returns true
// // Object.hasOwn(example, 'toString');         // returns false
// // Object.hasOwn(example, 'hasOwnProperty');   // returns false

// // // The `in` operator will return true for direct or inherited properties:
// // 'prop' in example;                          // returns true
// // 'toString' in example;                      // returns true
// 'hasOwnProperty' in example;                // returns true


// let obj1 = {a:2 ,b:1};

// obj1.hasOwnProperty('a'); // true
// obj1.hasOwnProperty('b'); // true
// obj1.hasOwnProperty('c'); // false

// Object.is(NaN, NaN); // true
// Object.is(+0, -0); // false
// Object.is(NaN, +0); // false
// Object.is(Infinity, -Infinity); // false
// Object.is(Infinity, NaN); // false
// Object.is(Infinity, Infinity); // true
// Object.is(-0, +0); // true
// Object.is(+0, -0); // true
// Object.is(NaN, NaN); // true
// Object.is(NaN, +0); // false
// Object.is(NaN, Infinity); // false
// Object.is(NaN, -Infinity); // false
// Object.is(Infinity, NaN); // false
// Object.is(Infinity, +0); // false
// Object.is(Infinity, -0); // false
// Object.is(Infinity, Infinity); // true
// Object.is(Infinity, -Infinity); // false
// Object.is(-Infinity, NaN); // false
// Object.is(-Infinity, +0); // false
// Object.is(-Infinity, -0); // false
// Object.is(-Infinity, Infinity); // false
// Object.is(-Infinity, -Infinity); // true
// Object.is(+Infinity, NaN); // false
// Object.is(+Infinity, +0); // false

// New objects are extensible.
// let empty = {};
// Object.isExtensible(empty); // === true

// Object.preventExtensions(empty);
// Object.isExtensible(empty); // === false


// let sealed = Object.seal({});
// Object.isExtensible(sealed); // === false


// let frozen = Object.freeze({});
// Object.isExtensible(frozen); // === false

// let obj = {a:1,b:2};
// Object.isExtensible(obj); // === true

// let obj1 = {a:1,b:2};
// Object.isFrozen(obj1); // === false

// let obj2 = Object.freeze({a:1,b:2});
// Object.isFrozen(obj2); // === true

// let obj3 = Object.seal({a:1,b:2});
// Object.isFrozen(obj3); // === true

// let obj4 = Object.preventExtensions({a:1,b:2});
// Object.isFrozen(obj4); // === true

// let obj5 = Object.defineProperty({a:1,b:2},'c',{value:3});
// Object.isFrozen(obj5); // ===  false  因为它没有被冻结

// let obj6 = Object.defineProperty({a:1,b:2},'c',{value:3,writable:false});
// Object.isFrozen(obj6); // === false 因为它没有被冻结

// // isPrototypeOf 是否是原型链上的对象

// let obj1 = {a:1,b:2};
// Object.isSealed(obj1); // === false

// let obj2 = Object.seal({a:1,b:2});
// Object.isSealed(obj2); // === true

// let obj3 = Object.freeze({a:1,b:2});
// Object.isFrozen(obj3); // === true

// let obj4 = Object.preventExtensions({a:1,b:2});
// // Object.isExtensible(obj4); // === false

// let obj5 = Object.defineProperty({a:1,b:2},'c',{value:3});
// Object.isExtensible(obj5); // === true

let obj1 = {a:1,b:2};
Object.keys(obj1); // ['a', 'b']

let obj2 = {a:1,b:2,c:3};
