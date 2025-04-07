// 🧩 What is a Type Alias?
// A type alias gives a name to any type
// — including primitives, union/intersection types, object shapes, etc.
//  It’s declared using the type keyword.

//? Syntax
// type AliasName = TypeDefinition

type UserName = string;
type UserCode = number;

let user: UserName = "suresh";
let code: UserCode = 465;

console.log(user, code);

//? type Alias with interface

type Person = {
  name: string;
  age: number;
};

let person1: Person = {
  name: "Shankar",
  age: 32,
};

console.log(person1);
console.log(person1.name);

//? type alias in union
type ID = string | number;

const userID1: ID = "user1"; // user1
const userID2: ID = 65768; //65768

//? intersection type

// '&' symbol is used for intersection

type Vehicle = {
  model: number;
  brand: string;
};

type Car = Vehicle & {
  isElectric: boolean;
};

const jeep: Car = {
  model: 2025,
  brand: "Jeep",
  isElectric: true,
};

type Status = "success" | "error" | "loading";

let currentStatus: Status = "loading";
