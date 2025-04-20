//# Polymorphism
//refers to the ability of different classes to be treated as
// instances of the same parent class or interface.
// It allows for writing flexible and reusable code, especially
// when dealing with class hierarchies.

// There are two primary types of polymorphism in TypeScript:

//? 1. Subtype Polymorphism (Inheritance-based)
//This allows objects of different subclasses to be treated as objects
// of a common superclass.

class Animaal {
  speak(): void {
    console.log("Animal speaks");
  }
}

class Doog extends Animaal {
  speak(): void {
    console.log("Dog barks");
  }
}

class Caat extends Animaal {
  speak(): void {
    console.log("Cat meows");
  }
}

function makeAnimalSpeak(animal: Animaal): void {
  animal.speak();
}

const dog = new Doog();
const cat = new Caat();

makeAnimalSpeak(dog); // Dog barks
makeAnimalSpeak(cat); // Cat meows

// ? 2. Interface-based Polymorphism
// This uses interfaces to allow different classes to implement
// the same methods with their own behavior.

interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectanglea implements Shape {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

function printArea(shape: Shape): void {
  console.log("Area:", shape.area());
}

const circle = new Circle(5);
const rectanglea = new Rectanglea(4, 6);

printArea(circle); // Area: 78.5398...
printArea(rectanglea); // Area: 24
