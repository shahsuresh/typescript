//# type inference

//Type inference in TypeScript means the compiler automatically figures out the type for you,
// even if you don’t explicitly specify it.

let userName = "Suresh"; // typeScript infers the type of variable 'userName' as String
// without defining the type. It directly get the type from the value assigned

let age = 25; // inferred as `number`

//# type assertions
//Type assertion in TypeScript is a way to tell the compiler,
//"I know the type of this value better than you do."
//It doesn’t change the runtime behavior—just gives TypeScript a hint to treat the value as a specific type.

let stringValue: any = "Hello Suresh";
let stringLength = (stringValue as string).length;
console.log(`The Length of ${stringValue} is ${stringLength}`);
