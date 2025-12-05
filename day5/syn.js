// //synchronous example
// console.log("Hello");
// console.log("World!");
// console.log("This is synchronous code.");

// //asynchronous example
// console.log("Start");
// setTimeout(() => {
//   console.log("This takes 2 seconds");
// }, 2000);
// console.log("End");

//callback asynchronous example
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "Fetched Data";
//     callback(data);
//   }, 1500);
// }
// console.log("Fetching data...");
// fetchData((data) => {
//   console.log(data);
// }); 

// setTimeout(() => {
//   console.log("ram 1");
//   setTimeout(() => {
//     console.log("shana 2");
//     setTimeout(() => {
//       console.log("bala 3");
//     }, 5000);
//   }, 5000);
// }, 5000);

//promise asynchronous example
// let icecreMaker = new Promise((resolve, reject) => {
//   let icecreAvailable = false;
//     if (icecreAvailable) {
//         resolve("Ice cream is ready!");
//     } else {
//         reject("Ice cream is not available.");
//     }
// });
// icecreMaker
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//async await asynchronous example
// let icecreMaker = new Promise((resolve, reject) => {
//   let icecreAvailable = true;
//     if (icecreAvailable) {
//         resolve("Ice cream is ready!");
//     } else {
//         reject("Ice cream is not available.");
//     }
// });
// async function makeIceCream() {
//     try {
//         let message = await icecreMaker;
//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     }   
// }
// makeIceCream(); 

//visual guide to C# async/await https://itnext.io

//destructuring assignment
// const person = {
//   name: "John",
//   age: 30,      
//     city: "New York"
// };
// const { name, age, city } = person;
// console.log(name); 
// console.log(age);  
// console.log(city);  
// //output: John 30 New York

// //array destructuring
// const numbers = [1, 2, 3];
// const [first, second, third] = numbers; 
// console.log(first);
// console.log(second);
// console.log(third);
// //output: 1 2 3

//rest operator with destructuring
// const[a,...rest]=[10,20,30,40,50];
// console.log(a);
// console.log(rest);
// //output: 10 [20,30,40,50]

// const [x, , y] = [1, 2, 3];
// console.log(x, y); // 1, 3

// const { p1, r } = { p1: 5, q: 10, r: 15 };
// console.log(p1, r); // 5, 15

// const [p = 100, q = 200] = [50];
// console.log(p, q); // 50, 200

// const { a1 = 10, b1 = 20 } = { b1: 5 };
// console.log(a1, b1); // 10, 5

// //object destructuring
// const student = { name: "Rakshna", age: 18 };//without destructuring
// const name = student.name;
// const age = student.age;
// console.log(name);
// console.log(age);
// //output: Rakshna 18

// const st = { n: "Rakshna", a2: 18 };//with destructuring
// const { n, a2 } = st;
// console.log(n, a2);

// function display({ name, age }) {//destructuring in function parameters
//   console.log(name, age);
// }
// display({ name: "Rakshna", age: 18 });

// //nested destructuring
// const user = {
//   name: "Rakshna",
//   hobbies: ["coding", "movies"]
// };
// const { name3, hobbies: [h1, h2] } = user;
// console.log(name3, h1, h2);
// //output: Rakshna coding movies

// //destructuring in loops
// const people = [
//   { name: "Rakshna", age: 18 },
//   { name: "Bala", age: 20 }
// ];
// for (const { name, age } of people) {
//   console.log(name, age);
// }   
// //output: Rakshna 18 Bala 20

//swapping variables using destructuring
let m = 5;
let o= 10;
[m, o] = [o, m];
console.log(m, o);
//output: 10 5

//DOM visuvalizer
