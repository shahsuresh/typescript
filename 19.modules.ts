//A module is any file that contains an import or export statement.
// Each file is its own module with its own scope.

export function add(a: number, b: number): number {
  return a + b;
}

export default function laptopName(name: string): string {
  return name;
}
