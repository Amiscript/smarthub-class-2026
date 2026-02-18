// variables in javaScript
//keywords=  let, const
// let is used for variables that can change
// const is used for variables that should not change
// let = keyword
//  variable name 
//  value   

// let PrinceAge = 26;

// console.log(PrinceAge);

// data types in javaScript
// string = text= '',"", ``
// number = whole numbers and decimal numbers
// boolean = true or false
// object = key value pairs
// array = list of items
//float
// const surname = "joshua";
// console.log(surname);

// const distance = 20
// const time = 10

// const velocity = distance / time;
// console.log(velocity);

// const welcome = "Hello World"
// console.log(welcome);

// const student = "Alice";


// concatenation  
// const greeting = "Hello"+ " "  + student;
// console.log(greeting);
//HelloAlice 

// const greeting = `Hello ${student} ${welcome}`;
// console.log(greeting);

// BODMAS
// brackets, orders, division, multiplication, addition, subtraction
// const result = (10 + 5) * 2 - 8 / 4; 

//  const  firstname = "John";
// const lastname = "Alice";

// let  greeting =" hello world"
      
// console.log(firstname);

// console.log(lastname);

// console.log(greeting);


// greeting = "hi world"

// console.log(greeting);

// concatenation 

// const fullname = firstname   +  lastname;
// console.log(fullname);

// const fullname = `${firstname} ${lastname}`;
// console.log(fullname);


// BODMAS
// brackets, orders, division, multiplication, addition, subtraction
// const result = (10 + 5) * 2 - 8 / 4; 
// console.log(result);

//    boolean  true or false , yes or no....


// write a program that check if a student is late for a class, the time for the class is 11:00am, if this student is late then he or she should go back home , if not late he or she should stay in class
  

// logical operators in javaScript

// greater than  >
// less than  <
// equal to  ===
// greater than or equal to  >=
// less than or equal to  <=
// not equal to  !=

// or  ||
// and &&


// const age = 17;
// if (age >= 18) {
//     console.log("He or she is eligible to vote");
// }
// else if(age < 18){
//     console.log("He or she is not eligible to vote");
// }
// else{
//     console.log("Invalid age");
// }
 
// time = 11


// if (time <= 11) {
//     console.log("He or she can enter the class ") 
// }

// else if (time === 10 ){
//  console.log("He or she can still  enter the class ")
// }
// else{
//     console.log("he or she just go back home")
// }
  
// loops in javaScript
// for loop
// while loop
// do while loop

// for loop is used when you know the number of iterations
// console.log("Hello world")

// for(initialization; condition; increment/decrement){
//     }

// for ( let i= 1; i <=10 ; i++ ) {
//     console.log(`Hello world ${i}`);
// }

// for ( let count = 1; count <= 100; count++){
//      console.log( count);
// }

// let word = "hello"
// console.log(word.length)

// for ( let i = 0; i < word.length; i++ ) {
//     console.log(word[i]);
// }


// while loop is used when you don't know the number of iterations

// let count = 1;
// while ( count <= 100 ) {
//     console.log(`Hello world ${count}`);
//     count++;
// }

//  for(let i =2 ; i <= 20; i+=2){
//     console.log(i);
//  }

//  i= i +2 
//  i+=2

// arrays in javaScript
// an array is a list of items
// const fruits = ["apple", "banana", "orange", "mango"];
// console.log(fruits[1])

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

// nestd arrays

// const  classA = ["Alice", "Bob", "Charlie", ["Math", "Science", "History"], true, 25];
// console.log(classA[3][1]);


// method in strings
// .length, .toUpperCase(), .toLowerCase(), .indexOf(), .substring()

// const message = "Hello World";
// console.log(message.length); // 11
// console.log(message.toUpperCase()); // "HELLO WORLD"
// console.log(message.toLowerCase()); // "hello world"
// console.log(message.indexOf("W")); // 6
// console.log(message.substring(0, 5)); // "Hello"


