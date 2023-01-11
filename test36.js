// // //扁平化数据
// // var arr = [1, [2, [3, 4]]];
// // var newArr = arr.flat(Infinity);
// // console.log(newArr); // [1, 2, 3, 4]
// // //扁平化数据并去重
// // var arr = [1, 1, 2, [3, 3]];
// // var newArr = [...new Set(arr.flat(Infinity))]; // 原理：先扁平化，再去重
// // console.log(newArr); // [1, 2, 3]
// // //反扁平化
// // var arr = [1, 2, 3, 4];
// // var newArr = arr.flatMap(x => [x, x * 2]);
// // console.log(newArr); // [1, 2, 2, 4, 3, 6, 4, 8]

// // class
// class Person extends Object {
//     constructor(name, age) {
//         super();
//         this.name = name;
//         this.age = age;
//     }
//     say() {
//         console.log('hello');
//     }
//     async run() {
//         console.log('run');
//     }

// }

// const p = new Person('ng', 18);
// p.run();
// p.say();

function Person(params) {
    let a = params;
    let b = {...params}
    console.log(a);
    console.log(b);
}


Person({a:1, b:'ng', c:18})

numbers.sort(function(a, b) {
    return a - b;
  });
  
