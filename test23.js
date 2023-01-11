function Foo() {

}

let f1 = new Foo();
let o1 = new Object();
// f1 Foo Foo.prototype 之间的三角关系
console.log(f1 instanceof Foo); // true 原型链上可以找到 f1的原型
console.log(typeof Foo); // function
console.log(typeof Foo.prototype); // object
console.log(f1.__proto__ === Foo.prototype); // true
console.log(f1.constructor = Foo); // true f1的构造函数是Foo
console.log(f1.__proto__.constructor === Foo); // true
console.log(Foo === Foo.prototype.constructor); // true
console.log(Foo.prototype.__proto__ === f1.__proto__.__proto__); // true


// f1 Foo Foo.prototype object 之间关系 原型链的终端的是null
console.log(f1 instanceof Object); // true
console.log(Foo.prototype instanceof Object); // true
console.log(f1.__proto__.__proto__ === Object.prototype); // true
console.log(f1.__proto__.__proto__.__proto__ === null); // true
console.log(Foo.prototype.__proto__ === Object.prototype); // true
console.log(Foo.prototype.__proto__.constructor === Object); // true
console.log(Object.prototype.constructor === Object); // true
console.log(Foo.prototype.__proto__.__proto__ === null); // true
console.log(Object.prototype.__proto__ === null); // true

// f1 Foo Foo.prototype Function 之间关系
// Foo 构造函数由Function构造
console.log(Foo.__proto__ === Function.prototype); // true
console.log(Foo.prototype.__proto__ === Object.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
//因为前面两者推出这个关系
console.log(Foo.prototype.__proto__ === Function.prototype.__proto__); // true
//又 Foo.prototype === f1.__proto__ 
console.log(f1.__proto__.__proto__ === Function.prototype.__proto__); // true
console.log(f1.__proto__.constructor.__proto__ === Function.prototype); // true

// o1 Object Object.prototype 之间关系
//从o1出发
console.log(o1 instanceof Object); // true
console.log(o1.constructor === Object); //true  o1 的构造函数是Object
console.log (o1.constructor === o1.__proto__.constructor); // true
console.log(o1.__proto__ === Object.prototype); // true
console.log(o1.__proto__.constructor === Object); // true
console.log(o1.__proto__.__proto__ === null); // true
//从构造器的角度说Object是由Function构造的
console.log(o1.__proto__.constructor.__proto__ === Function.prototype); // true 
console.log(o1.__proto__.constructor.__proto__.__proto__ === Object.prototype); // true
console.log(o1.__proto__.constructor.__proto__.constructor === Function); // true
console.log(o1.__proto__.constructor.__proto__.__proto__.__proto__ === null); // true
//从Object出发 从构造器的角度说Object是由Function构造的
console.log(Object.__proto__ === Function.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
console.log(Object.__proto__.constructor === Function); // true
console.log(Object.prototype.constructor === Object); // true
console.log(Object.prototype.constructor.__proto__ === Function.prototype); // true
console.log(Object.prototype.constructor.__proto__.constructor === Function); // true
console.log(Object.prototype.constructor.__proto__.__proto__ === Object.prototype); // true
console.log(Object.prototype.constructor.__proto__.__proto__.__proto__ === null); // true

// Function Function.prototype 之间关系
// Function是由Function构造的 Function = new Function(); 所以其自身__proto__指向Function.prototype
console.log(Function.__proto__ === Function.prototype); // true
console.log(Function === Function.prototype.constructor) // true
console.log(Function.prototype.constructor.__proto__ === Function.prototype); // true
console.log(Function.prototype.constructor.prototype === Function.prototype); // true
console.log(Function.prototype.constructor.__proto__.constructor === Function); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Function.__proto__.__proto__ === Object.prototype); // true
console.log(Function.prototype.__proto__.constructor === Object); // true
console.log(Function.prototype.__proto__.__proto__ === null); // true
console.log(Function.__proto__.__proto__.__proto__ === null); // true
console.log(Function.prototype.constructor.__proto__.__proto__ === Object.prototype); // true


console.log(Function instanceof Object) // true
console.log(Object instanceof Function) // true



