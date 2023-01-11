// // //同步代码
// // let x = 3; 
// // x = x + 4;
// // console.log(x);
// // //异步代码
// // setTimeout(function(){
// //    console.log("Hello World!");
// // }
// // , 1000);

// //promise

// console.log("Start");
// //promise初始状态为pending 改变为其他状态后将不会再改变
// let p = new Promise(function(resolve, reject){
//    //这里会同步执行
//    console.log("Promise");
//    //resolve/reject是异步代码
//    //调用resolve()时，后续的then()方法被调用
//    resolve('success');
//    //调用reject()时，后续的catch()方法被调用
//    console.log("End");
//    reject('error'); //不会被执行
// });
// p.then(function(msg){
//    console.log(msg);
// }).catch(function(err){
//    console.log(err);
// });

// //reject()方法的参数会原封不动地作为catch()方法的参数
// let p1 = new Promise(function(resolve, reject){
//    reject('error');
// }
// );
// p1.catch(function(err){
//    console.log(err);
// });

// // Start
// // Promise
// // End
// // success
// // error

// new Promise((resolve, reject) => {
//    console.log("executor");
// })

// //resolve
// let p2 = new Promise(function(resolve, reject){
//    resolve('success');
// });
// p2.then(function(msg){
//    console.log(msg);
// });

// let p3 = Promise.resolve('success');
// p3.then(function(msg){
//    console.log(msg);
// });

// Promise.resolve('success').then(function(msg){
//    console.log(msg);
// });

//resovle 传入普通值或对象
// new Promise((resolve, reject) => {
//    resolve('normal resolve');
// }).then((msg) => {
//    console.log(msg);
// });

//resolve 传入promise对象
// new Promise((resolve, reject) => {
//    resolve(new Promise((resolve, reject) => {
//       setTimeout(()=>{
//          resolve('promise resolve');
//       },1000);
//       }));
// }).then((msg) => {
//    console.log(msg);
// }).catch((err) => {
//    console.log(err);
// });

// //resolve 传入有then方法的对象
// //状态由then方法决定
// new Promise((resolve, reject) => {
//    resolve({
//       then: function(resolve, reject){
//          // resolve('object resolve');
//          reject('object reject');
//       }
//    });
// }).then((msg) => {
//    console.log(msg);
// }).catch((err)=>{
//    console.log(err);
// })

//then 
//onFulfilled/onRejected是可选参数
//如果不是函数，会被忽略
//如果onFulfilled/onRejected返回一个值，会被传递给下一个then的onFulfilled
//如果onFulfilled/onRejected抛出一个异常，会被传递给下一个then的onRejected
//如果onFulfilled/onRejected返回一个promise对象，会等待这个promise对象的状态改变，再传递给下一个then的onFulfilled/onRejected

// let promise = new Promise((resolve, reject) => {
//    resolve('success');
//    // reject('error');
// });
// promise.then((res)=>{
//    console.log(res);
// }, (err)=>{
//    console.log(err);
// });
// //等价于
// promise.then((res)=>{
//    console.log(res);
// }).catch((err)=>{
//    console.log(err);
// });

//then链式调用
// 用法1
// let promise = new Promise((resolve, reject) => {
//    resolve('success');
// });
// promise.then((res)=>{
//    console.log(res);
//    return 'success1';
// }).then((res)=>{
//    console.log(res);
//    return 'success2';
// }).then((res)=>{
//    console.log(res);
// });
// //success
// //success1
// //success2


// //用法2
// let promise1 = new Promise((resolve, reject) => {
//    resolve('success');
// });
// promise1.then((res)=>{
//    console.log(res);
// }).then((res)=>{
//    console.log(res);
// }).then((res)=>{
//    console.log(res);
// }
// );

//success
//undefined
//undefined

// //用法3
// let promise2 = new Promise((resolve, reject) => {
//    resolve('success');
// });
// promise2.then((res)=>{
//    console.log(res);
//    return new Promise((resolve, reject) => {
//       resolve('success1');
//    });
// }).then((res)=>{
//    console.log(res);
//    return new Promise((resolve, reject) => {
//       resolve('success2');
//    });
// }).then((res)=>{
//    console.log(res);
// });

// //success
// //success1
// //success2

