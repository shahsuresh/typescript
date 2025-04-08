//?1. Write a typescript function to calculate factorial of a number with proper type annotation

function factorial(num: number): number {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let output = factorial(5);
console.log(output); //120

//?2. define a function which accepts a user object with
//? (name,age and email) and returns a formatted string

interface UserDetails {
  name: string;
  age: number;
  email: string;
}

function userDetail(user: UserDetails): string {
  return `Your Name is ${user?.name} , age is ${user?.age} and email is ${user?.email}`;
}

console.log(userDetail({ name: "Suresh", age: 25, email: "shah@gmail.com" }));

const user2: UserDetails = {
  name: "Anju",
  age: 24,
  email: "anju@mail.com",
};

console.log(userDetail(user2));

//? 3. Calculate Total Price: Write a typescript function that calculates total price
//? of an array of product objects. Each product has a price and quantity.

interface Product {
  price: number;
  quantity: number;
}

function totalPrice(productList: Product[]): number {
  let subTotal: any = productList.reduce((item, index) => {
    return (item += index.price * index.quantity);
  }, 0);
  return subTotal;
}

console.log(
  totalPrice([
    { price: 20, quantity: 5 },
    { price: 20, quantity: 6 },
  ])
); //220

let cart: Product[] = [
  { price: 200, quantity: 2 },
  { price: 20, quantity: 5 },
];

console.log(totalPrice(cart)); //500

//? 4. Define a union type for a Vehicle that can be either a car or a bike with
//? different properties. Write a function to log details based on the vehicle type

// interface VehicleDetails {
//   name: string;
//   type: string;
//   model?: string | number;
// }

// function yourVehicleDetail(input: VehicleDetails): string {
//   if (input.type == "Bike") {
//     return "You own a bike";
//   } else {
//     return "You Own a Car";
//   }
// }

// let myBike: VehicleDetails = {
//   name: "Suzuki",
//   type: "Car",
// };

// console.log(yourVehicleDetail(myBike));

//! other solution using type

type Bike = {
  type: "Bike";
  model: string;
  cc: number;
};

type CarData = {
  type: "Car";
  model: string;
  brand: string;
};

type VehicleData = Bike | CarData;

function getVehicleDetails(vehicle: VehicleData) {
  if (vehicle.type == "Bike") {
    console.log(`"You own a bike" of CC ${vehicle.cc}`);
  } else {
    console.log(`You Own a ${vehicle.brand}  Car`);
  }
}

let myBike: VehicleData = {
  type: "Bike",
  model: "FZS",
  cc: 150,
};

let myCar: VehicleData = {
  type: "Car",
  model: "Maruti 800",
  brand: "Maruti",
};

getVehicleDetails(myCar);
getVehicleDetails(myBike);
