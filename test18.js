// // var arr = [1, 2, 3, 4, 5];
// // // slice 操作不会改变原数组是纯函数
// // var slicetest = arr.slice(0, 3);
// // console.log(slicetest);
// // console.log(arr);

// // //splice 操作会改变原数组该方法不是纯函数

// // //splice(start, deleteCount, item1, item2, ...)
// // var splicetest = arr.splice(2, 1);
// // console.log(arr);
// // console.log(splicetest);

// // //同步

// // var Text =  function (){
// //     console.log(`text`);
// // }

// // //异步
// // var Text2 =  function (){
// //     setTimeout(() => {
// //         console.log(`text2`);
// //     }, 1000);
// // }


// //赋值  传递的是引用
// //对于对象来说，赋值操作是传递的引用，对于基本类型来说，赋值操作是传递的值
// var a = 1;
// var b = a;
// b = 2;
// console.log(a); //1
// console.log(b); // 2


// //首先在栈开辟一个空间a存放指针地址，设指针地址为address1；同时会在堆里面开辟一个空间放置对象数据 2 
// var a = {
//     no: 1,
//     per: {
//      name: "jack"
//     },
//     per2: {
//      name: "rose"
//     }
//    }
   
//    //a赋值给b,此时b会在栈开辟一个空间b，用来放置address1，这个指针指向a所在堆的对象数据
//    var b = a;
   
//    //修改赋值后的值b，其实就是修改b的指针address1所指向的对象数据
//    b.no = 1314;
   
//    //修改b会影响原数据（所有层次的数据都会影响）
//    //这个原数据其实不是原数据，因为a和b其实都是同一个数据
//    //就像从中国去美国，可以从a地点（比如北京）或者b地点（比如上海）坐飞机去，但是到达的都是同一个地方（也就是对象数据）
//    b.per.name = "王五";
   
//    console.log(a, b)


// //引用类型
// var a = {name: 'a' , city :{ name: 'beijing' } };
// //a赋值给b,此时b会在栈开辟一个空间b，用来放置指针地址，这个指针指向a所在堆的对象数据
// var b = a;
//  //修改赋值后的值b，其实就是修改b的指针指针地址所指向的对象数据
// b.name = 'b';
// //修改b会影响原数据（所有层次的数据都会影响）
// //这个原数据其实不是原数据，因为a和b其实都是同一个数据
// //就像从中国去美国，可以从a地点（比如北京）或者b地点（比如上海）坐飞机去，但是到达的都是同一个地方（也就是对象数据）
// b.city.name = 'shanghai';
// console.log(a, b); // {name: "b", city: {name: "shanghai"}} {name: "b", city: {name: "shanghai"}}

// console.log(a === b); //true

//浅拷贝
var a = {name: 'a' , city :{ name: 'beijing' } };
var b = {...a}
// var b = Object.assign({}, a);
b.name = 'b';
b.city.name = 'shanghai';
console.log(a, b); // {name: "a", city: {name: "shanghai"}} {name: "b", city: {name: "shanghai"}}
console.log(a === b); //false

//实现浅拷贝
function shallowCopy(obj) { //判断是否是对象
    if (typeof obj !== 'object') return; //根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {}; //遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) { //排除原型链上的属性
        if (obj.hasOwnProperty(key)) { //判断obj子元素的类型，如果是对象，递归复制
            newObj[key] = obj[key]; //如果不是，就直接赋值
        }
    }
    return newObj; //返回拷贝的对象
}
//浅拷贝缺点
//1.只能拷贝对象的第一层
//2.如果对象的属性值是对象类型，拷贝的是内存地址，修改拷贝后的对象会影响原对象
//3.不能拷贝不可枚举的属性
//4.不能拷贝对象的继承属性和方法
//5.不能拷贝对象的原型属性和方法


//浅拷贝优点
//1.拷贝速度快

//深拷贝优点
//1.可以拷贝任意层级的对象
//2.拷贝后的对象和原对象互不影响
//3.可以拷贝不可枚举的属性
//4.可以拷贝对象的继承属性和方法
//5.可以拷贝对象的原型属性和方法


//json.parse(json.stringify(obj))

//深拷贝
var a = {name: 'a' , city :{ name: 'beijing' } };
// var b = JSON.parse(JSON.stringify(a));
// b.name = 'b';
// b.city.name = 'shanghai';
// console.log(a, b); // {name: "a", city: {name: "beijing"}} {name: "b", city: {name: "shanghai"}}
// console.log(a === b); //false

//实现深拷贝
var a = {name: 'a' , city :{ name: 'beijing' } };
function deepCopy(obj) { //判断是否是对象
    if (typeof obj !== 'object') return; //根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {}; //遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) { //排除原型链上的属性
        if (obj.hasOwnProperty(key)) { //判断obj子元素的类型，如果是对象，递归复制
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]; //如果不是，就直接赋值
        }
    }
    return newObj; //返回拷贝的对象
}

 var b = deepCopy(a);
console.log(b);
b.name = 'b';
b.city.name = 'shanghai';
console.log(a,b); // {name: "a", city: {name: "beijing"}} {name: "b", city: {name: "shanghai"}}
console.log(a === b); //false

//深拷贝的实现原理是递归，如果obj的子元素还是一个对象，就继续递归，直到子元素不是对象为止。
//深拷贝的缺点是会把对象的方法也拷贝过来，如果对象中有方法，可以用浅拷贝来实现。
//深拷贝的缺点
//1.无法拷贝函数
//2.无法拷贝正则
//3.无法拷贝日期
//4.无法拷贝undefined
//5.无法拷贝循环引用的对象

//深拷贝的优点
//1.可以拷贝数组
//2.可以拷贝对象
//3.可以拷贝基本类型

