let number1 = 5;
number1 = "Hello"; // This will cause a TypeScript error because number1 is declared as a number
//# Error : Type 'string' is not assignable to type 'number'.

function add(a, b) {
  //# Warning: Parameter 'a' implicitly has an 'any' type,
  // but a better type may be inferred from usage.
  return a + b;
}
