// ES6模块
function add(x, y) {
    return x + y;
};

function sub(x, y) {
    return x - y;
}

//分别导出
// exports.add = add;
// exports.sub = sub;

// export function add(x, y) {
//     return x + y;
// }



// 统一导出
// export { add, sub };
 
// 默认导出多个
export default {
    add,
    sub
}

// 默认导出一个
// export default add;
