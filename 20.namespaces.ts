//Namespaces are used to group related code within the same file
// or across multiple files using the namespace keyword.

namespace Geometry {
  export const PI = 3.14;
  export class Area_Circle {
    area(radius: number): number {
      return Math.PI * radius * radius;
    }
  }
  export function add_numbers(num1: number, num2: number) {
    const result = num1 + num2;
    console.log(result);
  }
}

console.log(Geometry.PI);
Geometry.add_numbers(20, 10);

const circle1 = new Geometry.Area_Circle();
let res = circle1.area(10);
console.log(res);
