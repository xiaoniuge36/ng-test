//数组扁平化
function flatten(arr) {
  //创建一个空数组
  const result = [];
  //遍历数组
  arr.forEach((item) => {
    //判断是否是数组
    if (Array.isArray(item)) {
      //如果是数组，递归调用
      result.push(...flatten(item));
    } else {
      //如果不是数组，直接添加到result中
      result.push(item);
    }
  });
  return result;
}

//数组扁平化
function flatten1(arr) {
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten1(b) : b), []);
}
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(flatten1(arr)); // [1, 2, 3, 4, 5, 6]

function flatten3(arr) {
  const result = [];
  arr.forEach((item) => {
    if (isArray.Array(item)) {
      result.push(...flatten3(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
