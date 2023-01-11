// // // //面向对象

// // // //创建对象的方式
// // // // var person = {
// // // //     name: '张三',
// // // //     age: 18,
// // // //     };
// // // //     console.log(person.name);

// // // //     //创建对象的方式
// // // //     var person = new Object();
// // // //     person.name = '张三';
// // // //     person.age = 18;
// // // //     console.log(person.name);


// // // //构造函数创建对象
// // // function Person(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // // }
// // // var person = new Person('张三', 18);
// // // console.log(person.name);
// // // console.log(person.age);

// // // //工厂模式创建对象
// // // function createPerson(name, age) {
// // //     var obj = new Object();
// // //     obj.name = name;
// // //     obj.age = age;
// // //     return obj;
// // // }
// // // var person = createPerson('张三', 18);
// // // console.log(person.name);
// // // console.log(person.age);

// // // //原型模式创建对象
// // // function Person() {

// // // }
// // // Person.prototype.name = '张三';
// // // Person.prototype.age = 18;
// // // var person = new Person();
// // // console.log(person.name);
// // // console.log(person.age);

// // // //构造函数和原型模式创建对象
// // // function Person(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // // }
// // // Person.prototype.sayName = function () {
// // //     console.log(this.name);
// // // }
// // // var person = new Person('张三', 18);
// // // person.sayName();

// // // //动态原型模式创建对象
// // // function Person(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // // }
// // // Person.prototype.sayName = function () {
// // //     console.log(this.name);
// // // }
// // // var person = new Person('张三', 18);
// // // person.sayName();

// // // //寄生构造函数创建对象
// // // function Person(name, age) {
// // //     var obj = new Object();
// // //     obj.name = name;
// // //     obj.age = age;
// // //     return obj;
// // // }
// // // var person = Person('张三', 18);
// // // console.log(person.name);
// // // console.log(person.age);

// // //js类的实现
// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// // }
// // Person.prototype.sayName = function () {
// //     console.log(this.name);
// // }
// // var person = new Person('张三', 18);
// // person.sayName();

// // //创建类的方式
// // function createPerson(name, age) {
// //     var obj = new Object();
// //     obj.name = name;
// //     obj.age = age;
// //     obj.sayName = function () {
// //         console.log(this.name);
// //     }
// //     return obj;
// // }
// // var person = createPerson('张三', 18);
// // person.sayName();

// // //继承
// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// // }
// // Person.prototype.sayName = function () {
// //     console.log(this.name);
// // }
// // function Student(name, age, grade) {
// //     Person.call(this, name, age);
// //     this.grade = grade;
// // }
// // Student.prototype = new Person();
// // Student.prototype.constructor = Student;
// // Student.prototype.sayGrade = function () {
// //     console.log(this.grade);
// // }
// // var student = new Student('张三', 18, '一年级');
// // student.sayName();
// // student.sayGrade();




// // //es6类的实现
// // class Person {
// //     constructor(name, age) {
// //         this.name = name;
// //         this.age = age;
// //     }
// //     sayName() {
// //         console.log(this.name);
// //     }
// // }
// // var person = new Person('张三', 18);
// // person.sayName();

// // es6类的继承  extends super class 
// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);
//         this.grade = grade;
//     }
//     sayGrade() {
//         console.log(this.grade);
//     }
// }
// var student = new Student('张三', 18, '一年级');
// student.sayName();
// student.sayGrade();

// //原型继承
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log(this.name);
// }
// function Student(name, age, grade) {
//     Person.call(this, name, age);
//     this.grade = grade;
// }
// Student.prototype = new Person();
// Student.prototype.constructor = Student;
// Student.prototype.sayGrade = function () {
//     console.log(this.grade);
// }
// var student = new Student('张三', 18, '一年级');
// student.sayName();
// student.sayGrade();

// //构造继承

// //组合继承
// //组合继承是指：将父类的原型链和构造函数的prototype属性连接起来，使得子类的原型链继承了父类的原型链，并且可以访问到父类的原型链上的属性和方法。
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log(this.name);
// }
// function Student(name, age, grade) {
//     Person.call(this, name, age);
//     this.grade = grade;
// }
// Student.prototype = new Person();
// Student.prototype.constructor = Student;
// Student.prototype.sayGrade = function () {
//     console.log(this.grade);
// }
// var student = new Student('张三', 18, '一年级');
// student.sayName();
// student.sayGrade();

// //原型式继承
// function object(obj) {
//     function F() { }
//     F.prototype = obj;
//     return new F();
// }
// var person = new Person('张三', 18);
// var student = object(person);
// student.sayName();

// //Object.create()原型式继承
// var person = {
//     name: '张三',
//     age: 18,
//     sayName: function () {
//         console.log(this.name);
//     }
// }
// var student = Object.create(person);
// student.sayName();


// function createObject(obj) {
//     function Fun() {}
//     Fun.prototype = obj
//     return new Fun()
//   }
  
//   let person = {
//     name: 'mjy',
//     age: 18,
//     hoby: ['唱', '跳'],
//     showName() {
//       console.log('my name is:', this.name)
//     }
//   }
  
//   let child1 = createObject(person)
//   child1.name = 'xxxy'
//   child1.hoby.push('rap')
//   let child2 = createObject(person) // 子类的原型指向父类的原型
  
//   console.log(child1)
//   console.log(child2)
//   console.log(person.hoby) // ['唱', '跳', 'rap']

//寄生组合式继承
//寄生组合式继承是指：将父类的原型链和构造函数的prototype属性连接起来，使得子类的原型链继承了父类的原型链，并且可以访问到父类的原型链上的属性和方法。
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(this.name);
}
function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.sayGrade = function () {
    console.log(this.grade);
}
var student = new Student('张三', 18, '一年级');
student.sayName();
student.sayGrade();

//寄生组合继承实现
function createObject(obj) {
    function Fun() {}
    Fun.prototype = obj
    return new Fun()
  }

    function inheritPrototype(subType, superType) {
        var prototype = Object.create(superType.prototype)
        prototype.constructor = subType
        subType.prototype = prototype
    }
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function () {
        console.log(this.name);
    }
    function Student(name, age, grade) {
        Person.call(this, name, age);
        this.grade = grade;
    }
    inheritPrototype(Student, Person)
    Student.prototype.sayGrade = function () {
        console.log(this.grade);
    }
    var student = new Student('张三', 18, '一年级');
    student.sayName();
    student.sayGrade();

    //寄生式继承实现
    function objectCopy(obj) {
        function Fun() { };
        Fun.prototype = obj;
        return new Fun();
      }
      
      function createAnother(obj) {
        let clone = objectCopy(obj);
        clone.showName = function () {
          console.log('my name is：', this.name);
        };
        return clone;
      }
      
      let person = {
           name: "mjy",
           age: 18,
           hobby: ['一年级', '男']
      }
      
      let child1 = createAnother(person);
      child1.hobby.push("篮球");
      console.log(child1.hobby); // ['一年级', '男', '篮球']
      child1.showName(); // my name is： mjy
      
      let child2 = createAnother(person);
      console.log(child2.hobby); // ['一年级', '男']
      





