// // //手写promise
// // function Promise(fn) {
// //     var value = null,
// //         callbacks = []; //callbacks为数组，因为可能同时有很多个回调
// //     this.then = function (onFulfilled) {
// //         callbacks.push(onFulfilled);
// //     };
// //     function resolve(value) {
// //         callbacks.forEach(function (callback) {
// //             callback(value);
// //         });
// //     }
// //     fn(resolve);
// // }

// // //测试代码
// // var promise = new Promise(function (resolve) {
// //     console.log(1);
// //     resolve(2);
// // });

// // promise.then(function (data) {
// //     console.log(data);
// // });

// // console.log(3);

// // //输出结果
// // //1
// // //3
// // //2

// function CutePromise(executor) {
//     // value 记录异步任务成功的执行结果
//     this.value = null;
//     // reason 记录异步任务失败的原因
//     this.reason = null;
//     // status 记录当前状态，初始化是 pending
//     this.status = 'pending';
     
//     // 把 this 存下来，后面会用到
//     var self = this;
  
//     // 定义 resolve 函数
//     function resolve(value) {
//         // 异步任务成功，把结果赋值给 value
//         self.value = value;
//         // 当前状态切换为 resolved
//         self.status = 'resolved'; 
//     }
    
//     // 定义 reject 函数
//     function reject(reason) {
//         // 异步任务失败，把结果赋值给 value
//         self.reason = reason; 
//         // 当前状态切换为 rejected
//         self.status = 'rejected';
//     }
  
//     // 把 resolve 和 reject 能力赋予执行器
//     executor(resolve, reject);
// }

// // then 方法接收两个函数作为入参（可选）
// CutePromise.prototype.then = function(onResolved, onRejected) {
  
//     // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
//     if (typeof onResolved !== 'function') {
//         onResolved = function(x) {return x};
//     }
//     if (typeof onRejected !== 'function') {
//         onRejected = function(e) {throw e};
//     }

//     // 依然是保存 this
//     var self = this;
//     // 判断是否是 resolved 状态
//     if (self.status === 'resolved') {
//         // 如果是 执行对应的处理方法
//         onResolved(self.value);
//     } else if (self.status === 'rejected') {
//         // 若是 rejected 状态，则执行 rejected 对应方法
//         onRejected(self.reason);
//     }
// };

// new CutePromise(function(resolve, reject){
//     resolve('成了！');
// }).then(function(value){
//     console.log(value);
// }, function(reason){
//     console.log(reason);
// });

// // 输出 “成了！”

// new CutePromise(function(resolve, reject){
//     reject('错了！');
// }).then(function(value){
//     console.log(value);
// }, function(reason){
//     console.log(reason);
// });

// // 输出“错了！”


function CutePromise(executor) {
    // value 记录异步任务成功的执行结果
    this.value = null;
    // reason 记录异步任务失败的原因
    this.reason = null;
    // status 记录当前状态，初始化是 pending
    this.status = 'pending';
  
    // 缓存两个队列，维护 resolved 和 rejected 各自对应的处理函数
    this.onResolvedQueue = [];
    this.onRejectedQueue = [];
         
    // 把 this 存下来，后面会用到
    var self = this;
  
    // 定义 resolve 函数
    function resolve(value) {
        // 如果不是 pending 状态，直接返回
        if (self.status !== 'pending') {
            return;
        }
        // 异步任务成功，把结果赋值给 value
        self.value = value;
        // 当前状态切换为 resolved
        self.status = 'resolved'; 
        // 用 setTimeout 延迟队列任务的执行
        setTimeout(function(){
            // 批量执行 resolved 队列里的任务
            self.onResolvedQueue.forEach(resolved => resolved(self.value)); 
        });
    }
        
    // 定义 reject 函数
    function reject(reason) {
        // 如果不是 pending 状态，直接返回
        if (self.status !== 'pending') {
            return;
        }
        // 异步任务失败，把结果赋值给 value
        self.reason = reason; 
        // 当前状态切换为 rejected
        self.status = 'rejected';
        // 用 setTimeout 延迟队列任务的执行
        setTimeout(function(){
            // 批量执行 rejected 队列里的任务
            self.onRejectedQueue.forEach(rejected => rejected(self.reason));
        });
    }
  
    // 把 resolve 和 reject 能力赋予执行器
    executor(resolve, reject);
}

// then 方法接收两个函数作为入参（可选）
CutePromise.prototype.then = function(onResolved, onRejected) {
  
    // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
    if (typeof onResolved !== 'function') {
        onResolved = function(x) {return x};
    }
    if (typeof onRejected !== 'function') {
        onRejected = function(e) {throw e};
    }
 
    // 依然是保存 this
    var self = this;
    // 判断是否是 resolved 状态
    if (self.status === 'resolved') {
        // 如果是 执行对应的处理方法
        onResolved(self.value);
    } else if (self.status === 'rejected') {
        // 若是 rejected 状态，则执行 rejected 对应方法
        onRejected(self.reason);
    } else if (self.status === 'pending') {
        // 若是 pending 状态，则只对任务做入队处理
        self.onResolvedQueue.push(onResolved);
        self.onRejectedQueue.push(onRejected);
    }
    return this
};

const cutePromise = new CutePromise(function (resolve, reject) {
    resolve('成了！');
});
cutePromise.then((value) => {
    console.log(value)
    console.log('我是第 1 个任务')
}).then(value => {
    console.log('我是第 2 个任务')
}).then(value => {
    console.log('我是第 3 个任务')
})
// 成了！
// 我是第 1 个任务
// 我是第 2 个任务
// 我是第 3 个任务
