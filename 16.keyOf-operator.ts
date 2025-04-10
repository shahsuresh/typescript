//! Kayof operator
//The keyof operator gives you a type that represents all the keys
// of an object as a union of string literals.

interface Laptop {
  name: string;
  model: number;
  make_year: number;
}

type laptopKeys = keyof Laptop;
let laptop1: laptopKeys = "model";
console.log(laptop1);
