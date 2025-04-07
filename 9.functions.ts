//? Regular function

function addition(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(addition(9, 6));

//? function expression

const divide = function (num1: number, num2: number): number {
  return num1 / num2;
};

console.log(divide(10, 5));

//? Arrow Function

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

console.log(multiply(3, 4));

//? Function with Optional Parameter

function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}

console.log(greet("Suresh", 25)); // Hello Suresh, age 25
console.log(greet("Anju")); // Hello Anju

//?  Function with Default Parameter

function greetUser(name: string = "Guest"): string {
  return `Welcome, ${name}`;
}

console.log(greetUser("Anju")); // Welcome, Anju
console.log(greetUser()); // Welcome, Guest

//? Function with a Custom Type

type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (x, y) => x - y;

console.log(subtract(40, 20));

//? Function Overloading

function getLength(value: string): number;
function getLength(value: number[]): number;
function getLength(value: any): number {
  return value.length;
}

console.log(getLength("Matihani"));
console.log(getLength([1, 2, 3]));
console.log(getLength("90"));

//? Function with Rest Parameters

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(100, 3, 4, 67, 8, 9));
