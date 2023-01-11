// var A = function() {}; // 创建一个构造函数A
// A.prototype.n = 1; // 给A的原型添加一个属性n
// var b = new A(); // new一个A的实例b 这里执行了new A()的时候，会执行A.prototype = {n:1}，所以b.__proto__ = A.prototype
// // new 操作符做了这些事情：
// // 1.创建一个新对象
// // 2.执行构造函数中的代码（为这个新对象添加属性） 将新对象的 _ proto_ 这个属性指向对应构造函数的 prototype 属性，把实例和原型对象关联起来
// // 3.将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
// // 4.执行函数体内的逻辑，最后即便你没有手动 return，构造函数也会帮你把创建的这个新对象 return 出来
// // 第二步执行玩的时候实例对象的原型就把构造函数的 prototype 的引用给存下来了
// //执行完以上操作过后 再对A的原型添加一个属性n2 相当于是一个赋值操作，不会再对b有影响
// A.prototype = {
//   n: 2,
//   m: 3
// }
// var c = new A(); // new一个A的实例c

// console.log(b.n); // 1
// console.log(b.m); // undefined

// console.log(c.n); // 2
// console.log(c.m);  // 3

// console.log(b.__proto__ ); //{n: 1, constructor: ƒ}
// console.log(c.__proto__ ); //{n: 2, m: 3, constructor: ƒ}
// console.log(A.prototype); //{n: 2, m: 3, constructor: ƒ}

// function A() { // 创建一个构造函数A
//     this.name = 'a'
//     this.color = ['green', 'yellow']
//  }
//  function B() { // 创建一个构造函数B
//  }
//  // B.prototype = new A(); B的原型指向A的实例 加入中间人b
//  B.prototype = new A() // B的原型指向A的实例
//  var b1 = new B() // new一个B的实例b1
//  var b2 = new B() // new一个B的实例b2
 
//  //赋值操作
//  b1.name = 'change' // 给b1的name属性赋值
//  //没有改变对象的引用，只是改变了对象的值 它走的就是 原型链 查询 + 修改 的流程，而非原地创建新属性的流程。
//  b1.color.push('black') // 给b1的color属性添加一个元素 'black' 

//  //赋值操作，不会再对b2有影响
//  //b1.color = ['red', 'blue'] // 给b1的color属性赋值

// console.log(b2.name) // 'a'
// console.log(b2.color) // ["green", "yellow", "black"]


// function A() {} // 创建一个构造函数A
// function B(a) { // 创建一个构造函数B
//     this.a = a; // 给B的实例添加一个属性a
// }
// function C(a) { // 创建一个构造函数C
//     if (a) { // 如果a存在
//         this.a = a; // 给C的实例添加一个属性a
//     }
// }
// A.prototype.a = 1; // 给A的原型添加一个属性a
// B.prototype.a = 1; // 给B的原型添加一个属性a
// B.prototype.b = 2; // 给B的原型添加一个属性b
// C.prototype.a = 1; // 给C的原型添加一个属性a

// console.log(new A()); // A {}
// console.log(new B()); // B {a: undefined}
// console.log(new C()); // C {}

// console.log(new A().a); // 1  
// console.log(new B().a); // undefined 
// console.log(new B().b); // 2
// console.log(new C(2).a); // 2




/** 
* 构造函数可以是函数表达式
* 也可以是函数声明，因此以下两种形式都可以：
* function Person() {} 
* let Person = function() {} 
*/ 
function Person() {} 
/** 
* 声明之后，构造函数就有了一个
* 与之关联的原型对象：
*/ 
console.log(typeof Person.prototype); 
console.log(Person.prototype); 
// { 
// constructor: f Person(), 
// __proto__: Object 
// } 
/** 
* 如前所述，构造函数有一个 prototype 属性
* 引用其原型对象，而这个原型对象也有一个
* constructor 属性，引用这个构造函数
* 换句话说，两者循环引用：
*/ 
console.log(Person.prototype.constructor === Person); // true 
/** 
* 正常的原型链都会终止于 Object 的原型对象
* Object 原型的原型是 null 
*/ 
console.log(Person.prototype.__proto__ === Object.prototype); // true 
console.log(Person.prototype.__proto__.constructor === Object); // true 
console.log(Person.prototype.__proto__.__proto__ === null); // true 
console.log(Person.prototype.__proto__); 
// { 
// constructor: f Object(), 
// toString: ... 
// hasOwnProperty: ... 
// isPrototypeOf: ... 
// ... 
// } 
let person1 = new Person(), 
person2 = new Person(); 
/** 
* 构造函数、原型对象和实例
* 是 3 个完全不同的对象：
*/ 
console.log(person1 !== Person); // true 
console.log(person1 !== Person.prototype); // true 
console.log(Person.prototype !== Person); // true 
/** 
* 实例通过__proto__链接到原型对象，
* 它实际上指向隐藏特性[[Prototype]] 
* 
* 构造函数通过 prototype 属性链接到原型对象
* 
* 实例与构造函数没有直接联系，与原型对象有直接联系
*/ 
console.log(person1.__proto__ === Person.prototype); // true 
conosle.log(person1.__proto__.constructor === Person); // true 
/** 
* 同一个构造函数创建的两个实例
* 共享同一个原型对象：
*/ 
console.log(person1.__proto__ === person2.__proto__); // true 
/** 
* instanceof 检查实例的原型链中
8.2 创建对象 227 
8 
* 是否包含指定构造函数的原型：
*/ 
console.log(person1 instanceof Person); // true 
console.log(person1 instanceof Object); // true 
console.log(Person.prototype instanceof Object); // true

function Foo(){
    
}

let f1 = new Foo();
let o1 = new Object();