// //用法4
// let promise3 = new Promise((resolve, reject) => {
//    resolve('success');
// });
// promise3.then((res)=>{
//    console.log(res);
//    return new Promise((resolve, reject) => {
//       reject('error');
//    });
// }).then((res)=>{
//    console.log(res);
//    return new Promise((resolve, reject) => {
//       resolve('success2');
//    });
// }).then((res)=>{
//    console.log(res);
// }).catch((err)=>{
//    console.log(err);
// });

// //success
// //error

// //用法5
// let promise4 = new Promise((resolve, reject) => {
//    resolve('success');
// });

// promise4.then((res)=>{
//    console.log("res1:",res)
// });

// promise4.then((res)=>{
//    console.log("res2:",res)
// });



// res1: success
// res2: success

//reject
// Promise.reject("why");
//等价于
// let p1 = new Promise((resolve, reject) => {
//    reject("why");
// });
// p1.catch((err) => {
//    console.log(err);
// });

// let p2 = Promise.reject("why");
// p2.catch((err) => {
//    console.log(err);
// });

// Promise.reject("why").catch((err) => {
//    console.log(err);
// });

//返回值是一个promise对象 类似一个空包装 幂等
// let p1 = Promise.resolve("success");
// console.log(p1);//Promise {<fulfilled>: 'success'}
// console.log(Promise.resolve(p1)); //Promise {<fulfilled>: 'success'}
// console.log(Promise.resolve(p1) === p1); //true

// //返回值是一个带理由的promise对象 非幂等
// let p2 = Promise.reject("error");
// console.log(p2);//Promise {<rejected>: 'error'}
// console.log(Promise.reject(p2)); //PPromise {<rejected>: Promise}
// console.log(Promise.reject(p2) === p2); //false

// let p1 =  Promise.reject("error");
// //以下两种写法等价
// p1.catch((err) => {
//    console.log(err);
// });
// p1.then(undefined,(err)=>{
//    console.log(err);
// })

//也可以用这种写法
// let p = Promise.reject(); 
// let onRejected = function(e) { 
//  setTimeout(console.log, 0, 'rejected'); 
// }; 
// // 这两种添加拒绝处理程序的方式是一样的：
// p.then(null, onRejected); // rejected 
// p.catch(onRejected); // rejected

// let p1 = new Promise(() => {}); 
// let p2 = p1.catch(); 
// setTimeout(console.log, 0, p1); // Promise <pending> 
// setTimeout(console.log, 0, p2); // Promise <pending> 
// setTimeout(console.log, 0, p1 === p2); // false


//promis.all

// let p1 = new Promise((resolve, reject) => {
//    resolve("success1");
// });
// let p2 = new Promise((resolve, reject) => {
//    resolve("success2");
// });
// let p3 = new Promise((resolve, reject) => {
//    resolve("success3");
// });

// Promise.all([p1, p2, p3]).then((res) => {
//    console.log(res);
// }).catch((err) => {
//    console.log(err);
// });

//[ 'success1', 'success2', 'success3' ]

// new Promise(() => {}) 表达待定状态的promise对象
// //resolve状态
// let p1 = new Promise((resolve, reject) => {
//    resolve("success1");
// });
// let p2 = new Promise((resolve, reject) => {
//    resolve("success2");
// });
// let p3 = new Promise((resolve, reject) => {
//    resolve("success3");
// });
// //padding状态
// let p4 = new Promise(() => {});
// //reject状态
// let p5 = new Promise((resolve, reject) => {
//    reject("error");
// });

// Promise.allSettled([p1, p2, p3,p4,p5]).then((res) => {
//    console.log(res);
// }).catch((err) => {
//    console.log(err);
// });

// (4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {status: 'fulfilled', value: 'success1'}
// 1
// : 
// {status: 'fulfilled', value: 'success2'}
// 2
// : 
// {status: 'fulfilled', value: 'success3'}
// 3
// : 
// {status: 'rejected', reason: 'error'}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)


// let p1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       reject(1);
//    },2000)
// });
// let p2 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve(2);
//    },1000)
// });
// let p3 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve(3);
//    },3000)
// });

// Promise.race([p1,p2,p3]).then((res)=>{
//    console.log(res)
// }).catch((res)=>{
//    console.log(res)
// });
// //2


// let p1 = new Promise((resolve,reject)=>{
//     // resolve("success");
//     reject("false");
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("finally");
// });


// Promise.resolve(2).then(() => {}, () => {});
// //Promise {<fulfilled>: undefined} 返回值（浏览器）

// Promise.resolve(2).finally(() => {});
// //Promise {<fulfilled>: 2}
