function myNew(fn, ...args) {
  // 设置原型链
  let obj = Object.create(fn.prototype);
  // 绑定this
  let res = fn.call(obj, ...args);
  // 返回值判断
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return obj;
}
//   用法如下：
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();

function myNew1(fn, ...arg) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...arg);
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return obj;
}

//手写new
// q: 解释一下new的过程
// a: 1.创建一个空对象
// 2.将空对象的__proto__指向构造函数的prototype
// 3.将空对象作为this传入构造函数
// 4.判断构造函数的返回值类型，如果是对象则返回，如果不是则返回this
function myNew(fn, ...args) {
  let obj = {};
  obj.__proto__ = fn.prototype;
  let res = fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
}