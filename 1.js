// let a = "a bcd"
// let b = a.indexOf('b');
// let c = a.indexOf('b', 1);
// let d = a.indexOf('b', 5);
// let e = a.indexOf('b', -1);
// let f = a.indexOf();
// let g ='undefinde'.indexOf();
// let h = a.indexOf('d', 8);
// let i = a.indexOf('a', 0);
// let j = a.indexOf('d', 4);

// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// // 2
// // 2
// //-1
// // 2
// // -1
// // -1
// // -1
// // 0
// // 4

// let a = "a bcd";
// let b = " bcd";
// let c = "bcd";
// console.log(a.localeCompare("a"));
// console.log(a.localeCompare("b"));
// console.log(a.localeCompare("a bcd"));
// console.log(b.localeCompare("a"));
// console.log(b.localeCompare("b"));
// console.log(b.localeCompare(" bcd"));
// console.log(c.localeCompare("a"));
// console.log(c.localeCompare("b"));
// console.log(c.localeCompare("bcd"));
// console.log("b".localeCompare("a"));
// console.log("b".localeCompare("b"));
// console.log("b".localeCompare("c"));
// console.log("b".localeCompare("a bcd"));
// console.log("b".localeCompare(" bcd"));
// console.log("b".localeCompare("bcd"));
// console.log("b".localeCompare("accd"));
// console.log("a".localeCompare(""));

// let a = "aBcd";
// console.log(...a.match(/A-Z/g));
// console.log(a.matchAll(/A-Z/));

//matchAll实例
// let a = "aBcd";
// console.log(a.matchAll(/A-Z/g));
// console.log(a.matchAll(/A-Z/));

// let a = "aBcd";
// console.log(...a.matchAll(/A-Z/g));
// console.log(...a.matchAll(/A-Z/));


// let str = 'test1test2';

// // console.log([...str.matchAll(/t/g)][0]);
// // console.log([...str.matchAll(/t/g)][1]);
// console.log( ...str.matchAll(/t/g));
// console.log( [...str.matchAll(/t/)]);

// let a = "aBcd";

// console.log(a.padEnd(10));
// console.log(a.padEnd(10).length);
// console.log(a.padEnd(10, "foo"));
// console.log(a.padEnd(6, "123456"));
// console.log(a.padEnd(1));

// console.log(a.padStart(10));//aBcd 后面填充空格
// console.log(a.padStart(10).length);//10  
// console.log(a.padStart(10, "foo"));//aBcdfoofoo
// console.log(a.padStart(6, "123456"));//  cd12
// console.log(a.padStart(1));//  aBcd
// let a = "aBcd";

// console.log(a.raw());
// let a="aBcd"

// let str2=a.repeat(2)
//  console.log(a.repeat(2));
// console.log(str2) //qweqwe

// String.raw`Hi\n${2+3}!`;
// // "Hi\\n5!"
// String.raw`Hi\u000A!`;
// // 'Hi\\u

// // raw方法
// String.raw`Hi\n${2+3}!`;
// // 'Hi\\n5!'，Hi 后面的字符不是换行符，\ 和 n 是两个不同的字符

// String.raw `Hi\u000A!`;
// // "Hi\\u000A!"，同上，这里得到的会是 \、u、0、0、0、A 6 个字符，
// // 任何类型的转义形式都会失效，保留原样输出，不信你试试.length

// let name = "Bob";
// String.raw `Hi\n${name}!`;
// // "Hi\\nBob!"，内插表达式还可以正常运行

// // 正常情况下，你也许不需要将 String.raw() 当作函数调用。
// // 但是为了模拟 `t${0}e${1}s${2}t` 你可以这样做：
// String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
// // 注意这个测试，传入一个 string，和一个类似数组的对象
// // 下面这个函数和 `foo${2 + 3}bar${'Java' + 'Script'}baz` 是相等的。
// String.raw({
//   raw: ['foo', 'bar', 'baz']
// }, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'

// let a = "abc";
// let b =  new String("abcd");
// let c = 2
// console.log(a.toString());
// console.log(b.toString());
// console.log(true.toString());
// console.log(c.toString());

// let myString = "Hello World. How are you doing?";
// console.log( myString.split(" ", 3));
// console.log( myString.split(" ", 3).join(" "));
// console.log( myString.split(" "));
// console.log( myString.split(" ").join(" "));

let a = "abcdaabd";
console.log(a.replaceAll(/a/g, 'ff'));
console.log(a.replaceAll('a', 'ff'));
console.log(a.replaceAll(/a/, 'ff'));