// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        reject(1);
//     },2000)
//  });
//  let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        reject(2);
//     },1000)
//  });
//  let p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        reject(3);
//     },3000)
//  });

//  Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res)
//  }).catch((res)=>{
//     console.log(res)
//  });
//  //2

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(5);
//     console.log(2);
//     reject(6);
// });

// promise.then((res) => {
//     console.log(3);
//     console.log(res);
// }).catch((res) => { //不会执行
//     console.log(res);
// });

// console.log(4);



    // Promise.resolve("foo")
    // // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
    // .then(function(string) {
    //   return new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //       string += 'bar';
    //       resolve(string);
    //     }, 1);
    //   });
    // })
    // // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
    // // 并将其打印到控制台中，但是不将处理后的字符串返回到下一个。
    // .then(function(string) {
    //   setTimeout(function() {
    //     string += 'baz';
    //     console.log(string);
    //   }, 1)
    //   return string;
    // })
    // // 3. 打印本节中代码将如何运行的帮助消息，
    // // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
    // .then(function(string) {
    //   console.log("Last Then:  oops... didn't bother to instantiate and return " +
    //               "a promise in the prior then so the sequence may be a bit " +
    //               "surprising");
  
    //   // 注意 `string` 这时不会存在 'baz'。
    //   // 因为这是发生在我们通过 setTimeout 模拟的异步函数中。
    //   console.log(string);
    // });
  
  // Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
  // foobar 
  // foobarbaz
  

  Promise.resolve(1)
    .then(Promise.resolve(2))
    .then(3)
    .then()
    .then(console.log) // 1
    .then(() => { console.log(44) })  // 44
    .then(() => { console.log(33) })  // 33
    .then(() => { console.log(77) })  // 77
// 1

//等价于

let p1 = new Promise((resolve, reject) => {
    console.log(111); // 111
    resolve(1);
});

p1.then(Promise.resolve(2))
    .then(3)
    .then()
    .then( () => { console.log(4) }) // 4
    .then((res) => { console.log(res) })  // undefined
    .then(() => { console.log(55) })    // 55
    .then(() => { console.log(66) })    // 66
