// Type narrowing in TypeScript means refining a variable’s type
// from a broader type (like a union) to a more specific one based on checks.

// Basically, you help TypeScript figure out,

// “What exact type is this right now?”

function userId(id: string | number) {
  if (typeof id == "string") {
    console.log(`Your Id is of type string. => ${id.toUpperCase()}`);
  } else {
    console.log(`Your id is of type Number. =>${id}`);
  }
}

userId("matihani");
userId(377);
