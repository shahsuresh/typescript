//! 🔐 Type Guards
// Type Guards help you narrow down the type of a variable within
//  a conditional block — making your code safer and
//  more precise when working with unions or unknown types.

//? typeof

const model = (model: string | number) => {
  if (typeof model == "string") {
    console.log(`${model} is of type : String`);
  } else {
    console.log(`${model} is of type: Number`);
  }
};

model("Asus");
model(2025);

//? instanceof

class Dog {
  bark() {
    console.log("Bhoo bhoo");
  }
}
class Cat {
  meow() {
    console.log("Meow!!");
  }
}

const petSound = (pet: Dog | Cat) => {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
};

const cat1 = new Cat();
petSound(cat1); // Meow!!

const dog1 = new Dog();
petSound(dog1); // Bhoo bhoo

//? custom type guard function

// type Dog = { bark: () => void };
// type Cat = { meow: () => void };

// function isDog(animal: Dog | Cat): animal is Dog {
//   return (animal as Dog).bark !== undefined;
// }

// function makeSound(animal: Dog | Cat) {
//   if (isDog(animal)) {
//     animal.bark(); // TypeScript knows it's a Dog
//   } else {
//     animal.meow(); // Otherwise, it's a Cat
//   }
// }

//? in Operator Type Guard (for object properties)

type WebUser = { name: string; email: string };
type Admin = { name: string; isAdmin: boolean };

function isAdminAccount(account: WebUser | Admin) {
  if ("isAdmin" in account) {
    console.log("This is an admin");
  } else {
    console.log("Regular user");
  }
}
