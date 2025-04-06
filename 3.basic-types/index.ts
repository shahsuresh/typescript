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

//Tuple with Optional Elements
let userInfo: [string, number?];

userInfo = ["Bob"]; // ✅ OK
userInfo = ["Bob", 30]; // ✅ OK

//  Tuple with Rest Elements
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
