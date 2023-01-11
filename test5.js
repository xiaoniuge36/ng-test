// let obj = {a:1};
// Object.preventExtensions(obj);
// obj.b = 2;
// try {
//     Object.defineProperty(obj, 'c', {value: 3});
// }
// catch(e) {
//     console.log(e.message);
//     }
// console.log(obj);


// let arr =  [11, 2, 3];
// let obj = {a: 1};

// arr.propertyIsEnumerable('length'); // false
// //数组要用下标访问
// arr.propertyIsEnumerable('0'); // true
// arr.propertyIsEnumerable('11'); // false
// obj.propertyIsEnumerable('a'); // true

// let obj = {a:1};
// console.log(obj);
// Object.preventExtensions(obj);
// obj.a = 3;
// console.log(obj);

// let obj = {a:1};
// Object.seal(obj);
// obj.a = 3;
// console.log(obj);
// delete obj.a;
// console.log(obj);

// let obj = {a:1};
// obj.toString(); // "[object Object]"
// // 重写toString方法 可以输出对象的属性 和值
// // 如果对象属性是对象 则会输出对象的属性和值 如果对象属性是数组 则会输出数组的属性和值 如果对象属性是函数 则会输出函数的属性和值
// // 如果对象属性是字符串 则会输出字符串的属性和值 如果对象属性是数字 则会输出数字的属性和值 如果对象属性是布尔值 则会输出布尔值的属性和值
// // 如果对象属性是null 则会输出null的属性和值 如果对象属性是undefined 则会输出undefined的属性和值 如果对象属性是symbol 则会输出symbol的属性和值
// // 如果对象属性是object 则会输出object的属性和值 
// obj.toString = function() {
//     return 'hello';
// }
// console.log(obj.toString()); // hello

// obj.toString; // function toString() { [native code] }

// function Dog(name) {
//     this.name = name;
//   }
  
//   const dog1 = new Dog('Gabby');
//   // 重写toString方法
//   Dog.prototype.toString = function dogToString() {
//     return `${this.name}`;
//   };
  
//   console.log(dog1.toString());//"Gabby"

// let obj = {a:1};
// obj.values(); // [1]

// // 不可枚举的属性不能被for...in循环遍历
// let obj2 = {a:1};
// Object.defineProperty(obj2, 'b', {value: 2, enumerable: false});
// Object.values(obj2); // [1]
// console.log(obj2);
// for (let key in obj2) {
//     console.log(key);
// } // a 

// &&优先级高于|| 
//&& 返回第一个假值 都为真返回最后一个值
//|| 返回第一个为真的值 如果都为假则返回最后一个值
// let a = 1;
// let b = 2;
// let c = a && b; // 2
// let y = a || b; // 1
// console.log(c); // 2
// let d = a || b;
// console.log(d); // 1
// let e = a && b || c;
// console.log(e); // 2
// let f = a || b && c;
// console.log(f); // 1
// let g = a || b || c;
// console.log(g); // 1
// let h = a && b && c;
// console.log(h); // 2
// let i = a && b && c || d;
// console.log(i); // 2
// console.log(true && null); // null
// console.log(true && undefined); // undefined
// console.log(true && 1); // 1
// console.log(true && ''); // ''
// console.log(false && ''); // false
// console.log(false && 'hello'); // false
// console.log('hello' && false); // false
// console.log('' && false); // ''
// console.log(true && "hello"); // "hello"
// console.log("hello" && true); // true
// console.log(true && false); // false
// console.log(true && true); // true 
// console.log('test' && 'hello'); // hello
// console.log(null && 'hello'); // null
// console.log(undefined && 'hello'); // undefined
// console.log(1 && 'hello'); // hello
// console.log('' && 'hello'); // ''
// console.log(false && 'hello'); // false

console.log(true || null); // true
console.log(true || undefined); // true
console.log(true || 1); // true
console.log(true || ''); // true
console.log(false || ''); // ''
console.log(false || 'hello'); // 'hello'
console.log('hello' || false); // 'hello'
console.log('' || false); // false
console.log(true || "hello"); // true
console.log("hello" || true); // true
console.log(true || false); // true
console.log(true || true); // true
console.log('test' || 'hello'); // 'test'
console.log(null || 'hello'); // 'hello'
console.log(undefined || 'hello'); // 'hello'
console.log(1 || 'hello'); // 1
console.log('' || 'hello'); // 'hello'
console.log(false || 'hello'); // 'hello'
//[] 和 {} 默认为true
console.log([] ||false ); // []
console.log({} || false); // {}
console.log(false || []); // []
console.log(false || {}); // {}
console.log(true || []); // true
console.log([] || true); // []
console.log({} || true); // {}
console.log(true || {}); // true
console.log([] || {}); // []