//模板字符串

var name = 'css'   
var career = 'coder' 
var hobby = ['coding', 'writing']
var finalString = `my name is ${name}, I work as a ${career} I love ${hobby[0]} and ${hobby[1]}`

console.log(finalString)

//模板字符串

console.log(`Hello, ${ `World` }!`); // Hello, World! 
//将表达式转换为字符串时会调用 toString()：
let foo = { toString: () => 'World' }; 
console.log(`Hello, ${ foo }!`); // Hello, World! 
//在插值表达式中可以调用函数和方法：
function capitalize(word) { 
 return `${ word[0].toUpperCase() }${ word.slice(1) }`; 
} 
console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`); // Hello, World! 、

//重复调用模板也可以插入自己之前的值：
let value = ''; //全局变量不在顶层window对象上，所以不能使用window.value
function append() { 
 value = `${value}abc` 
 console.log(value); 
} 
append(); // abc 
append(); // abcabc 
append(); // abcabcabc


let a = 6; 
let b = 9; 
function simpleTag(strings, aValExpression, bValExpression, sumExpression) { 
 console.log(strings); //
 console.log(aValExpression); 
 console.log(bValExpression); 
 console.log(sumExpression); 
 return 'foobar'; 
} 
simpleTag`${a}`; // 6 + 9 = 15
let untaggedResult = `${ a } + ${ b } = ${ a + b }`; 
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`; 
// ["", " + ", " = ", ""] 
// 6 
// 9 
// 15 
console.log(untaggedResult); // "6 + 9 = 15" 
console.log(taggedResult); // "foobar"

