// console.log("1"+2);
// console.log("sece"+true); 
// console.log("2"+3);//when do operation(+) with string and number then number convert into string
// console.log("5"-2);//when do operation(-,*,/) with string and number then string convert into number
// console.log("10"*2);
// console.log("20"/2);
// console.log("10"%"4");
// console.log("hello"-2);//NaN Not a Number
// console.log("hello"*2);
// console.log(true+2);//1+2=3(true convert into 1 and false convert into 0)
// console.log(false+5);

// // Explicit Conversion
// console.log(Number("123"));//string to number
// console.log(String(123));//number to string
// console.log(Number("abc"));//undefined to number -> NaN
// console.log(String(undefined));
// console.log(Boolean(1));//0, "", null, undefined, NaN -> false
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// console.log(Boolean(""));

// // if condition

// if(""){
//     console.log(" ''-- This is true");
// }

// if("hello"){
//     console.log("hello -- This is true");
// }
// if(0){
//     console.log("0 -- This is true");
// }       
// if(5){
//     console.log("5 -- This is true");
// }   
// if([]){
//     console.log(" [] -- This is true");
// }

// //=== vs ==
// console.log(5=="5");//true(value check)
// console.log(5==="5");//false(type and value check)  

// let age = 18;
// age=30;
// console.log(age);//reassigning value

// // let age = 18;
// // age=30;
// // let age = 25;//error: Identifier 'age' has already been declared
// // let age = 18;//re declaration we can't do in let
// // console.log(age);//reassigning value

// var score = 100;
// var score = 200;//re declaration we can do in var
// score = 300;//reassigning value
// console.log(score);//200

// const pi = 3.14;
// // pi = 3.14159;//error: Assignment to constant variable.
// // const pi = 3.14159;//error: Identifier 'pi' has already been declared
// console.log(pi);

// //hositing

// console.log(marks);//undefined
// var marks = 90;

// // console.log(height);//error: Cannot access 'height' before initialization
// // let height = 180;

// // console.log(weight);//error: Cannot access 'weight' before initialization
// // const weight = 75;
// // function

// // function greet(){
// //     if(1){
// //         var count = 5;
// //     }
// //     console.log(count);//5(var is function scoped)
 
// // }
// // greet();

// // function show(){
// //     if(1){
// //         let total = 10;
// //     }   
// //     console.log(total);//error: total is not defined(let is block scoped var variable)
// // }   
// // show();

// // function display(){
// //     if(1){
// //         const level = 3;
// //         console.log(level);
// //     }       
// //     //console.log(level);//error: level is not defined(const is block scoped variable)
// // }       
// // display();

// function add(a, b){
//     return a + b;
// }
// console.log(add(5, 10));
// console.log(add("Hello ", "World"));


// //function expression

// // const multiply = function(x, y){
// //     return x * y;
// // }   
// // console.log(multiply(4, 5));
// // console.log(multiply("4", "5"));//"4""5"="45"

// //arrow function

// //const subtract = (m, n) => {
// //     return m - n;
// // }
// // console.log(subtract(10, 4));
// // console.log(subtract("10", "4"));//"10"-"4"=6

// // const divide = (p, q) => p / q; //implicit return
// // console.log(divide(20, 4));
// // console.log(divide("20", "4"));//"20"/"4"=5     

// // const greet= function(){
// //     console.log("Hello from greet function");
// // }
// // greet();

// // const greetName = function greeting()
// // {
// //     console.log("Hello from bye "+greeting.name);
// // }
// // greetName();
// //named function expression!
// const greet = function welcome() {
//     console.log("Hello from a named function expression!");
// };
// greet();      // Works
// // welcome(); // ERROR: name only works inside the function

// //anonymous function expression
// const greet1 = function() {
//     console.log("Hello from an anonymous function expression!");
// };
// greet1();

// // arrow function expreesion
// const sum = (a, b) => {
//     return a + b;
// };
// console.log(sum(5, 3));
// console.log(sum("5", "3"));


// //named arrow function
// const multiply = (x, y) => x * y;
// console.log(multiply(4, 5));

// //callback function expresssion
// function process(callback) {
//     callback();
// }
// process(function() {
//     console.log("Callback function executed!");
// });

// function higherorder(func){
//     console.log("Before calling the function");
//     func();
// }
// function callbackFunction(){
//     console.log("After calling the function");
// }

// higherorder(callbackFunction);

// // higherorder(function(){
// //     console.log("After calling the function");
// // });

// //arrays functions

// const fruits = ["apple", "banana", "cherry", "date"];
// const upperFruits = fruits.push("elderberry");
// console.log(fruits);//["apple", "banana", "cherry", "date", "elderberry"]
// console.log(upperFruits);//5(length of the array after adding new element)

// const removedFruit = fruits.pop();
// console.log(fruits);//["apple", "banana", "cherry", "date"]
// console.log(removedFruit);//elderberry

// const firstFruit = fruits.shift();
// console.log(fruits);//["banana", "cherry", "date"]
// console.log(firstFruit);//apple 

// const number=[10,20,30,40,50];
// const addedNumber=number.unshift(5);
// console.log(number);//[5,10,20,30,40,50]
// console.log(addedNumber);//6(length of the array after adding new element at the beginning)

// const index=[1,2,3,4,5];
// for(let i=0;i<index.length;i++){
//     console.log(index[i]);
// }
// // const colors=["red","green","blue"];
// // let i = colors.length ;

