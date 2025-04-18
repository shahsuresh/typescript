//? Partial Utility Type
//the Partial utility type is used to make all properties of a given type optional.
//# Syntax:
// Partial<Type>;

//Example
interface UserRecord {
  user: string;
  age: number;
  email: string;
}

const updateUser = (user: Partial<UserRecord>) => {
  console.log(user);
};

updateUser({ user: "Ram" });
updateUser({ age: 23 });

//? Required Utility type
//Makes all properties in a type required.
type W_User = { name?: string; age?: number };
type FullUser = Required<W_User>;
// { name: string; age: number }

// ?Readonly<Type>
// Makes all properties in a type read-only (immutable).

const user5: Readonly<W_User> = { name: "Suresh" };
// user5.name = "Ram"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.

//? Pick<Type, Keys>
// Creates a new type by picking a subset of properties from an existing type.

type MobileUser = { id: number; name: string; age: number };
type UserPreview = Pick<MobileUser, "id" | "name">;
// { id: number; name: string }

// ? Omit<Type, Keys>
// Creates a new type by omitting specified properties from a type.

type WithoutAge = Omit<MobileUser, "age">;
// { id: number; name: string }

//? Record
// Constructs a type with a set of properties Keys of type Type.
type Roles = "admin" | "user";
type RolePermissions = Record<Roles, boolean>;
// { admin: boolean; user: boolean }
