// let a = 0; 
// let b = "Hello World" 
// let c = null; 
// let d = { name: '修言' }; 
// let e = ['修言', '小明', 'bear'];


// //堆栈

// function badCycle() {
//     var cycleObj1 = {}
//     var cycleObj2 = {}
//     cycleObj1.target = cycleObj2
//     cycleObj2.target = cycleObj1
//   }
  
//   badCycle()


// function badCycle() {
//     var cycleObj1 = {}
//     var cycleObj2 = {}
//     cycleObj1.target = cycleObj2
//     cycleObj2.target = cycleObj1
//   }
  
//   badCycle()

// const myDiv = document.getElementById('myDiv')

// function handleMyDiv() {
//     // 一些与myDiv相关的逻辑
// }

// // 使用myDiv
// handleMyDiv()

// // 尝试”删除“ myDiv
// document.body.removeChild(document.getElementById('myDiv'));


var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing) // 'originalThing'的引用
      console.log("嘿嘿嘿");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("哈哈哈");
    }
  };
};
setInterval(replaceThing, 1000);
  