const flat = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const tree = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
        children: [],
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "部门5",
                pid: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

// 将树形结构列表转换为扁平列表
const treeToFlat = (data) => {
  const result = [];
  const queue = [...data];
  // 遍历
  while (queue.length) {
    // 从数组头部取出数据
    const node = queue.shift();
    const children = node.children;
    // 如果有 children， 继续添加到 queue 中
    if (children) {
      queue.push(...children);
    }
    // 删除 children 属性
    delete node.children;
    // 将处理好的节点添加到 result 中
    result.push(node);
  }
  return result;
};

console.log(treeToFlat(tree));
