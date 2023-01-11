//用这个方式去创建二维数组
let arr = (new Array(7)).fill([0]);

for (let i = 0; i < arr.length; i++) {
    arr[i] = [];
}
console.log(arr);
arr[0][1] = 1;
console.log(arr);

//用fill方法去创建二维数组 会出现问题
//可以看出在修改值的时候会全部修改，因为fill方法是浅拷贝 创建的是同一个数组（同一引用）
let arr2 = (new Array(7)).fill([0]);
console.log(arr2);
arr2[0][1] = 1;
console.log(arr2);

//二维数组的遍历
for (let i = 0; i < arr.length; i++) {
    //内层访问
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j], i, j);
    }
}

//模拟栈（先进后出）电梯先进后出
let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);

while(stack.length){
    let stacklog = stack[stack.length-1];
    console.log(stacklog);

    //出栈
    stack.pop();
}

console.log(stack);

//模拟队列（先进先出）排队kfc

let queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

while(queue.length){
    let queuelog = queue[0];
    console.log(queuelog);

    //出队列
    queue.shift();
}

console.log(queue);