// ES6模块导出
function add(x, y) {
    return x + y;
};

function sub(x, y) {
    return x - y;
}


// 默认导出一个
// export default add;

console.log(this); // undefined

//命名导出
//最好声明和导出分开
export { add , sub  } ;
export { add as add1, sub as sub1 };
export const a = 1;
const b = 2;
export { b };
export { a as a1, b as b1 };
export function test() {
    console.log('默认导出函数');
}

//默认导出只能有一个重复的默认导出会导致 SyntaxError。

//默认导出一个
// export default add;
//默认导出多个
const c =2;
export default {
    add,
    sub,
    c
}
// 等同于 export default foo; 
//export { foo as default };
//二者可以同时使用
//常见的错误 先复制再导出不容易出错
// 会导致错误的不同形式：
// 行内默认导出中不能出现变量声明
//export default const foo = 'bar'; 
// 只有标识符可以出现在 export 子句中(要先赋值)
//export { 123 as foo } 
// 别名只能在 export 子句中出现
//export const foo = 'foo' as myFoo;
