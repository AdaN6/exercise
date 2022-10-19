/*
WELCOME TO THE JS BASICS
*/

// TASK
// Create two variables
// Use the different keywords to create a variable with ...
// a) value that will change over time
// let city = "";
// // b) value will not change
// const age = 19;

// // TASK
// // Create 4 variables with different value types
// const string = "string";
// const number = 100;
// const blue = true;
// const red = undefined;

// // TASK
// // Create 2 expressions using equal to; greater than or less than and log the result
// //a) equal true
// //b) equal false
// let num = 2 === 2;
// console.log(num);
// let numTwo = 2 < 2;
// console.log(numTwo);

// TASK
// Create a function declaration with one parameter (with the keyword <function>) and call it
// function myFunction(num) {
//   return num;
// }
// console.log(myFunction(2));
// console.log(2 === myFunction(2));
// console.log("something" === myFunction("something"));

// const myFunction2 = (x) => {
//   return x;
// };

// const firstName = "Mirko";

// console.log(myFunction2(firstName));

// function logging() {
//   return "hello";
//   console.log("hello again");
// }

// console.log(logging());

// function swimming(location, day, weather) {
//   return `We will swim at the ${location}. On the ${day}. It will be ${weather}`;
// }

// console.log(swimming("lake"));

// function fishing(fish) {
//   return `You will catch a ${fish}`;
// }

// console.log(fishing("salmon", "bass", "orca"));

// function Test(num) {
//   if (num === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(Test(3));
// let num = 2;
// console.log(num === 3 ? true : false);

// TASK
// Create a function with a while loop in it

// function loope() {
//   let i = 0;
//   while (i < 10) {
//     console.log(i);
//     i++;
//   }
// }

// loope();

// function loope() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// loope();

// TASK - Create an array

const arr = [1, "maybe", true, null, undefined];

console.log(arr.length);

// TASK - Add an element to the array (3 options)
// arr.push("turtle");

// arr.unshift("i");
// arr[10] = "hello";

// // TASK - Remove an element from the array (3 options)
// arr.pop();
// console.log(arr);
// arr.splice(0, 2);
// arr.shift();
// console.log(arr);

// // TASK - Log the index of a certain element of the array
// const findIndex = arr.indexOf("maybe");
// console.log(findIndex);
// console.log(arr.indexOf("maybe"))

// arr.forEach((element) => console.log(element));

// const numbers = [1, 2, 3, 4, 5, 6];
// const newarr= numbers.map(element => element * 2);
// console.log(newarr)

// const var1 = arr[1];
// console.log(var1);
// const [a, b, c] = arr;
// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

// function saveState() {
//   return ["state", "setState"];
// }

// console.log(saveState());

// const [first, second] = saveState();
// console.log(first);
// console.log(second);

// Task - Create an object

const objectiv = { id: "1", name: "hello", key: "21" };

// // Task - add a property
// objectiv.age = 20;
// console.log(objectiv);
// console.log(objectiv.key);

// // // TASK - Check if there is an name - property in the object
// console.log("street" in objectiv);

// const { id, name, key } = objectiv;

// console.log("id", id);

/*
Arrays and Objects combined
*/

const myCollection = [
  {
    name: "hanna",
    age: 20,
    city: "madrid",
    friends: {
      first: "johanna",
      second: "tim",
    },
  },
  {
    name: "jim",
    age: 34,
    city: "munich",
    friends: {
      first: "jerome",
      second: "karla",
    },
  },
  {
    name: "zoe",
    age: 87,
    city: "london",
    friends: {
      first: "lisa",
      second: "norbert",
    },
  },
];

const name = myCollection.map((element) => element.name);
console.log(name);

const name2 = myCollection.map(({ name }) => name);
console.log(name2);

const person = myCollection.filter((element) => element.age < 50);
console.log(person);
