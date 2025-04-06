//# To compile (Transpile) typescript file into javascript file
// we use 'typescript' package from npm
// to install: npm install typescript
//# to transpile
// tsc <fileName>.ts    eg: tsc index.ts
// it will produce a file named index.js
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
console.log("The sum of ".concat(num1, " and ").concat(num2, " is ").concat(sum));
