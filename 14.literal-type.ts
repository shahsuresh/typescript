//! Literal Type
// A literal type is a type that represents
// exact, specific values, rather than general types
// like string, number, or boolean.

//? ✅ String Literal Type
type orderStatus = "delivered" | "Pending" | "Cancelled";
let order: orderStatus = "Pending";

let color: "red" | "green" | "blue";

color = "red"; // ✅
// color = "yellow"; // ❌ Error: Type '"yellow"' is not assignable

//? ✅ Number Literal Type
let multiplier: 2 | 3;
// multiplier = 4; //Error: type '4' is not assignable to 2| 3

//? ✅ Boolean Literal Type

let isCharged: true | false;
isCharged = false;

//?  Literal Types + Union + Enums Alternative
type Directions = "north" | "south" | "east" | "west";

function move(dir: Directions) {
  console.log(`Moving ${dir}`);
}

//? Mixed Literals

type Message = "Hello" | true | 200 | { name: string; age: number };

//-------------------------------------------------------------------------
type Role = "admin" | "teacher" | "student";

function checkRole(role: Role) {
  console.log(`Role is ${role}`);
}

//=================================================
interface ButtonConfig {
  size: "small" | "medium" | "large";
  color: "red" | "blue" | "orange";
}

const btn1: ButtonConfig = {
  size: "medium",
  color: "orange",
};
