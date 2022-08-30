// //绑定规则
// //call
// 'use strict';
// var obj = {
//     name: "why"
// }

// function foo() {
//     console.log("foo函数:", this)
// }
// foo(); //window
// foo.call(obj);   //foo函数: {name: "why"}
// foo.call(null);   //call实现绑定this

// //call实现绑定this
// function foo() {
//     console.log("foo函数:", this)
// }

// var obj = {
//     name: "why"
// }
// foo.call(obj);   //foo函数: {name: "why"}

// //apply
// function foo() {
//     console.log("foo函数:", this)
// }
// var obj = {
//     name: "why"
// }
// foo.apply(obj);   //foo函数: {name: "why"}
// //数组的apply方法
// var numbers = [5, 6, 2, 3, 7];

// var max = Math.max.apply(null, numbers); // 7

// console.log(max);

// //bind用法
// function foo(name) {
//     console.log("foo函数:", this);
//     console.log("打印参数列表",name);
//     console.log(arguments); //
// }
// var obj = {
//     name: "why"
// }
//  foo.bind(obj); //不调用函数，返回一个函数
//  foo.call(obj,'1sefrser'); //foo函数: {name: "why"} 打印参数列表 1sefrser
//  //调用bind
//     // var foo1 = foo.bind(obj);
//     // foo1("1sefrser"); //foo函数: {name: "why"}   打印参数列表 1sefrser
//     var foo1 = foo.bind(obj,'1sefrser','2sefrser');
//     foo1(); //foo函数: {name: "why"}  打印参数列表 1sefrser



/*
      1.创建新的空对象
      2.将this指向这个空对象
      3.执行函数体中的代码
      4.没有显示返回非空对象时, 默认返回这个对象
    */
// function foo() {
//     this.name = "why"
//     console.log("foo函数:", this)
// }

// new foo() //foo函数: {name: "why"}

// function foo() {
//     console.log("foo:", this)
//    }
// // 1.1.测试一:apply高于默认绑定
//   var obj = { foo: foo }
//   obj.foo.apply("abc")
//   obj.foo.call("abc")
//   obj.foo;

var obj = {
    name: "obj",
    foo: () => {
        var bar = () => {
            console.log("bar:", this)
        }
        return bar

    }
}
var fn = obj.foo()
fn.apply("bbb")
