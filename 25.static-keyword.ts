// the static keyword is used to define class-level members—that is,
// properties or methods that belong to the class itself rather than
// to any instance of the class.

// # Static property: Shared across all instances.

// # Static method: Called on the class, not on an instance.
class MathHelper {
  static PI: number = 3.14159;

  static square(x: number): number {
    return x * x;
  }
}

// Accessing static members
console.log(MathHelper.PI); // 3.14159
console.log(MathHelper.square(5)); // 25

// You cannot do this:
// const helper = new MathHelper();
// console.log(helper.PI); //  Error // property PI doesnot exist on type MathHelper

//? Static with Inheritance

class Base {
  static greet() {
    console.log("Hello from Base");
  }
}

class Derived extends Base {}

Derived.greet(); // Hello from Base

const derived = new Derived();
// derived.greet(); // Error: Property 'greet' doesnot exist on type Derived
