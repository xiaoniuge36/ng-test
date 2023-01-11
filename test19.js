// //symbol

// const s1 = Symbol.for('abc');
// const s2 = Symbol.for('abc');

// console.log(s1 === s2); // true
// const key = Symbol.keyFor(s1);
// console.log(key); // abc

// const s3 = Symbol.for('abc');

// console.log(s1 === s3); // true

// Set 去重
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let set = new Set(arr);
// console.log(set); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
// //使用Array.from转成数组


// let item = Array.from(new Set(arr));
// console.log(item); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // ... 扩展运算符 转成数组
// let set1 = [...new Set(arr)];
// console.log(set1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // Set 属性方法

// let myset = new Set(); // 创建一个空Set对象
// console.log(myset); // Set(0) {}

// myset.add(1); // 添加一个元素 1
// myset.add(2); // 添加一个元素 2
// myset.size; // 2
// myset.has(1); // true
// myset.delete(1); // 删除一个元素 1
// myset.clear(); // 清空Set对象
// console.log(myset); // Set(0) {}

// // Set 遍历
// myset.add([1, 2, 3]);

// for (let item of myset) {
//     console.log(item); // [ 1, 2, 3 ]
// }

//幂等性 实现
// var Student = function(name,age){
//     this.name = name;
//     this.age = age;
//   };
//   Student.prototype.delName = function(){
//     var response = this.name ? this.name + "已被删除":"name不存在";
//     this.name = null;
//     return response;
//   }
//   //对内部的影响是一样的，但是返回值可以不同 也就是说幂等性是对外的 对内部的影响是一样的 但是对外的影响是不一样的 
//   var lilei = new Student("lilei",19);
//   console.log(lilei.delName());//lilei已被删除
//   console.log(lilei.delName());//name不存在
//   console.log(lilei.delName());//name不存在

// let weakeset = new WeakSet();

// weakeset.add(1); // TypeError: Invalid value used in weak set

// const pwset = new WeakSet(); // 创建一个空的WeakSet对象

// class Person { // 通过构造函数创建对象
//     constructor() { // 将对象添加到WeakSet对象中
//         pwset.add(this); // this指向当前对象
//     }
//     running() { // 判断当前对象是否在WeakSet对象中
//         if (!pwset.has(this)) { // this指向当前对象
//             throw new TypeError('this is not a Person'); // 抛出错误
//         }
//         console.log('running',this); // this指向当前对象
//     }
// }

// // Map 对象
// let map = new Map();
// map.set('name', '张三');
// map.set('age', 18);
// console.log(map); // Map(3) { 'name' => '张三', 'age' => 18, [Function: set] => [Function: set] }
// console.log(map.get('name')); // 张三
// console.log(map.get('张三'));  // undefined

// let map1 = new Map([
//     ['name', '张三'],
//     ['age', 18]
// ]);
// console.log(map1); // Map(2) { 'name' => '张三', 'age' => 18 }
// console.log(map1.get('name')); // 张三

// let map2 = new Map();
// map2.set('name');
// console.log(map2); // Map(1) { 'name' => undefined }

// // Map 属性方法
// let map = new Map();
// map.set('name', '张三');
// map.set('age', 18);
// console.log(map); // Map(2) { 'name' => '张三', 'age' => 18 }
// console.log(map.size); // 2
// console.log(map.has('name')); // true
// console.log(map.has('张三')); // false
// map.delete('name');
// console.log(map); // Map(1) { 'age' => 18 }
// map.clear();
// console.log(map); // Map(0) {}

// // Map 遍历
// // for of
// let map1 = new Map([
//     ['name', '张三'],
//     ['age', 18]
// ]);
// for (let item of map1) {
//     console.log(item); // [ 'name', '张三' ] [ 'age', 18 ]
// }

// // Map forEach
// map1.forEach((value, key) => {
//     console.log(value, key); // 张三 name 18 age
// });

// // Map 转成数组
// let map2 = new Map([
//     ['name', '张三'],
//     ['age', 18]
// ]);
// let arr = [...map2];

// console.log(arr); // [ [ 'name', '张三' ], [ 'age', 18 ] ]


// // Map 转成对象
// let map3 = new Map([
//     ['name', '张三'],
//     ['age', 18]
// ]);
// let obj = Object.fromEntries(map3);
// console.log(obj); // { name: '张三', age: 18 }

// let weakmap = new WeakMap();

// // weakmap.set(1, 2); // TypeError: Invalid value used as weak map key
// // weakmap.set('name', '张三'); // TypeError: Invalid value used as weak map key
// //weakmap.set({}, 2); // {Object => 2}
// weakmap.set({ a: 1 }, 2);  //{Object => 2}


// // continue 语句
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i); // 0 1 2 3 4 6 7 8 9
// }

// // break 语句
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i); // 0 1 2 3 4
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) continue;
//     console.log(i); // 0 1 2 3 4 6 7 8 9
// }

// function throttle(fn, delay) { // fn是要执行的函数，delay是时间间隔
//     console.log(11);
//     let flag = true; // 设置一个标志，初始值为true
//     return () => { // 返回一个函数
//         console.log(22);
//       if (!flag) return; // 如果标志为false，直接返回
//       flag = false; // 如果标志为true，将标志设置为false
//       timer = setTimeout(() => { // 设置一个定时器
        
//         fn(); // 执行函数
//         flag = true; // 执行完函数后，将标志设置为true
//       }, delay); 
//     };
//   }

function throttle(func, delay) {
    var last = 0;
    return function () {
        var now = Date.now();
        if (now >= delay + last) {
            func.apply(this, arguments);
            last = now;
        } else {
            console.log("距离上次调用的时间差不满足要求哦");
        }
    }
}

  throttle(() => {
    console.log('throttle'); // throttle
    return 1;
  }
    , 1000);

    
//   throttle(() => {
//     console.log('throttle'); // throttle
//   }
//     , 1000);
    
//   throttle(() => {
//     console.log('throttle'); // throttle
//   }
//     , 1000);

