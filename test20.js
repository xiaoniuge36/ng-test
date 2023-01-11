// // 节流

// function throttle(fn, delay) { // fn是要执行的函数，delay是时间间隔
//     let flag = true; // 设置一个标志，初始值为true
//     return function () { // 返回一个函数
//         if (!flag) return; // 如果标志为false，直接返回
//         flag = false; // 如果标志为true，将标志设置为false
//         timer = setTimeout(() => { // 设置一个定时器
//         fn(); // 执行函数
//         flag = true; // 执行完函数后，将标志设置为true
//         }, delay);
//     }
//     }

// // 调用节流函数
// let a = throttle(() => {
//     console.log('throttle'); // throttle
// }
// , 1000);
// //调用的是 return 里面的函数 不影响/执行let flag = true;
// a();
// a();
// a();

// //节流函数时间戳版
// function throttle(fn, delay) { // fn是要执行的函数，delay是时间间隔
//     let prev = Date.now(); // 设置一个标志，初始值为true
//     return function () { // 返回一个函数
//         let context = this; // 保存this
//         args = arguments; // 保存参数
//         let now = Date.now(); // 获取当前时间
//         if (now - prev >= delay) { // 如果当前时间减去上一次执行的时间大于等于时间间隔，则执行函数
//             fn.apply(context, args); // 执行函数
//             prev = Date.now(); // 更新上一次执行的时间
//         }
//     }
// }

// function foo(){
//     console.log("foo1",this+'11',arguments+"2");
//     return 'foo';
// }

// const fooProxy = new Proxy(foo,{
//     apply: function(target,thisArg,args){
//         console.log("apply侦听");
//         return target.apply(thisArg,args);
//     },
//     construct: function(target,argArray,newTarget){
//         console.log("construct侦听");
//         return new target();
//     }
// });

// console.log(fooProxy(1,2,3));
// // console.log(new fooProxy(1,2,3));

const obj = {
    name: 'obj',
    age:18,
};

const objProxy =  new Proxy(obj,{
    get: function(target,prop){
        console.log("get侦听");
        return Reflect.get(target,prop);
    },
    set: function(target,prop,value){
        console.log("set侦听");
        return Reflect.set(target,prop,value);
    },
    has: function(target,prop){
        console.log("has侦听");
        return Reflect.has(target,prop);
    },
    deleteProperty: function(target,prop){
        console.log("deleteProperty侦听");
        return Reflect.deleteProperty(target,prop);
    }
});

console.log(objProxy.name);
objProxy.name = 'objProxy';
console.log(objProxy.name);
console.log('name' in objProxy);
delete objProxy.name;
console.log(objProxy.name);

const obj1 = {
    name: 'obj',
    age:18,
};

const objProxy = new Proxy(obj1,{
    get: function(target,key){
        console.log("get侦听");
        return key in target 
    },
    set: function(target,key,value){
        console.log("set侦听");
        target[key] = value;
    },
    has: function(target,key){
        console.log("has侦听");
        return key in target;
    },
    deleteProperty: function(target,key){
        console.log("deleteProperty侦听");
        delete target[key];
    }
});

console.log(objProxy.name);
objProxy.name = 'objProxy';
console.log(objProxy.name);
console.log('name' in objProxy);
delete objProxy.name;
console.log(objProxy.name);

const obj2 = {
    name: 'obj',
    age:18,
};

const objProxy = new Proxy(obj2,{
    get: function(target,key,value,receiver){
        console.log("get侦听");
        return Reflect.get(target,key,value,receiver);
    },
    set: function(target,key,value,receiver){
        console.log("set侦听");
        return Reflect.set(target,key,value,receiver);
    },
    has: function(target,key){
        console.log("has侦听");
        return Reflect.has(target,key);
    },
    deleteProperty: function(target,key){
        console.log("deleteProperty侦听");
        return Reflect.deleteProperty(target,key);
    }
});

console.log(objProxy.name);
objProxy.name = 'objProxy';
console.log(objProxy.name);
console.log('name' in objProxy);
delete objProxy.name;
console.log(objProxy.name);


function Student(name,age){
    this.name = name;
    this.age = age;
}

function Animal(){

}

const stu = Reflect.construct(Student,['stu',18],Animal);
console.log(stu instanceof Student); //false
console.log(stu instanceof Animal); //true
console.log(stu.__proto__ === Student.prototype); //false
console.log(stu.__proto__ === Animal.prototype); //true

console.log(stu); //Animal { name: 'stu', age: 18 }
