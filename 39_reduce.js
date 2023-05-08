// // // function a(...b){
// import { number } from 'prop-types';
// // //     console.log(b)
// // // }

// // // a(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

// // // curry 函数借助 Function.length 读取函数元数
// // function curry(func, arity=func.length) {
// //     // 定义一个递归式 generateCurried
// //     function generateCurried(prevArgs) {
// //       // generateCurried 函数必定返回一层嵌套
// //       return function curried(nextArg) {
// //         // 统计目前“已记忆”+“未记忆”的参数
// //         const args = [...prevArgs, nextArg]  
// //         // 若 “已记忆”+“未记忆”的参数数量 >= 回调函数元数，则认为已经记忆了所有的参数
// //         if(args.length >= arity) {
// //           // 触碰递归边界，传入所有参数，调用回调函数
// //           return func(...args)
// //         } else {
// //           // 未触碰递归边界，则递归调用 generateCurried 自身，创造新一层的嵌套
// //           return generateCurried(args)
// //         }
// //       }
// //     }
// //     // 调用 generateCurried，起始传参为空数组，表示“目前还没有记住任何参数”
// //     return generateCurried([])
// //   }

// //   function add(a, b) {
// //     return a + b
// //   }

// //   const curriedAdd = curry(add);
// //   console.log(curriedAdd);

// //     console.log(curriedAdd(1)(2));

// const formatNumber = (num) => {
//   return num.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2
//   });
// };

// const number = 123456.789;
// const result = formatNumber(number);
// console.log(result);  // Output: $123,456.79

//
// function formatNumber(number) {
//   return number.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }).slice(1).replace(',', '') + number.toFixed(2).slice(-3);
// }

// console.log(formatNumber(123456.789));
// // Output: 123,456.79

// function toCurrency(num) {
//   return num.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2
//   })
// }

// let number = 123456.789;
// let currency = toCurrency(number).slice(0, -3);
// console.log(currency);
// Output: "123,456.79"

// function toCurrency(num) {
//   return num.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2
//   });
// }

// let number = 123456.789;
// let currency = toCurrency(number).slice(0, -3);
// console.log(currency);
// // Output: "123,456.79"

// function formatNumber(number){

// }

// new Intl.NumberFormat("en", {
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// }).format(1234567.54521);

// //输出：1,234,567.55

// new Intl.NumberFormat("en", {
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// }).format(1234567.1);

//输出：1,234,567.10

//数字转换成千分位显示并保留两位小数结果去除$
function formatNumber(number){
  return new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number).replace('$','');
}

//调用
// formatNumber(1234567.54521);
// //输出：1,234,567.55
console.log(formatNumber(1234567.54521));

console.log(formatNumber(1234567.1));

console.log(formatNumber(1234567));

console.log(formatNumber(.00));


