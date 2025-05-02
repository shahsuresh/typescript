//  the readonly keyword is used to make a property or variable immutable
//  after it has been initialized. This means you can assign a value once,
// but any attempt to change it afterward will result in a compile-time error.

//example
class YourName {
  constructor(public readonly name: string) {}
  changeName() {
    this.name = "Suresh"; // Error: Cannot assign name bacause it is readonly
  }
}

const yn1 = new YourName("Aakash");