// methods in numbers
// .toFixed(), .toString(), .parseInt(), .parseFloat()

// methods in javaScript in arrays
// .push(), .pop(), .shift(), .unshift(), .indexOf(), .length, .slice(), .splice()

// const colors = ["red", "blue", "green"];
//  colors.push("yellow"); // adds "yellow" to the end
//    console.log(colors); 

//    colors.pop(); // removes the last item
//    console.log(colors);

//    colors.shift(); // removes the first item
//    console.log(colors);

//    colors.unshift("purple"); // adds "purple" to the beginning
//    console.log(colors);

//    colors.indexOf("blue");
//    console.log(colors);

//  javascript variables

// variable , variable name  = value


//  let - variables that can change
//     let firstname = "ada";
//    const lastname = "lovelace";
   // name of variable
   // pascal case
   // let FirstName = "ada";
   // camel case
   // let firstName = "ada";
   // snake case
   // let first_name = "ada";

// console.log(firstname)

// read up strings methods and number methods
// concatenation
// string types, double quotes, single quotes, backticks
// write the following in a  string or numbers store either with const or let, name, age, height, weight, country, city,address, gender, and console log them all


// strings method
// .length- is used to get the length of a string
// .toUpperCase()- is used to convert a string to uppercase
// .toLowerCase()- is used to convert a string to lowercase
//  .indexOf()- is used to get the index of a character in a string
//  .substring() - is used to get a substring from a string
//  .trim()- is used to remove whitespace from both ends of a string
//  .replace()- is used to replace a character in a string with another character

// const fullname = "  john doe  ";
// console.log(fullname.length); 
// console.log(fullname.toUpperCase()); 
// console.log(fullname.toLowerCase()); 
// console.log(fullname.indexOf("d")); 
// console.log(fullname.trim());
// console.log(fullname.replace("j", "J"));

// number methods
// .toFixed()- is used to format a number to a fixed number of decimal places
// .toString()- is used to convert a number to a string
// .parseInt()- is used to convert a string to an integer
// .parseFloat()- is used to convert a string to a floating point number

// const num = 10.56789;
// console.log(num.toFixed(2)); 
// console.log(num.toString()); 
// console.log(typeof num.toString());
// console.log(parseInt("100")); 
// console.log(parseFloat("10.5"));

// concatenation - combining two or more strings together
// const firstName = "john";
// const lastName = "doe";
// const middleName = "smith";
// const gender = "male";
 
// const fullname = firstName + " " + middleName + " " + lastName;
// console.log(fullname);

// const fullname = ` Hi my name is ${firstName} ${middleName} ${lastName} and I am a ${gender}`;
// console.log(fullname);

// read up operators in javaScript
// write a program that takes in a user's first name, last name, age, and country, and then outputs a greeting message using concatenation and string methods. The message should include the user's full name in uppercase, age, and country.

// operators in javaScript
// arithmetic operators
// addition +
// subtraction -
// multiplication *
// division /
// modulus %
// exponentiation **
// increment ++
// decrement --

// assigmnment operators
// write a program that calculates the area of a rectangle given its length and width using assignment and arithmetic operators.
// write a program that calculates the area of a circle given its radius using assignment and arithmetic operators.
// write a program that converts temperature from Celsius to Fahrenheit using assignment and arithmetic operators.


// comparison operators
// greater than > 
// less than <
// equal to ===
// greater than or equal to >=
// less than or equal to <=
// not equal to !=

// logical operators
// and &&
// or ||
// not !

// conditionals in javaScript
// if statement
// if...else statement
// else if statement
// switch statement



// if (condition) {
//     // code to be executed if condition is true
// }else {
//     // code to be executed if condition is false
// }

// example 



// const  loginTime = 9;
// const logoutTime = 18;

// if (loginTime === 9) {
//     console.log("User can login to the system");
// }else if ( loginTime < 9) {
//     console.log("User is early");
// }else if ( logoutTime === 18) {
//     console.log("User can logout of the system");
// }else if ( logoutTime >= 18) {
//     console.log("User can still logout of the system");
// }
// else {
//     console.log("User does not have access to the system");
// }     

