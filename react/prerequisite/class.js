class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  welcome() {
    console.log(`hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, gpa) {
    super(name, age);
    this.gpa = gpa;
  }
  hello() {
    this.welcome();
  }
}
class Teacher extends Person {
  constructor(name, age, classStrength) {
    super(name, age);
    this.classStrength = classStrength;
  }
}
let person1 = new Person("Steve", 30);
console.log(person1);
person1.welcome();
let student1 = new Student("Aman Singh", 21, 8.5);
console.log(student1);
student1.hello()
let teacher1 = new Teacher("Tony", 40, 100);
console.log(teacher1);
