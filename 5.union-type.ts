//A union type in TypeScript allows a variable to hold more than one type.
let id: string | number; // id can be either a string or a number
id = "user1";
id = 101;
// id = true; //Error: Type "boolean" is not assignable to type 'string | number'

function userId(userid: string | number) {
  console.log(userid);
}

userId("hellosuresh1"); // show output
userId(501); // show output
// userId(true)  // show error: Argument of type boolean is not assignable
