//# async await
// Async programming in TypeScript allows you to write non-blocking,
//  promise-based code using async and await. It works similarly to JavaScript
//  but with the added benefit of type safety.

//? Basic Syntax

async function fetchData(): Promise<string> {
  return "Data fetched!";
}

fetchData().then((data) => console.log(data));

//? Using await with Promises

async function wait() {
  const data = setTimeout(() => {
    console.log("Done Waiting for 2 seconds");
  }, 2000);
}

async function run() {
  console.log("Waiting...");
  const result = await wait(); // waits 2 seconds
}

run();

//? Error Handling with try/catch

async function riskyTask(): Promise<number> {
  throw new Error("Something went wrong!");
}

async function runTask() {
  try {
    const result = await riskyTask();
    console.log(result);
  } catch (error) {
    console.error("Caught error:", (error as Error).message);
  }
}

runTask();

//? Typing Async Functions

async function getUser(): Promise<{ name: string; age: number }> {
  return { name: "Suresh", age: 30 };
}
const userData = getUser();
console.log(userData);

//? Working with API using fetch
interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //convert response into json data
    const data: Post[] = await response.json();
    console.log("Posts Data:", data);
    return [];
  } catch (error) {
    throw error;
  }
};

fetchPosts();
// .then((data) => {
//   console.log(data);
// });

//? Concurrent Promises(Parallel Async Calls) with promise.all

async function getData(id: number): Promise<string> {
  return `Data for ID ${id}`;
}

async function fetchAll() {
  const results = await Promise.all([getData(1), getData(2), getData(3)]);
  console.log(results);
}

fetchAll();
