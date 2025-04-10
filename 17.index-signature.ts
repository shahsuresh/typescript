//! Index Signature
// An index signature lets you define types for properties with
// dynamic keys (when you don’t know all the property names ahead of time).

// An index signature is used to define types of objects that can have
//properties of dynamic keys, where the keys are not known in advance
// but you still want to enforce the type of the values.
//Index Signatures are particularly useful when working with objects that
// act like dictionaries or map

//? Basic Syntax:
type Example = {
  [key: string]: string;
};

//example
const studentMarks: { [subject: string]: number } = {
  math: 95,
  english: 88,
  science: 90,
};

studentMarks["history"] = 85; // ✅ OK

//example
interface StringArray {
  [index: number]: string;
}

const fruits: StringArray = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
