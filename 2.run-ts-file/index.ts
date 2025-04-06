//# To compile (Transpile) typescript file into javascript file
// we use 'typescript' package from npm
// to install: npm install typescript

//# to transpile
// tsc <fileName>.ts    eg: tsc index.ts
// it will produce a file named index.js

let num1: number = 5;
let num2: number = 10;
let sum: number = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//# to run the above program
// npm index.js
//output: The Sum of 5 and 10 is 15

//? Note: "tsc index.ts" will produce index.js file even If there is errors in ts file

//! We can directly run index.ts file, for we have to use node package called "ts-node"
// to install: npm i ts-node
// to run ts file: ts-node index.ts  or "npx ts-node index.ts"
// it will directly run index.ts file

//# We can stop from generating a javaScript file from ts file using " tsc index.ts", if there is error in ts file
// For this: "tsc --init"  => this will generate a tsconfig.json file
// in this json file => change "module" to "es2022"
// Enable:  "noEmitOnError: true"
