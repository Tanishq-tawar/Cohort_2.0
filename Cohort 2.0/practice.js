
// 1. Write a function `sayHello()` that prints `"Hello
// JavaScript"`.

//-----SOlution-------


// function sayHello() {
//     console.log("Hello JavaScript");
// }
// sayHello();

//---------------------------------------------------------------------------------------------

// 2. Create a function `add(a, b)` that returns their sum
// and log the result.

//-----SOlution-------

// function add(a,b) {
//     return a+b;
// }

// console.log (add(12,85));
//---------------------------------------------------------------------------------------------



// 3. Write a function with a default parameter `name =
// "Guest"` that prints `"Hi <name>"`.

//-----SOlution-------

// function greet (guest="Guest"){
//     console.log("Hii" + " " +guest);
// }
// greet ("Himank");
// greet();

//---------------------------------------------------------------------------------------------




// 4. Use rest parameters to make a function that adds
// unlimited numbers.

//-----SOlution-------

// function number(...num){
//     for(let i=0 ;i<num.length ;i++){
//         console.log(num[i]);
//     }
// }

// number(1,2,4,3,5,8,6,9,4,5,26,78,12,514,2,561,5,215,2,5);

//---------------------------------------------------------------------------------------------


// 5. Create an IIFE that prints `"I run instantly!"`.


//-----SOlution-------

// (function(){
//     console.log("I run instantly!");
// })();


//---------------------------------------------------------------------------------------------


// 6. Make a nested function where the inner one prints a
// variable from the outer one.

//-----SOlution-------


// function parent(){
//     let a= 12;
//     function child(){
//         console.log(a);
//     }
//     child();
// }

// parent();

//---------------------------------------------------------------------------------------------


// 7. Create an array of 5 fruits. Add one at the end and
// remove one from the beginning.

//-----SOlution-------


// let fruit =[ "Apple" ,"cheery", "Grapes","mango", "bananna"];
// fruit.push("Orange");
// fruit.shift();

// console.log(fruit);

//---------------------------------------------------------------------------------------------

// 8. Use a `for` loop to print all elements of an array.

//-----SOlution-------

// let arr =[ 1,2,3,4,5,6,7,];

// arr.forEach(function (val){
//     console.log(val);
// });

//---------------------------------------------------------------------------------------------


// 9. Create an object `person` with keys `name`, `age`,
// and `city`, and print each key’s value.

//-----SOlution-------

// let person = {
//     name: "Arjun",
//     age :"52",
//     city : "Delhi",
// }

// console.log(Object.keys(person) + " : " + Object.values(person));


//---------------------------------------------------------------------------------------------



// 10. Use `setTimeout()` to log `"Time’s up!"` after 2
// seconds.

// setTimeout(() => {
//     console.log("Time’s up!");
// }, 5000);

// setTimeout( function () {
//     console.log("Time’s up!");
// }, 2000);

//---------------------------------------------------------------------------------------------


//--------------------------------------------------- LEVEL 1 Ended ---------------------------------------------------------------


//--------------------------------------------------- LEVEL 2 Started -----------------------------------------------------------------

// ## **1. Higher-Order Function**

// // Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

// //-----SOlution-------
// function runTwice(fn){
//     fn();
//     fn();
// }

// function fn(){
//     console.log("hello");

// }

// runTwice(fn);

//---------------------------------------------------------------------------------------------


// ## **2. Pure & Impure Functions**

// Create one pure function that always returns the same output for a given input, and one impure function using a global variable.


// function pure(){
//     return 5+3;
// }

// let x= 10 ;

// function impure(a){
//     return a +x ;
// }

// console .log (pure());
// console .log (impure(5));


//---------------------------------------------------------------------------------------------

// ## **3. Object Destructuring**

// Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

//-----SOlution-------

// let person ={

//     name : {
//         firstname :"Arjun",
//         middlename :"singh",
//         lastname :"Choudhary",
//     },
//     age : 27,
// }
// function printDetails({name, age}){
//     console.log("Name :" + name.firstname +" " + name.middlename + " " + name.lastname);
//     console.log("Age :" + age);
// }

// printDetails(person);

//---------------------------------------------------------------------------------------------

// ## **4. Normal Function vs Arrow Function (this Issue)**

// Demonstrate the difference between a normal function and an arrow function when used as object methods.

// 15:50

// ---

// ## **5. map() Task**

// Given an array of numbers, use `map()` to create a new array where each number is squared.

//-----SOlution----- 

// let number = [1,2,3,4,5,6,7];
// let newarr =number.map(function(val){
//     return val*val ;
// });

// console.log(newarr);

//---------------------------------------------------------------------------------------------

// ## **6. filter() & reduce() Tasks**

// * Use `filter()` to get only even numbers from an array.
//---Solution---
//  let number = [1,2,3,4,5,6,7,8,9,10];
//  let even = number.filter(function(val){
//     return val%2 === 0;

//  })
//     console.log(even);

// ------------------------------------------------------------------------------


// * Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// ---Solution---

// let salary =[1000, 2000, 3000];
// let rsalary =salary.reduce(function(acc ,val){
//     acc = acc+val;
//    return acc;
// } ,0);

// console.log(rsalary);

// ------------------------------------------------------------------------------

// ## **7. some() & every() Task**

// Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 characters).

// ---

// ## **8. Object.freeze() & Object.seal()**

// Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

// ---

// ## **9. Nested Object Access**

// Create a nested object (`user → address → city`) and access the city name inside it