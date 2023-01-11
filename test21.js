//原型 原型链
//创建Dog构造函数
function Dog(name,age){
    this.name = name;
    this.age = age;
}

//创建Dog的原型对象
// Dog.prototype = {
//     constructor:Dog,
//     eat:function(){
//         console.log("吃饭");
//     }
// }
Dog.prototype.eat = function(){
    console.log("吃饭");
}

//创建Dog的实例对象
var dog1 = new Dog("小黑",3);

//测试
console.log(dog1);

console.log(dog1.__proto__ === Dog.prototype); //true
console.log(dog1.constructor === Dog); //true
console.log(Dog.prototype.constructor === Dog); //true
console.log(dog1.eat === Dog.prototype.eat); //true
console.log(dog1.eat.constructor === Dog.prototype.eat.constructor); //true
console.log(dog1.eat()); //吃饭

dog1.eat() // 吃饭
// 输出"[object Object]"
dog1.toString()