//An interface is used to define the structure of an object.
// It specifies the properties an object should have and their types,
//  without implementing the actual logic.
//  Interfaces help with type-checking and ensuring consistency in your code.

interface StudentDetails {
  name: string;
  roll: number;
  isStudent?: boolean;
}

let student1: StudentDetails = {
  name: "Krishna",
  roll: 345,
};

console.log(student1);

//# Method in interface

interface User {
  name: string;
  greet(): void;
}

let user1: User = {
  name: "Dinesh",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
user1.greet();

//# interface with function

interface MathOp {
  (a: number, b: number): number;
}

const add2Numbers: MathOp = (x, y) => x + y;
const sub: MathOp = (x, y) => x - y;

console.log(add2Numbers(3, 2));
console.log(sub(7, 5));

//# ✅ Extending Interfaces:
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
