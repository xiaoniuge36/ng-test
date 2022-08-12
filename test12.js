//解构赋值
//数组模型的解构
var [a, b, c] = [1, 2, 3];
console.log(a, b, c); //1 2 3
//数组的解构赋值嵌套
var [a, [b, c]] = [1, [2, 3]];
console.log(a, b, c); //1 2 3
//数组的解构赋值忽略元素
var [a, , b] = [1, 2, 3];
console.log(a, b); //1 3
//数组的解构赋值不完全解构
var [a, [b]] = [1, [2, 3]];
console.log(a, b); //1 2
//数组的解构赋值和扩展运算符
var [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c); //1 2 [3,4,5]
//数组的解构赋值字符串
var [a, b, c] = 'hello';
console.log(a, b, c); //h e l l o
//数组的解构赋值和函数参数的解构赋值
var [a, b] = move({ x: 3, y: 1 });
console.log(a, b); //3 1
//对象模型的解构
var { foo, bar } = { foo: 'aaa', bar: 'bbb' };
console.log(foo, bar);  //aaa bbb
//对象的解构赋值可嵌套
var { foo: { bar } } = { foo: { bar: 'baz' } };
console.log(bar); //baz
//对象的结构解析可忽略属性
var { foo, bar, baz = 'default' } = { foo: 'aaa', bar: 'bbb' };
console.log(foo, bar, baz); //aaa bbb default
//对象的结构解析不完全解构
var obj = {p: [{y: 'world'}] };
var {p: [{ y }, x ] } = obj;
console.log(x, y); //world 3
//对象的解构赋值和扩展运算符
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
console.log(a, b, rest); //10 20 {c: 30, d: 40}
//对象的解构赋值和数组的解构赋值区别
//数组的解构赋值是先将数组赋值给一个变量，然后再对该变量解构。
//对象的解构赋值是先将对象赋值给一个变量，然后再对该变量解构。
//对象的解构赋值和数组的解构赋值的用法有些类似，但是数组的解构赋值是为了获取数组的成员，而对象的解构赋值是为了获取对象的属性。
//数组的解构赋值的内部机制，是先找到数组的最后一项，将它的值赋给变量，然后再删除该数组最后一项。
//对象的解构赋值的内部机制，是先找到名称与变量同名的属性，将它的值赋给变量，然后再删除该对象的该属性。
//函数参数的解构赋值
function add([x, y]) {
    return x + y;
}
console.log(add([1, 2])); //3
//函数参数的解构赋值
function move({ x = 0, y = 0 } = {}) {
    return [x, y];
}
console.log(move({ x: 3, y: 8 }));  //[3, 8]
console.log(move({ x: 3 })); //[3, 0]
console.log(move({})); //[0, 0]
console.log(move()); //[0, 0]

//解构赋值的默认值对象
var { foo = 'aaa' } = {}; 
console.log(foo); //aaa
var { foo = 'aaa' } = { foo: 'bbb' };
console.log(foo); //bbb
var { foo = 'aaa' } = {};
console.log(foo); //aaa
var { foo = 'aaa' } = { foo: undefined };
console.log(foo); //aaa 遇到undefined就用默认值
var { foo = 'aaa' } = { foo: null };
console.log(foo); // 遇到null就用null
var { foo = 'aaa' } = { foo: NaN };
console.log(foo); //NaN 遇到NaN就用NaN
var { foo = 'aaa' } = { foo: true };
console.log(foo); //true 遇到true就用true
var { foo = 'aaa' } = { foo: false };
console.log(foo); //false 遇到false就用false
var { foo = 'aaa' } = { foo: 0 };
console.log(foo); //0 遇到0就用0
var { foo = 'aaa' } = { foo: '' };
console.log(foo); //'' 遇到空字符串就用空字符串

//解析赋值的默认值数组
var [a, b = 'bbb'] = [1];
console.log(a, b); //1 bbb
var [a, b = 'bbb'] = [1, 2];
console.log(a, b); //1 2
var [a, b = 'bbb'] = [1, undefined];
console.log(a, b); //1 bbb
var [a, b = 'bbb'] = [1, null];
console.log(a, b); //1 null
var [a, b = 'bbb'] = [1, NaN];
console.log(a, b); //1 NaN