// // let fruits = ["apple", "banana", "cherry", "date"];
// // let sliced= fruits.slice(1,3);
// // console.log(fruits);//["apple", "banana", "cherry", "date"]
// // console.log(sliced);//["banana", "cherry"]
// // let lasttwo= fruits.slice(-2);
// // console.log(lasttwo);//["cherry", "date"]

// let spliced= fruits.splice(1,2,"mango","kiwi");
// console.log(fruits);//["apple", "mango", "kiwi", "date"]
// console.log(spliced);//["banana", "cherry"]     
// let indexofcherry= fruits.indexOf("cherry");
// console.log(indexofcherry);//-1(not found)
// let indexofkiwi= fruits.indexOf("kiwi");
// console.log(indexofkiwi);//2(found)     
// let includesdate= fruits.includes("date");
// console.log(includesdate);  //true   
// let includesbanana= fruits.includes("banana");
// console.log(includesbanana);  //false   
// let joined= fruits.join(", ");
// console.log(joined);//"apple, mango, kiwi, date"    
// let reversed= fruits.reverse();
// console.log(reversed);//["date", "kiwi", "mango", "apple"]      
// let sorted= fruits.sort();
// console.log(sorted);//["apple", "date", "kiwi", "mango"]

// // let numbers = [40, 100, 1, 5, 25, 10];
// // console.log(numbers.indexOf(25));//4
// // numbers.sort();
// // console.log(numbers);//[1, 10, 100, 25, 40, 5] incorrect sorting

// let numbers = [40, 100, 1, 5, 25, 10];
// let found = numbers.find(numbers => numbers > 20);
// console.log(found);//40(first element >20)

// const nu = [3, 5, 7, 10, 12, 15];
// const firstEven = nu.find(num => num % 2 === 0);
// console.log(firstEven); // Output: 10

// const nums = [1, 2, 3, 4, 5];
// const evenNums = nums.filter(num => num % 2 === 0);
// console.log(evenNums); // Output: [2, 4]

// let numberlist = [1, 2, 3, 4, 5];
// let doubled = numberlist.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

// let neat = [1, 2, 3, 4];
// let d = neat.map(num => num>2);
// console.log(d);//[false, false, false, true]

// let name=["Alice", "Bob", "Charlie"];
// let fullname=name.map(n=> "Mr. "+n);
// console.log(fullname);//["MrAlice", "MrBob", "MrCharlie"]

// const person = {
//   name: "Rakshna",
//   age: 18,
//   city: "Namakkal"
// };
// console.log(person.name);   // Rakshna
// console.log(person["city"]);
// person.country = "India";
// console.log(person);
// person.age = 19;
// delete person.city;
// console.log(person);

// const student = {
//   name: "Rakshna",
//   marks: 95,
  
//   display: function() {
//     console.log("Name: " + this.name);
//   }
// };
// student.display(); // Name: Rakshna
// console.log("Marks: " + student.marks); // Marks: 95

// const user = {
//   name: "Rakshna",
//   address: {
//     city: "Namakkal",
//     pincode: 637001
//   }
// };
// console.log(user.address);
// console.log(user.address.city);  // Namakkal

// const car = { brand: "BMW", model: "X5", year: 2022 };
// for (let key in car) {
//   console.log(key + " : " + car[key]);
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const p1 = new Person("Rakshna", 18);
// console.log(p1.name); // Rakshna
// console.log(p1.age);  // 18

// see chat gpt for many methods of object 
//Arrays Of Objects 
// const students = [
//   { name: "Rakshna", age: 18, grade: "A" },
//   { name: "Ram", age: 19, grade: "B" },
//   { name: "Bala", age: 18, grade: "A+" },
//   { name: "Yuva", age: 20, grade: "C" }
//];
// students.forEach(s => console.log(s.name));
// students.forEach(student => {
//   console.log(student.name, student.age, student.grade);
// });

// const topStudents = students.filter(s => s.grade === "A" || s.grade === "A+");
// console.log(topStudents);
// const studentNames = students.map(s => s.name);
// console.log(studentNames);

// const result = students.find(s => s.name === "Ram");
// console.log(result);

// students.push({ name: "Ammu", age: 17, grade: "B" });
// console.log(students);
// students.sort((a, b) => a.age - b.age);
// console.log(students);

// const students1 = [
//   { name: "Rakshna", age: 18, grade: "A" },
//   { name: "ram", age: 20, grade: "C" },
//   { name: "ammu", age: 19, grade: "A+" },
//   { name: "Bala", age: 17, grade: "B" }
// ];
// const result = students1
//   .filter(s => s.age >= 18)         // keep age 18+
//   .map(s => s.name.toUpperCase())   // convert names to upper case
//   .sort();                          // sort alphabetically

// console.log(result);

const arr = [1, 2, 3, 4, 5, 6];
const sum = arr
  .filter(n => n % 2 === 0)  // pick even numbers
  .map(n => n * 2)           // double them
  .reduce((a, b) => a + b);  // add all
console.log(sum);

const person = {
  name: "Rakshna",
  age: 18,
  greet() {
    console.log("Hello " + this.name + ", Age: " + this.age);
    return this;   // <-- return object for chaining
  },
  setAge(a) {
    this.age = a;
    return this;
  }
};
person
  .greet()
  .setAge(19)
  .greet();
console.log("Age: " + person.age);
