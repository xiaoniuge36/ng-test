//test8.js
//定义commonjs模块
//拷贝 
function add(x, y) {
    return x + y;
};

function sub(x, y) {
    return x - y;
}


//分别导出
// exports.add = add;
// exports.sub = sub;

//统一导出
module.exports = {
    add,
    sub,
    a:1,
    a1:2,
    a2:2
    // add: add,
    // sub: sub
}