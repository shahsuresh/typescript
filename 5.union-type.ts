//# A union type in TypeScript allows a variable to hold more than one type.
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

//# Intersection Type
// an intersection type is used to combine multiple types into one.
// An object of an intersection type must satisfy all the types involved.

type A = { name: string };
type B = { age: number };

type C = A & B;

//example
type Students = {
  name: string;
};

type Teacher = Students & {
  teachingSubject: string;
  salary: number;
};

function teacherDetails(teacher: Teacher) {
  console.log(
    `Name of teacher is:${teacher.name},salary:${teacher.salary}. He teaches ${teacher.teachingSubject}`
  );
}

teacherDetails({ name: "Suresh", teachingSubject: "Math", salary: 40000 });
