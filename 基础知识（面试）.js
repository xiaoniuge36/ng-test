/* 生成数组生成一个0-99的数组 */
// 方案1
const createArr = (n) => Array.from(new Array(n), (v, i) => i);
const arr = createArr(100);
console.log(arr);

// 方案2
const createArr2 = (n) => Array(n).fill(0).map((v, i) => i);
const arr2 = createArr2(100);
console.log(arr2);

/* 打乱数组 */
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
const arr3 = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); //随机打乱数组
console.log(arr3);

// 数组排序
let a = [10, 2, 3, 4, 5, 6, 7, 8, 9];

a.sort((a, b) => a - b); // 升序
console.log(a);
// a-b 升序
// b-a 降序

/* 数组去重 */
const removeDuplicates = List => [...new Set(List)];
const List = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 1];
console.log(removeDuplicates(List));

/* 多重数组交集 */
const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
};

const a1 = [1, 2, 3, 4, 5];
const b1 = [2, 3];
console.log(intersection(a1, b1));

/* 查找最大值索引 */
const indexOfMax = (arr) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
indexOfMax([1, 3, 9, 7, 5]); // 2

/* 查找最小值索引 */
const indexOfMin = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
indexOfMin([1, 3, 9, 7, 5]); // 0

/* 找到最接近的数值 */

const findNearest = (arr, num) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return Math.abs(num - min) < Math.abs(num - max) ? min : max;
};

/* 压缩多个数组 */
const zip = (...arrays) => {
    const maxLength = Math.max(...arrays.map(x => x.length));
    return Array.from({ length: maxLength }).map((_, i) => {
        return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    });
};

console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));

/* 矩阵交换行和列 */
const transposeMatrix = (arr) => arr[0].map((col, i) => arr.map(row => row[i]));
console.log(transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]));
    // [1, 4, 7], [2, 5, 8], [3, 6, 9]
