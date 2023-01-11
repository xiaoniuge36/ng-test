console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
console.log(null == ''); //false
console.log(null == NaN); //false
console.log(null == undefined); //true
console.log(null == null); //true
console.log(null == false); //false
console.log('' == false); //true 
console.log('' == 0); //true
console.log('' == NaN); //false
console.log('' == undefined); //false
console.log('' == null); //false
console.log(0 == false); //true
console.log(0 == NaN); //false
console.log(0 == undefined); //false
console.log(0 == null); //false
console.log(NaN == undefined); //false



// if(null >= 0){
//     console.log('1');
// }

// if(null == ''){
//     console.log('2');
// }
//到逻辑判断则不一样，为假的始终为假
// console.log(0?123:456);  //456
// console.log("0"?123:123123); //123
// console.log(''?123:456);  //456
// console.log(false?123:456); //456
// console.log(undefined?123:456); //456
// console.log(null?123:456); //456
// console.log(NaN?123:456); //456
// console.log(0.0?123:456); //456
// console.log([]?123:4561); //123
// console.log({}?123:4562); //123