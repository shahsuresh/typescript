//# Data types in Javascript
// number,String, Boolean, null, undefined, object

//? Data types in TypeScript
// All data types available in javaScript Plus
// Any , unknown , never , enum , tuple

//# Examples

let num1: number = 105;
let num2: number = 1203_345_487;
let num3: bigint = 12765497n;
console.log(num1, num2, num3);

let myName: string = "Suresh";
console.log(myName);

const isTrue: boolean = true;
console.log(isTrue);

const myData: undefined = undefined;
let noData: null = null;
console.log(myData, typeof myData, noData);

//! Array

let marks: number[] = [45, 56, 87, 98, 65];
let studentNames: string[] = ["Raja", "Dipak", "Aanand"];

console.log(marks, studentNames);

let village: [number, string] = [7, "Matihani"];

//! Object

let myDetails: object = { name: "Suresh", age: 28, address: "Kathmandu" };
console.log(myDetails);

myDetails = { ...myDetails, phone: 9846262487 };
console.log("Updated Details", myDetails);

let laptopDetails: { name: string; mYear: number } = {
  name: "Asus",
  mYear: 2020,
};

console.log(laptopDetails);

// laptopDetails.model = "Zenbook"; // Error: Property 'model' doesnot exist on type
console.log(laptopDetails);

//?========================Additional Types in TypeScript =====================

//! Any type

// It can hold any value, and you can
// assign any type of data to it — string, number, object, etc.

let value: any;
value = 1;
value = "Abc";
value = false;
value = [1, 2, 3];
value = { name: "Asus" };
console.log(value); //output: {name: 'Asus'}  , It doesnot throw any error

//! Tuples type
// Tuples in TypeScript are like fixed-length arrays where each element has a specific type and position.
//  They’re super useful
// when you know exactly what kind of data goes where.

let studentName_roll: [string, number] = ["Adatiya", 32];
// studentName_roll = [32, "Adatiya"]; //Error: Type "number" is not assignable to type 'string'
studentName_roll.push(50);
console.log("Student With Roll Number", studentName_roll); // Doesnot show Error, this is drawback of tuples in TS

//# Tuple with Optional Elements

let userInfo: [string, number?];

userInfo = ["Bob"]; // ✅ OK
userInfo = ["Bob", 30]; // ✅ OK

//#  Tuple with Rest Elements

let scores: [string, ...number[]];

scores = ["Math", 90, 85, 100]; // ✅ OK

//! Enum
// Enums in TypeScript are a way to define named constants
// — perfect when you want to represent a set of related values with friendly names.

enum statusCode {
  success = "SUCCESS",
  pending = "PENDING",
  loading = "LOADING",
}
console.log(statusCode.loading); //output: LOADING

let isPending: statusCode = statusCode.pending;
console.log(isPending); //output: PENDING

enum Direction {
  North = 1,
  East, // 2
  South, // 3
  West, // 4
}

console.log(typeof Direction); // typeof: object

const enum Yes {
  yes = 1,
  no = 0,
}

//! unknown type
//  the 'unknown' type represents any value, just like 'any',
// but is safer because you must perform type checking before using it.

//example

let result: unknown;
if (typeof result == "number") {
  result.toFixed(2);
} else if (typeof result == "string") {
  result.length;
} else {
  console.log(result);
}

//example 2
function handleData(data: unknown) {
  if (typeof data === "number") {
    console.log(data.toFixed(2));
  } else {
    console.log("Not a number");
  }
}

//! never type
//The never type in TypeScript represents values that never occur.

//  It's used in functions that either:
//1. Throw an error, or
//2. Run infinitely (never return), or
//3. Are exhaustive checks (in switch statements, for example).

//example: function that throws error

function throwError(message: string): never {
  throw new Error(message);
}

//example: function that run infinite loop
function infiniteLoop(): never {
  while (true) {
    // do something forever
  }
}

//! void type
//The void type in TypeScript is used to indicate that
//  a function does not return a value.

function logMessage(message: string): void {
  console.log(message);
}

//In this example, the function performs a side effect (logging),
// but doesn’t return anything—so the return type is void.
