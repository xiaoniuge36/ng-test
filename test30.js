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
        // 如果是 pending 状态，直接返回
        if (self.status !== 'pending') {
            return;
        }
        // 异步任务成功，把结果赋值给 value
        self.value = value;
        // 当前状态切换为 resolved
        self.status = 'resolved'; 
        // 批量执行 resolved 队列里的任务
        self.onResolvedQueue.forEach(resolved => resolved(self.value)); 
    }
    
    // 定义 reject 函数
    function reject(reason) {
        // 如果是 pending 状态，直接返回
        if (self.status !== 'pending') {
            return;
        }
        // 异步任务失败，把结果赋值给 value
        self.reason = reason; 
        // 当前状态切换为 rejected
        self.status = 'rejected';
        // 用 setTimeout 延迟队列任务的执行
        // 批量执行 rejected 队列里的任务
        self.onRejectedQueue.forEach(rejected => rejected(self.reason));
    }
  
    // 把 resolve 和 reject 能力赋予执行器
    executor(resolve, reject);
}

function resolutionProcedure(promise2, x, resolve, reject) {
    // 这里 hasCalled 这个标识，是为了确保 resolve、reject 不要被重复执行
    let hasCalled;
    if (x === promise2) {
        // 决议程序规范：如果 resolve 结果和 promise2相同则reject，这是为了避免死循环
        return reject(new TypeError('为避免死循环，此处抛错'));
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 决议程序规范：如果x是一个对象或者函数，则需要额外处理下
        try {
            // 首先是看它有没有 then 方法（是不是 thenable 对象）
            let then = x.then;
            // 如果是 thenable 对象，则将promise的then方法指向x.then。
            if (typeof then === 'function') {
                // 如果 then 是是一个函数，那么用x为this来调用它，第一个参数为 resolvePromise，第二个参数为rejectPromise
                then.call(x, y => {
                    // 如果已经被 resolve/reject 过了，那么直接 return
                    if (hasCalled) return;
                    hasCalled = true;
                    // 进入决议程序（递归调用自身）
                    resolutionProcedure(promise2, y, resolve, reject);
                }, err => {
                    // 这里 hascalled 用法和上面意思一样
                    if (hasCalled) return;
                    hasCalled = true;
                    reject(err);
                });
            } else {
                // 如果then不是function，用x为参数执行promise
                resolve(x);
            }
        } catch (e) {
            if (hasCalled) return;
            hasCalled = true;
            reject(e);
        }
    } else {
        // 如果x不是一个object或者function，用x为参数执行promise
        resolve(x);
    }
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
    // 这个变量用来存返回值 x
    let x
    
    // resolve态的处理函数
    function resolveByStatus(resolve, reject) {
        // 包装成异步任务，确保决议程序在 then 后执行
        setTimeout(function() {
            try { 
                // 返回值赋值给 x
                x = onResolved(self.value);
                // 进入决议程序
                resolutionProcedure(promise2, x, resolve, reject);
            } catch (e) {
                // 如果onResolved或者onRejected抛出异常error，则promise2必须被rejected，用error做reason
                reject(e);
            }
        });
    }
  
    // reject态的处理函数
    function rejectByStatus(resolve, reject) {
        // 包装成异步任务，确保决议程序在 then 后执行
        setTimeout(function() {
            try {
                // 返回值赋值给 x
                x = onRejected(self.reason);
                // 进入决议程序
                resolutionProcedure(promise2, x, resolve, reject);
            } catch (e) {
                reject(e);
            }
        });
    }

    
    // 注意，这里我们不能再简单粗暴 return this 了，需要 return 一个符合规范的 Promise 对象
    var promise2 = new CutePromise(function(resolve, reject) {
        // 判断状态，分配对应的处理函数
        if (self.status === 'resolved') {
            // resolve 处理函数
            resolveByStatus(resolve, reject);
        } else if (self.status === 'rejected') {
            // reject 处理函数
            rejectByStatus(resolve, reject);
        } else if (self.status === 'pending') {
            // 若是 pending ，则将任务推入对应队列
            self.onResolvedQueue.push(function() {
                 resolveByStatus(resolve, reject);
            });
            self.onRejectedQueue.push(function() {
                rejectByStatus(resolve, reject);
            });
        }
    });

    // 把包装好的 promise2 return 掉
    return promise2;
};



const cutePromise = new CutePromise(function (resolve, reject) {
    resolve('成了！');
});

cutePromise.then((value) => {
    console.log(value)
    console.log('我是第 1 个任务')
    return '第 1 个任务的结果'
}).then(value => {
    // 此处 value 期望输出 '第 1 个任务的结果'
    console.log('第二个任务尝试拿到第 1 个任务的结果是：',value)
});


//成了！
//我是第 1 个任务
//第二个任务尝试拿到第 1 个任务的结果是： 第 1 个任务的结果





