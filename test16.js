// // // // // 'use strict'

// // // // // name = 1
// // // // // console.log(this) // 直接在全局代码里尝试去拿 this

// // // // var name = 'BigBear'

// // // // var me = {
// // // //   name: 'xiuyan',
// // // //   // 声明位置
// // // //   sayHello: function() {
// // // //     console.log(`你好，我是${this.name}`)
// // // //   },
// // // //   hello: function() {
// // // //     // (function(cb) {
// // // //     //   // 调用位置
// // // //     //   cb()
// // // //     // })(this.sayHello)
// // // //     (function(){
// // // //         console.log(`你好，我是${this.name}`)
// // // //     })()
// // // //   }
// // // // }

// // // // me.hello() // 你好，我是BigBear
// // // // me.hello.call({a:1}) //你好，我是BigBear
// // // // me.hello.apply({a:1}) //你好，我是BigBear
// // // // me.hello.bind({a:1})() //你好，我是BigBear
// // // // // me.hello.call({a:1}) // 你好，我是xiuyan

// // // // var name = 'BigBear'

// // // // var me = {
// // // //   name: 'xiuyan',
// // // //   hello: function() {
// // // //     setTimeout(function() {
// // // //       console.log(`你好，我是${this.name}`)
// // // //     })
// // // //   }
// // // // }

// // // // me.hello() // 你好，我是BigBear
// // // // me.hello.call({a:1}) // 你好，我是BigBear
// // // // me.hello.apply({a:1}) // 你好，我是BigBear
// // // // me.hello.bind({a:1})() // 你好，我是BigBear

// // // // // a// 你好，我是12312

// // // // function showThis() {
// // // //     console.log(this)
// // // //   }
  
// // // //   showThis() // window

// // // //   'use strict'
// // // // //没有指定对象返回undefined
// // // // function showThis() {
// // // //   console.log(this)
// // // // }

// // // // showThis() // undefined

// // // // 'use strict'

// // // // var name = 'BigBear'

// // // // var me = {
// // // //   name: 'xiuyan',
// // // //   hello: function() {
// // // //     // 全局作用域下实现的延时函数
// // // //     setInterval(function() {
// // // //       console.log(`你好，我是${this.name}`)
// // // //     })
// // // //   }
// // // // }

// // // // me.hello() // 你好，我是BigBear

// // // // 'use strict'

// // // // var name = 'BigBear'

// // // // var me = {
// // // //   name: 'xiuyan',
// // // //   hello: function() {
// // // //     // 全局作用域下实现的延时函数
// // // //    (function(){
// // // //     console.log(this)
// // // //    })();
// // // //   }
// // // // }

// // // // me.hello() // undefined

// // // // {} -> 对象
// // // // {} -> 代码块
// // // var a = 1
// // // var obj = {
// // //   a: 2,
// // //   func2: () => {
// // //     console.log(this.a)
// // //   },
  
// // //   func3: function() {
// // //     console.log(this.a)
// // //   }
// // // }

// // // // func1
// // // var func1  = () => {
// // //   console.log(this.a)
// // // }

// // // // func2
// // // var func2 = obj.func2
// // // // func3
// // // var func3 = obj.func3

// // // func1() // 1
// // // func2() ///1
// // // func3() //1
// // // obj.func2() // 1
// // // obj.func3() //2 不是箭头函数，是普通函数，所以this指向的是obj 显示调用

// // function flatten(arr) {;
// //   return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b),[]);
// // }

// // const arr = [1, 2, [3, 4, [5, 6]]];
// // console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6]

// console.log(1)

// setTimeout(function() {
//   console.log(2)
// })

// new Promise(function (resolve) {
//   console.log(3)
//   resolve()
//  }).then(function () {
//   console.log(4)
// }).then(function() {
//   console.log(5)
// })

// console.log(6)


// Promise.resolve().then(function() {
//   console.log("promise1")
// }).then(function() {
//   console.log("promise2")
// });

// process.nextTick(() => {
//  console.log('nextTick1')
//  process.nextTick(() => {
//    console.log('nextTick2')
//    process.nextTick(() => {
//      console.log('nextTick3')
//      process.nextTick(() => {
//        console.log('nextTick4')
//      })
//    })
//  })
// })

// const fs = require('fs')
// const path = require('path')
// const filePath = path.join(__dirname,'test.js')

// console.log(2);
// console.log(filePath);
// console.log(1);   

// // -- 异步读取文件
// fs.readFile(filePath,'utf8',function(err,data){
//     setTimeout(function() {
//       console.log('老铁，我是被 setTimeout 派发的')
//     }, 0)

//     setImmediate(function() {
//       console.log('老铁，我是被 setImmediate 派发的')
//     })
// });

// console.log(1);
// Promise.resolve().then(function() {
//   console.log(2)
// });
// new Promise(function(resolve) {
//   //  Promese构造函数立即执行
//   console.log(3)
//   resolve()
// });
// setTimeout(() => {
//   console.log('timeout1');
//   Promise.resolve().then(() => {
//     console.log('promise1'); });
// }, 0);   


// setTimeout(() => {
//   console.log('timeout2');
//   Promise.resolve().then(function() {
//     console.log('promise2');
//   });
// }, 0);

// setTimeout(() => {
//   console.log('timeout3')
// }, 0)





// setTimeout(function() {
//   console.log(2)
// })

// new Promise(function (resolve) {
//   resolve()
//  }).then(function () {
//   console.log(4)
// }).then(function() {
//   console.log(5)
// })

setTimeout(() => {
  console.log('timeout1');
}, 0);   


setTimeout(() => {
  console.log('timeout2');
  Promise.resolve().then(function() {
    console.log('promise1');
  });
}, 0);

setTimeout(() => {
  console.log('timeout3')
}, 0)

//执行script标签中的内容-微任务-setTimeout（里面的微任务）