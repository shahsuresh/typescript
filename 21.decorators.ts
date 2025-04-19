// decorators are a special kind of declaration that can be attached to
// a class, method, accessor, property, or parameter.
// Decorators allow you to modify or annotate these items at design time,
//  and they are heavily used in frameworks like Angular.

// Decorators provide a way to add metadata to classes, methods, properties,
//or parameters. this metadata can be used for various purposes such as:
// Documentation, Framework Integration etc

// ⚠️ To use decorators in TypeScript, you must enable some compiler options
//  in tsconfig.json:
// {
//   "experimentalDecorators": true,
//   "emitDecoratorMetadata": true
// }

//# Types of Decorators
//? 1. Class Decorators

//A class decorator is applied to the class constructor.
function Logger(constructor: Function) {
  console.log("Class decorator called:", constructor.name);
}

@Logger
class MyClass {
  constructor() {
    console.log("Constructor called");
  }
}

//? 2. Property Decorator
// Used to observe or modify class properties.
function LogProperty(target: any, propertyKey: string) {
  console.log(`Property decorator called on: ${propertyKey}`);
}

class MyClass1 {
  @LogProperty
  myProperty: string = "Hello";
}

//? 3. Method Decorator
// Used to monitor or change methods.

function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args);
    return originalMethod.apply(this, args);
  };
}

class MyClass2 {
  @LogMethod
  greet(message: string) {
    console.log(message);
  }
}

//? 4. Accessor Decorator
// Used for getters/setters.
function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Accessor decorator on: ${name}`);
}

class MyClass {
  private _name: string = "Suresh";

  @LogAccessor
  get name() {
    return this._name;
  }
}

//? 5. Parameter Decorator
// Used to annotate method parameters.

function LogParam(target: any, methodName: string, parameterIndex: number) {
  console.log(
    `Parameter decorator called on ${methodName}, index: ${parameterIndex}`
  );
}

class MyClass {
  greet(@LogParam message: string) {
    console.log(message);
  }
}