// const name = "   Alice  ";

// if (name){
//       console.log(name.trim());
// }else {
//     console.log("Name is empty");
// }

// loop in javaScript
// what is a loop?
// A loop is a programming construct that allows you to repeat a block of code multiple times until a certain condition is met.
// for loop -for loop is used when you know the number of iterations
// while loop - while loop is used when you don't know the number of iterations

// for(initialization; condition; increment/decrement){
//    // code to be executed
// }

// for ( let count = 1; count <= 20 ; count++ ) {
//     console.log(` ${count}`);
// }

// assignment conditional and loops together
// write a program that takes in a user's age and outputs whether they are a child, teenager, adult

// loop through the numbers 1 to 50

// javascript arrays
// an array is a data structure that can hold multiple values of different data types. It is used to store a collection of items in a single variable. Arrays are ordered, meaning that the items in an array have a specific order and can be accessed using their index. The index of the first item in an array is 0, the second item is 1, and so on. Arrays can be created using square brackets [] and can contain any type of data, including numbers, strings, objects, and even other arrays.   

//  arrays of numbers, strings, booleans, objects, and nested arrays.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); 

const fruits = ["apple", "banana", "orange"];
// console.log(fruits.indexOf("orange"));
// console.log(fruits[1]);


const booleans = [true, false, true];
// console.log(booleans[1]);


// const nestedArray = [1, "hello", true, { name: "Bob" }, [2, 3, 4]];
// console.log(nestedArray[3].name);
// console.log(nestedArray[3]);
// console.log(nestedArray[4][1]);

// Arrays methods in javaScript
// .push() - adds an item to the end of an array
  fruits.push("mango")
  console.log(fruits);

  booleans.push(false);
  console.log(booleans);

// .pop() - removes the last item from an array
   fruits.pop();
   console.log(fruits);

// .shift() - removes the first item from an array

fruits.shift();
console.log(fruits);

// .unshift() - adds an item to the beginning of an array
fruits.unshift("apple");
console.log(fruits);

// .indexOf() - returns the index of the first occurrence of an item in an array
console.log(fruits.indexOf("banana"));
// .length - returns the number of items in an array
console.log(fruits.length);

// .slice() - returns a shallow copy of a portion of an array into a new array object

console.log(fruits.slice(0, 3));
// .splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
fruits.splice(1, 1, "grape");
console.log(fruits);

// .concat() - is used to merge two or more arrays into a single array
const moreFruits = ["kiwi", "pineapple"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);


// .join() - is used to join all elements of an array into a string

const fruitsString = fruits.join(" , ");
console.log(fruitsString);


// assignment arrays
// write a program that takes in a list of numbers, strings, booleans and nested arrays and outputs the sum of all the numbers in the list using a for loop and the .length method.

let sumofNumbers = [1,2,3,4,5,6]

for(sumofNumbers = 0; sumofNumbers.length === 6; sumofNumbers++){
   console.log(sumofNumbers[index])
}



// using arrays method 
// add the first items
// remove the last item
// add the last item
// remove the first item 
// get the index of one array
// join them with comma
// add two arrays together


// Object-The JavaScript object is a non-primitive data type that is used to store data as key-value pairs. The key-value pairs are often referred as properties. A key in a key-value pair, also called a "property name", is a string and value can be anything. If a property's value is a function, the property is known as a method.

// Objects are created using curly braces and each property is separated by a comma. Each property is written as property name followed by colon (:) followed by property value. The key: value pairs are not stored in the specific order in the object. So an object is an unordered collection of properties written as key: value pairs.

// JavaScript is an Object Oriented Programming (OOP) language. A programming language can be called object-oriented if it provides four basic capabilities to developers.

// key: value

//  const listOfStudent ={
//    name: "Ada",
//    gender: "female",
//    age: 8, 
//    subject:["math", "Eng", "SoS","Bio"],
//    isStudent:true


