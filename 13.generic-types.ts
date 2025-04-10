//! Generics
// Generics are the way to create reusable components(functions, classes, interface)
// that work with different types without losing type safety

// Why Use Generics?
//They allow you to write flexible and reusable functions, interfaces, classes, etc.,
//  without losing the power of static typing.

//? Generic Function
function showData<T>(data: T): T {
  return data;
}

console.log(showData<string>("Matihani")); // Matihani
console.log(showData<number>(7)); // 7
console.log(showData<boolean>(true)); //true

console.log(showData("Nepal")); //TypeScript infers T as string

//? Generics in Interface

interface Student<T, U> {
  name: T;
  data: U;
}

const std1: Student<string, string> = { name: "Suraj", data: "Nepal" };
const std2: Student<string, number> = { name: "Janaki", data: 205 };

console.table(std1);
console.table(std2);

//? Generic Constraints
function getLength<T extends { length: number }>(data: T): number {
  return data.length;
}

console.log(getLength("Nepal"));
console.log(getLength([1, 4, 5]));

//? Generic Classes
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
  showContent(): T {
    return this.content;
  }
}

let newBox = new Box("Circular Box");
console.log(newBox.showContent());

let myBox = new Box<number>(200);
console.log(myBox.showContent());

//example

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  getStackData(): T[] {
    return this.items;
  }
}

const numberStack = new Stack();
numberStack.push(20);
numberStack.push(40);
console.table(numberStack.getStackData());

numberStack.pop();
console.table(numberStack.getStackData());

//-------------------------------------------
const stringStack = new Stack();
stringStack.push("Rahul");
stringStack.push("Satan");
console.table(stringStack.getStackData());

stringStack.pop();
console.table(stringStack.getStackData());
