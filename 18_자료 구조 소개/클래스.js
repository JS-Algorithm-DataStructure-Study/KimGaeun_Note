// class -> 사전에 정의된 속성 및 메서드들을 이용해 객체를 생성하기 위한 청사진

// 클래스 명칭은 대문자로 시작 (Camel Case)
class Student {
  // constructor function은 클래스가 인스턴스화될 때 동작하는 함수
  constructor(fistName, lastName, year) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];

    // 이렇게 constructor(생성자) 혹은 다른 인스턴스 메서드 내부에서 사용되는 this는 개별 클래스로부터 생성된 객체, 즉 개별 Student 인스턴스(실제 인스턴스)를 지칭함
    // 여기서 this는 firstStudent, secondStudent를 지칭
  }

  // instance method
  // 개별 인스턴스에서 호출할 수 있음
  fullName() {
    return `Your full name is ${this.fistName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;

    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!";
    }

    return `${this.fistName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  // class method
  // static 키워드는 클래스에 종속되지만, 클래스의 개별 인스턴스 메서드에는 종속적일 필요가 없는 메서드를 생성
  // 데이터가 정의된 하나의 개별 Student 인스턴스와는 관계없음. 특정 인스턴스와는 무관함
  // 개별 인스턴스가 아니라 클래스 단위에서 호출
  // utility function
  static EnrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}

// new 키워드를 사용하여 클래스로부터 새로운 객체를 인스턴스화함 (클래스의 인스턴스 생성)
let firstStudent = new Student("Colt", "Steele", 4);
let secondStudent = new Student("Blue", "Steele");

console.log(firstStudent); // Student { fistName: 'Colt', lastName: 'Steele', grade: 4 }
console.log(firstStudent.lastName); // Steele

console.log(secondStudent.grade); // undefined
secondStudent.grade = 3;
console.log(secondStudent.grade); // 3

console.log(firstStudent.fullName()); // Your full name is Colt Steele

console.log(firstStudent.markLate()); // Colt Steele has been late 1 times
console.log(firstStudent.markLate()); // Colt Steele has been late 2 times
console.log(firstStudent.markLate()); // YOU ARE EXPELLED!!!!

console.log(secondStudent.scores); // []
console.log(secondStudent.addScore(92)); // [ 92 ]
console.log(secondStudent.addScore(87)); // [ 92, 87 ]

console.log(secondStudent.calculateAverage()); // 89.5

console.log(firstStudent.EnrollStudents()); // TypeError: firstStudent.enrollStudents is not a function
console.log(Student.EnrollStudents()); // ENROLLING STUDENTS!

//

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