// }

// const { name:Fullname, age, isStudent, gender, origin} = listOfStudent


// spread ...

// const {name, gender, ...rest} =listOfStudent
// console.log(listOfStudent)

// const {name, age, ...rest} = { name:"Edison", age:10, }

// console.log(listOfStudent)

//  console.log(Fullname)




//  geting individual items
//  const fullname = listOfStudent.name
//  console.log(listOfStudent.subject[0])
//  console.log(listOfStudent.age)
//  console.log(fullname)

//  // add to an object
//  listOfStudent.origin = "River State"

// listOfStudent.country = "United Kingdom"



// // delete and edit
// delete listOfStudent.country
// // edit
// listOfStudent.age = 10

// console.log(listOfStudent)


// object destructuring



// structure of object

//  student={
//    age:9,
//    gender:"female",
//    state:"Rivers",
//    subjects:["Maths", "English", "chemistry", "Biology"],
//    isStudent:true,
// }


// student.firstname = "Ada";
// student.lastname = "Thompson";
// student.middlename = "chima";
// delete student.middlename


// console.log(student)


// object destructuring

// const {age,firstname, lastname, gender,state, subjects, isStudent}=student
// console.log(age)


// renaming an object 

// const {age, firstname, lastname, gender:sex, state, subjects, isStudent}=student
// console.log()


// spread or cloning operator ...

// const {age,firstname, lastname, ...details}=student

// console.log(student)

// const { a, b, ...rest} = { a:100, b:100, c:300, d:500}


// console.log( rest)


// const { ...details}={age:16, state:"imo", gender:"male", istudent:false, }

// console.log( details)

// // object.age
// console.log(object.age)

// const smarthub = [
//     dataScience={
//    name:"ada",
//    age:9,
//   gender:"female",
//    state:"Rivers"
// },


//  webdev={
//    name:"ade",
//    age:10,
//   gender:"male",
//    state:"Rivers"
// }

// ]

//  assignment on object

// write a programme  that collect list of information of students in university department, 
// 1.list 10 department
// 2.Add the following, Age, Name, course, matric numbers, gender, phone numbers, email
// note: all data provided should be different, get the result of the  following data, name,email and matric number



// assignment 
// write a program that collect data of  foods (5) with the following( type, class, quantity, description, name. and add 3 features to it , display how you destructure, rename, add value and use the spread operator )

//  function in javascript - function are reusable components in javascript 



// function name() {
    
// }
// run, call, execute

//  dataAnalysis={
//  name:"ada",
//     age:9,
//    gender:"female",
//    state:"Rivers"
// }


// function greeting(){
//    console.log(` Hi my name is ${dataAnalysis.name}` )
// }

// greeting()


// const nestedArray = [1, "hello", true, { name: "Bob" }, [2, 3, 4]];

// function greeting(){
//    console.log(` Hi my name is ${nestedArray[3].name}` )
// }

// greeting()


// params -- you can also call it local variable
// local variables
// global variables - it can be access anywhere 

// const firstname = "Ada" // global varaible

// function names() {
//    console.log(`${firstname}`)
// }

// names()


// task. write a function that add two numbers and the sum is 10

// params --- local variable 
// function names(firstName , lastName) {
//    console.log(`${firstName} ${lastName}`)
   
// }

// names("ada", "chima")


// const a = 5
// const b = 5

// function sum () {
//    console.log(a + b)
// }

// sum()


function sum(a, b) {
   console.log(a + b)
   
}
sum( 5,  5)

// function sum(a, b) {
//    console.log(a + b)
   
// }
// sum( a= 5,  b= 5)


 dataAnalysis={
 name:"ada",
    age:9,
   gender:"female",
   state:"Rivers"
}


function data({name,age, gender, state}= dataAnalysis) {
 
   // return[name, age]- array

   // return  {name,age, gender, state }- object

   // return name - variable

   console.log(firstname, age, gender)
   
}

data()

//  const result = data()- when using the return 
//  console.log(result)


// return statement 

