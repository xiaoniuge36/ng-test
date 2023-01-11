// // async function foo() {
// //     return 1
// // }

// // function foo() {
// //     Promise.resolve(1);
// // }

// // console.log(2);
// // async function foo1() {
// //     console.log(1);
// //     await setTimeout(() => {
// //         console.log(2);
// //     }, 1000);
// //     console.log(`bar`);
// // }
// // foo1();

// // async function foo() {} 
// // let bar = async function() {}; 
// // let baz = async () => {}; 
// // class Qux { 
// //  async qux() {} 
// // }

// //定义一个函数，返回一个Promise对象
// // function timeout(ms) {
// //     return new Promise((resolve) => {
// //         setTimeout(resolve, ms); //定时任务
// //     });
// // }
// // //异步函数
// // async function asyncPrint(value, ms) {
// //     await timeout(ms);
// //     console.log(value);
// // }

// // asyncPrint('hello world', 1000);



// // let p = new Promise((resolve, reject) => {
// //     resolve(setTimeout(() => {
// //         console.log(1);
// //     }, 1000));
// // });
// // p.then((res) => {
// //     console.log(res);
// // });

// // async function foo(value, ms) {
// //     // await setTimeout(() => {
// //     //     console.log(1);
// //     // }, ms);
// //     await console.log(111);
// //     console.log(value);
// // }

// // // foo("hello world", 0);
// // // console.log(2);

// // //等价的promise写法
// // function timeout(ms) {
// //    Promise.resolve(setTimeout(() => {
// //         console.log(1);
// //     }, ms));
// //     console.log(2);
// // }
// // timeout(1000);

// // function a(){
// //     Promise.resolve(1);
// // }
// // a();

// // async function foo() {
// //     // await console.log(1);
// //     console.log(2);
// // }
// // foo();
// // console.log(11);


// async function foo() {
//     await console.log(1);
//     console.log(2);
// }

// // console.log(11);
// // foo();
// // console.log(22);

// //等价的promise写法
// async function foo1() {
//     await Promise.resolve(console.log(1));
//     console.log(2);
// }

// // console.log(11);
// // foo1();
// // console.log(22);








// console.log("Start");
// //promise初始状态为pending 改变为其他状态后将不会再改变
// let p = new Promise(function (resolve, reject) {
//     //这里会同步执行
//     // reject("error");
//     resolve(console.log("test start")); //同步执行 相当于console.log("test start"); 状态改变为fulfilled
//     console.log("Promise");
//     //resolve/reject是异步代码
//     //调用resolve()时，后续的then()方法被调用
//     resolve('success');
//     //调用reject()时，后续的catch()方法被调用
//     console.log("End");
//     reject('error'); //不会被执行
// });
// p.then(function (msg) {
//     console.log(msg);
// }).catch(function (err) {
//     console.log(err);
// });

// //reject()方法的参数会原封不动地作为catch()方法的参数
// let p1 = new Promise(function (resolve, reject) {
//     reject('error');
// }
// );
// p1.catch(function (err) {
//     console.log(err);
// });
// console.log(p); //Promise {<rejected>: 'error'}

// // Start
// // Promise
// // End
// // success
// // error


// //promise 改变为rejected状态
// // let p2 = new Promise(function (resolve, reject) {
// //     reject('error');
// // });
// // p2.catch(function (err) {
// //     console.log(err);
// // });
// // console.log(p2);

// //promise 改变为fulfilled状态
// // let p3 = new Promise(function (resolve, reject) {

// //下面两个代码是等价的
// // let a = new Promise((resolve, reject) => {
// //     reject(console.log(1));  //相当先执行console.log(1) 后执行resolve()
// // });
// // console.log(2);
// // console.log(a);


// // let a1 = new Promise((resolve, reject) => {
// //     console.log(1);
// //     reject();
// // });
// // console.log(2);
// // console.log(a1);


// async function func1() {
//     return 1
// }
// console.log(func1())

// // func1的运行结果其实就是一个Promise对象。因此也可以使用then来处理后续逻辑。

// func1().then(res => {
//     console.log(res);  // 30
// })

async function foo() { 
    console.log(2); 
    console.log(await Promise.resolve(9)); 
    await console.log(5); //相当于 console.log(5); await null(相当于 await Promise.resolve(null));
    console.log(6);
    await setTimeout(() => { console.log(7); }, 1000); //相当于 setTimeout(() => { console.log(7); }, 1000); await null(相当于 await Promise.resolve(null));
    console.log(4); 
    console.log(await Promise.resolve(8)); 
   } 
   console.log(1); 
   foo(); 
   console.log(3); 
   // 1 2 3  9 5 6  4 8 7


   async function foo() { 
    console.log(2); 
    console.log(await Promise.resolve(8)); 
    console.log(9); 
   } 
   async function bar() { 
    console.log(4); 
    console.log(await 6); 
    console.log(7); 
   } 
   console.log(1); 
   foo(); 
   console.log(3); 
   bar(); 
   console.log(5);


   let p = new Promise((resolve, reject) => {
    resolve(setTimeout(() => {
        console.log(1);
    }, 1000));
    console.log(2);
});
p.then((res) => {
    console.log(res);
    console.log(3);
});
console.log(4);

// 不允许：await 出现在了箭头函数中
// function foo() { 
//     const syncFn = () => { 
//     await Promise.resolve('foo'); 
//     }; 
//     console.log(syncFn()); 
//    } 