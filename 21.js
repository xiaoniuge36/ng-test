// // // 在代理对象上执行的任何操作实际上都会应用到目标对象。唯一可感知的不同
// // // 就是代码中操作的是代理对象。
// // const target = { 
// //  id: 'target' 
// // }; 
// // const handler = {}; 
// // const proxy = new Proxy(target, handler); 
// // // id 属性会访问同一个值
// // console.log(target.id); // target 
// // console.log(proxy.id); // target 
// // // 给目标属性赋值会反映在两个对象上
// // // 因为两个对象访问的是同一个值
// // target.id = 'foo'; 
// // console.log(target.id); // foo 
// // console.log(proxy.id); // foo 
// // // 给代理属性赋值会反映在两个对象上
// // // 因为这个赋值会转移到目标对象
// // proxy.id = 'bar'; 
// // console.log(target.id); // bar 
// // console.log(proxy.id); // bar 
// // // hasOwnProperty()方法在两个地方
// // // 都会应用到目标对象
// // console.log(target.hasOwnProperty('id')); // true 
// // console.log(proxy.hasOwnProperty('id')); // true 
// // // Proxy.prototype 是 undefined 
// // // 因此不能使用 instanceof 操作符
// // console.log(target instanceof Proxy); // TypeError: Function has non-object prototype 'undefined' in instanceof check 
// // console.log(proxy instanceof Proxy); // TypeError: Function has non-object prototype 'undefined' in instanceof check 
// // // 严格相等可以用来区分代理和目标
// // console.log(target === proxy); // false


// const target = { 
//     foo: 'bar' 
//    }; 
//    const handler = { 
//     // 捕获器在处理程序对象中以方法名为键
//     get() { 
//     return 'handler override'; 
//     },
//     // set(){
//     //     return 'handler override';
//     // }
//    }; 
//    const proxy = new Proxy(target, handler); 
//    console.log(target.foo); // bar 
//    console.log(proxy.foo); // handler override 
//    console.log(target['foo']); // bar 
//    console.log(proxy['foo']); // handler override 
//    console.log(Object.create(target)['foo']); // bar 
//    console.log(Object.create(proxy)['foo']); // handler override

const target = {
    foo: 'bar'
    };

const objProxy = new Proxy(target, {
    // get: function (target, key, receiver) {
    //     console.log(`getting ${key}!`);
    //     return Reflect.get(target, key, receiver);
    // },
    // set: function (target, key, value, receiver) {
    //     console.log(`setting ${key}!`);
    //     return Reflect.set(target, key, value, receiver);
    // },
    // has: function (target, key) {
    //     console.log(`has ${key}!`);
    //     return Reflect.has(target, key);
    // },
    // deleteProperty: function (target, key) {
    //     console.log(`delete ${key}!`);
    //     return Reflect.deleteProperty(target, key);
    // }
    get(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    }
});

console.log(objProxy.foo);

//对象中添加函数 return 函数的返回值
let a = {
    fun(){ //对象中添加函数 
        console.log('fun');
        return 1;
    },
    fun2(){ //对象的方法中添加函数
        console.log('fun2');
    }
}
console.log(a.fun());
console.log(a.fun2());

let b = {
    a:1,
    b:2

}
console.log(b.a);
console.log(b.b);
