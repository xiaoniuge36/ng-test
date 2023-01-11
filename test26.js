// // 生成器函数声明
// function* generatorFn() {} 
// // 生成器函数表达式
// let generatorFn = function* () {} 
// // 作为对象字面量方法的生成器函数
// let foo = { 
//  * generatorFn() {} 
// } 
// // 作为类实例方法的生成器函数
// class Foo { 
//  * generatorFn() {} 
// } 
// // 作为类静态方法的生成器函数
// class Bar { 
//  static * generatorFn() {} 
// }


// //标识生成器函数的星号不受两侧空格的影响：

// // 等价的生成器函数： 
// function* generatorFnA() {} 
// function *generatorFnB() {} 
// function * generatorFnC() {} 
// // 等价的生成器方法：
// class Foo { 
//  *generatorFnD() {} 
//  * generatorFnE() {} 
// } 


// let num = 1;
// let obj = {a:1}; //原生对象
// let bol = true;
// let big = 1234567890123456789012345678901234567890n;
// let sym = Symbol('sym');
// let und = undefined;
// let nul = null;
// let fun = function(){};
// console.log(fun[Symbol.iterator]); // undefined
// console.log(num[Symbol.iterator]); // undefined
// console.log(obj[Symbol.iterator]); // undefined
// console.log(bol[Symbol.iterator]); // undefined
// console.log(big[Symbol.iterator]); // undefined
// console.log(sym[Symbol.iterator]); // undefined
// console.log(und[Symbol.iterator]); // Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
// console.log(nul[Symbol.iterator]); // Uncaught TypeError: object null is not iterable (cannot read property Symbol(Symbol.iterator))
// console.log(fun[Symbol.iterator]); // undefined


// // 调用生成器函数会产生一个生成器对象。生成器对象一开始处于暂停执行（suspended）的状态。与
// // 迭代器相似，生成器对象也实现了 Iterator 接口，因此具有 next()方法。调用这个方法会让生成器开始或恢复执行。
// // function* generatorFn() {} 
// // const g = generatorFn(); 
// // console.log(g); // generatorFn {<suspended>} 
// // console.log(g.next); // f next() { [native code] } 


// // next()方法的返回值类似于迭代器，有一个 done 属性和一个 value 属性。函数体为空的生成器
// // 函数中间不会停留，调用一次 next()就会让生成器到达 done: true 状态。
// // function* generatorFn() {} 
// // let generatorObject = generatorFn(); 
// // console.log(generatorObject); // generatorFn {<suspended>} 
// // console.log(generatorObject.next); // f next() { [native code] }
// // console.log(generatorObject.next()); // { done: true, value: undefined } 


// // value 属性是生成器函数的返回值，默认值为 undefined，可以通过生成器函数的返回值指定：
// function* generatorFn() { 
//  return 'foo'; 
// } 
// let generatorObject = generatorFn(); 
// console.log(generatorObject); // generatorFn {<suspended>} 
// console.log(generatorObject.next()); // { done: true, value: 'foo' } 
// // 生成器函数只会在初次调用 next()方法后开始执行，如下所示：
// function* generatorFn1() { 
//  console.log('foobar'); 
// } 
// // 初次调用生成器函数并不会打印日志
// let generatorObject1 = generatorFn1(); 
// generatorObject1.next(); //  foobar
// //浏览器返回
// //{value: undefined, done: true}


// // 生成器对象实现了 Iterable 接口，它们默认的迭代器是自引用的：
// function* generatorFn() {} 
// console.log(generatorFn); 
// // f* generatorFn() {} 
// console.log(generatorFn()[Symbol.iterator]); 
// // f [Symbol.iterator]() {native code} 
// console.log(generatorFn()); 
// // generatorFn {<suspended>} 
// console.log(generatorFn()[Symbol.iterator]()); 
// // generatorFn {<suspended>} 
// const g = generatorFn(); 
// console.log(g === g[Symbol.iterator]()); 
// // true


