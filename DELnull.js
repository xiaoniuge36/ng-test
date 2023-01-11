

// a.forEach((item,index)=>{
//     console.log(item,index);
// }) ;

import { number } from "prop-types";

//删除数组中的null和undefined
// a = a.filter(item=>item!=null);
// console.log(a);
//递归删除数组中的null和undefined
// function removeNull(arr){
//     for(s in arr){
//         if(arr[s]===null||arr[s]===undefined){
//             arr.splice(s,1);
//         }
//         if (arr[s] instanceof Array || arr[s] instanceof Object) {
//             arr[s] = removeNull(arr[s]);
//         }
//     }
//     }
// console.log(removeNull(a));
// let delEmptyQueryNodes = (a) => {
//     a.forEach((key) => {
//       let value = obj[key];
//       value && typeof value === 'object' && delEmptyQueryNodes(value);
//       (value === '' || value === null || value === undefined || value.length === 0 || Object.keys(value).length === 0) && delete obj[key];
//     });
//     return obj;
//   };
//     console.log(delEmptyQueryNodes(a));
//对象
// let obj = {
//     a: {
//       b: {
//         c: '',
//         d: null,
//         e: undefined,
//         f: [],
//         g: {},
//         h: [null, undefined, '', {}, []]
//       }
//     }
//   }
// let s1 = [{a:1,b:2,c:null} ,undefined,null,undefined];
// function removeNull(s1){
//     // console.log(s1);
//     for(s in s1){
//         if(s1[s]===null||s1[s]===undefined || s1[s]==='' || s1[s]===[] || s1[s]==={}){
//             // s1.splice(s,1); 
//             delete s1[s];
//         }
//         if (s1[s] instanceof Array || s1[s] instanceof Object) {
//             s1[s] = removeNull(s1[s]);
//         }
//     }
//     return s1;
//     }
// console.log(removeNull(s1));
// console.log(s1.length);

// splice(index,1); //删除指定位置的元素 index是数组下标
// splice(index,0,value); //添加元素 index是数组下标 value是要添加的元素
// splice(index,1,value); //替换元素 index是数组下标 value是要替换的元素
// splice(index,1); //删除指定位置的元素 index是数组下标
// splice(index,0,value); //添加元素 index是数组下标 value是要添加的元素
// splice(index,1,value); //替换元素 index是数组下标 value是要替换的元素

// let b =[1,2,3,4,5]

// let a ={b:1,s:1}
// for (let i=0; i < a.length; i++){
//     console.log(a[i]);
//     // console.log(1);
// }

// console.log(number);
// number 

// {
//     var a =1;
//     let b =2;
// }
// console.log(a);
// console.log(b);
// let a = "aBcd";
// console.log(a.match(/a/));
// console.log(a.match(/e/));//null
// console.log(a.match(/e/g));//null 
// console.log(a.matchAll(/e/g));//空迭代器
// console.log([...a.matchAll(/e/g)]);//空数组

// let a  = "a Bcd";
// console.log(a.search(/a/));
// console.log(a.search(/e/));//-1
// let a = "a Bcd";
// // console.log(a.length);
// // //正数
// // console.log(a.slice(0,1));
// // console.log(a.slice(0,2));
// // console.log(a.slice(0));
// // //带负
// // console.log(a.slice(0,-1));
// // console.log(a.slice(-1,3));
// // console.log(a.slice(-1));
// // console.log(a.slice(-1,-2));
// // //试错
// console.log(a.slice());
// console.log(a.slice(0,1,2));
// console.log(a.slice(6));
// console.log(a.slice(2,4));

// let a = "a Bcd";
// console.log(a.startsWith("a "));//true
// console.log(a.startsWith("a B"));//true
// console.log(a.startsWith("a bc"));//false

// let a = "a Bcd";
// console.log(a.toLocaleLowerCase());//a bcd
// console.log(a.toLocaleUpperCase());//A BCD
// console.log(a.toLowerCase());//a bcd
// console.log(a);//a bcd

let a = "    a Bcd    ";
let b = a.trim();
console.log(b);//a Bcd
console.log(a.length);//10
console.log(b.length);//5
