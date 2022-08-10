// // // function  test(arg){
// // //     console.log(arg);
// // // }

// // // test('hello');

// // // //函数声明方式定义函数 ，函数声明方式定义函数
// // // function test(arg){
// // //     console.log(arg);
// // // }

// // // // 函数表达式定义函数
// // // var test = function(arg){
// // //     console.log(arg);
// // // }

// // // // 箭头函数定义函数
// // // var test = (arg) => {
// // //     console.log(arg);
// // // }
// // // // 构造函数Function定义函数 
// // // //不推荐影响性能 会被解析两次
// // // var test = new Function('arg','console.log(arg)');

// // // //匿名函数定义函数 无函数名称 
// // //  var test = function(arg){
// // //     console.log(arg);
// // // }

// // // //立即执行函数定义函数 跟名称一样立即执行
// // // //第一个参数是函数名称，第二个参数是函数体 
// // // (function(arg){
// // //     console.log(arg);
// // // })('hello');

// // // return 后的代码不会被执行
// // function test(arg){
// //     console.log(arg);
// //     return 'hello';
// //     console.log('world');
// // }

// // test('hello'); //hello

// // // 一个函数可以有多个返回值
// // function test(arg){
// //     if(arg == 'hello'){
// //         return 'hello';
// //     } else {
// //         return 'world';
// //     }
// // }

// // //提前终止函数执行
// // function test(arg){
// //     return ;
// //     console.log(arg);
// // }

// // //一个参数省略参数的括号 省略return 后的代码不会被执行 
// // let test = a =>  a;

// // // 返回值只有一个时，可以省略括号
// // let test = a => a;
// var id = 'GLOBAL';
// var obj = {
//     id: 'OBJ',
//     a: function(){
//         let num =1;
//         let id = 'a';
//       console.log(this.id); 
//       console.log(this);
//     },
//     b: () => {
//       console.log(this.id);
//       console.log(this);
//     }
//   };
//    // 'OBJ'指向的是obj对象 而不是window对象
//   //{id: 'OBJ', a: ƒ, b: ƒ}
// //   obj.a(); 
//  // 'GLOBAL' 指向的是window对象 无法访问obj对象的属性
// //   obj.b();    
// // undefined
// // 因为new会创建一个新的对象 并且将this指向这个新的对象
//   new obj.a()  
// //   new obj.b() 

//   let a = new obj.a();
//   a; // undefined

//   /*
//       1.创建新的空对象
//       2.将this指向这个空对象
//       3.执行函数体中的代码
//       4.没有显示返回非空对象时, 默认返回这个对象
//     */
//       function foo() {
//         // this.name = "why"
//         console.log("foo函数:", this)
//       }

//       new foo()





//       function Car(make, model, year) {
//         let a = 1;
//         this.make = make;
//         this.model = model;
//         this.year = year;
//       }

//       const car1 = new Car("Honda", "Civic", "2000");
//     // let car1 = new Car();

//       console.log(car1); 


//arguments

// function test(arg) {
//     console.log(arguments);
//     //var args = Array.from(arguments);
//     //var args = [...arguments];
//     // var args = [].slice.call(arguments)
//     var args = Array.prototype.slice.call(arguments);
//     console.log(args);
// }

// test(1);

// // Arguments [1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// // [1]