// //Generator异步 
// function* generatorFn() {
//     console.log('foo');
//     yield;
//     console.log('bar');
// }
// generatorFn();
// // let generatorObject = generatorFn();
// // generatorObject.next(); // foo
// // generatorObject.next(); // bar


// let a = function () {
//     console.log('a');
// }

// let b = a;
// // b();


// function* generatorFn() {
//     yield 'foo';
//     yield 'bar';
//     yield undefined;
//     yield;
//     yield null;
//     return 'baz';
// }
// let generatorObject = generatorFn();
// console.log(generatorObject.next()); // { done: false, value: 'foo' } 
// console.log(generatorObject.next()); // { done: false, value: 'bar' } 
// console.log(generatorObject.next()); // { done: false, value: undefined }
// console.log(generatorObject.next()); // { done: false, value: undefined }
// console.log(generatorObject.next()); // { done: false, value: null }
// console.log(generatorObject.next()); // { done: true, value: 'baz' }
// console.log(undefined === null); // false

// // 有效
// function* validGeneratorFn() {
//     yield;
// }
// // 无效
// function* invalidGeneratorFnA() {
//     function a() {
//         yield;
//     }
// }
// // 无效
// function* invalidGeneratorFnB() {
//     const b = () => {
//         yield;
//     }
// }
// // 无效
// function* invalidGeneratorFnC() {
//     (() => {
//         yield;
//     })();
// }
// //无效
// (function () {
//     yield 1;
// })()
//   // SyntaxError: Unexpected number


//   function* generatorFn() { 
//     return yield 'foo'; 
//    } 
//    let generatorObject = generatorFn(); 
//    console.log(generatorObject.next()); // { done: false, value: 'foo' } 
//    console.log(generatorObject.next('bar')); // { done: true, value: 'bar' }



//    function* nTimes(n) { 
//     for (let i = 0; i < n; ++i) { 
//     yield i; 
//     } 
//    } 
//    for (let x of nTimes(3)) { 
//     console.log(x); 
//    } 
//    // 0 
//    // 1 
//    // 2


//    // 等价的 generatorFn： 
// function* generatorFn() { 
// for (const x of [1, 2, 3]) { 
// yield x; 
// } 
// } 
// // function* generatorFn() { 
// //     yield* [1, 2, 3]; 
// //    } 
// //    let generatorObject = generatorFn(); 
//    for (const x of generatorFn()) { 
//     console.log(x); 
//    } 
//    // 1 
//    // 2 
//    // 3

//    function test(){
//     yield* [1,2,3];
//    }

//    test();




//    function* nTimes(n) { 
//     if (n > 0) { 
//     yield* nTimes(n - 1); 
//     yield n - 1; 
//     } 
//    } 
//    for (const x of nTimes(3)) { 
//     console.log(x); 
//    } 
//    // 0 
//    // 1 
//    // 2

//    const g = function* (x, y) {
//     let result = yield x + y;
//     return result;
//   };
  
//   const gen = g(1, 2);
//   console.log(gen.return(2)); // Object {value: 2, done: true}
//   console.log(gen);//g {<closed>}
//   // 相当于将 let result = yield x + y
//   // 替换成 let result = return 2;


//   const g = function* (x, y) {
//     let result = yield x + y;
//     return result;
//   };
  
//   const gen = g(1, 2);
//   console.log(gen.throw(new Error('报错'))); // Uncaught Error: 报错
//   console.log(gen); // generatorFn {<suspended>} 
//   try { 
//    gen.throw('foo'); 
//   } catch (e) { 
//    console.log(e); // foo 
//   } 
//   console.log(gen); // generatorFn {<closed>}
// // 相当于将 let result = yield x + y
// // 替换成 let result = throw(new Error('出错了'));


function* generatorFn() { 
    for (const x of [1, 2, 3]) { 
        console.log(x);
    // try { 
    // yield x; 
    // } catch(e) {} 
    } 
   } 
   const g = generatorFn(); 
   console.log(g.next()); // { done: false, value: 1} 
// //    g.throw('foo'); 
//    console.log(g.next()); // { done: false, value: 3}