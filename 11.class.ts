//! ✅ Class
//A class is a blueprint for creating objects with properties and methods.
//  It works similarly to classes in other object-oriented programming languages

class Animal {
  name: string;
  type: string;
  age: number;
  constructor(name: string, type: string, age: number) {
    this.name = name;
    this.type = type;
    this.age = age;
  }
  animal_detail() {
    console.log(`${this.name} is ${this.age} yrs old. It is a ${this.type}`);
  }
}

const animal1 = new Animal("Cat", "Mammals", 9);
animal1.animal_detail();
console.log(animal1.age);

//! 🔒 Access Modifiers
//TypeScript supports access modifiers like:

//1. public – default, accessible from anywhere

//2. private – accessible only inside the class

//3. protected – accessible inside the class and subclasses
class Country {
  name: string;
  private member: string;
  constructor(name: string, member: string) {
    this.name = name;
    this.member = member;
  }
  country_details(): string {
    return `${this.name} is member of ${this.member}`;
  }
}

const country1 = new Country("Nepal", "SAARC");
console.log(country1.country_details());
// console.log(country1.member); // Error: Property 'member' is private and only accessible within class 'Country'

//! 🧬 Inheritance

class Plane {
  //Parent Class
  constructor(public name: string) {}
  planeRoute(): string {
    return `it is a ${this.name} plane`;
  }
}

class YetiAir extends Plane {
  // Child Class
  constructor(name: string) {
    super(name);
  }
  planeRoute(): string {
    return `it is a Domestic plane`;
  }
}

const yeti1 = new YetiAir("Shree Air");
console.log(yeti1.planeRoute());

const himalayanAir = new Plane("Himalayan Air");
console.log(himalayanAir.planeRoute());

//! Abstract Class
//  An abstract class is a class that cannot be instantiated directly.
//  It's meant to be inherited by other classes.
// Abstract classes can define abstract methods, which are methods without
//  implementation that must be implemented in derived classes.
// They can also include implemented methods and properties.

abstract class Bird {
  abstract makeSound(): void; // Abstract method

  move(): void {
    console.log("Moving...");
  }
}

class Eagle extends Bird {
  makeSound(): void {
    console.log("Woof!");
  }
}

const eagle = new Eagle();
eagle.makeSound(); // Woof!
eagle.move(); // Moving...

// const owl = new Bird(); // ❌ Error: Cannot create an instance of an abstract class

//! 🔧 Getters & Setters
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area(): number {
    return this._width * this._height;
  }

  set width(value: number) {
    if (value > 0) this._width = value;
  }
}

const rectangle = new Rectangle(2, 5);
console.log(rectangle.area); //10
rectangle.width = 10;
console.log(rectangle.area); //50
