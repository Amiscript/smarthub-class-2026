// DOM - Document Object Module


// console.log(document.body);
// console.log(document.head);

// selectors

// by t ag name
// const button = document.getElementsByTagName("button")
// console.log(button);
// by class
// const Getstarted = document.getElementsByClassName("getstarted")
// console.log(Getstarted);

// by id
// const started = document.getElementById("second")
// console.log(started);

// queryselector
// const buttontag = document.querySelector("button")
// console.log(buttontag);
// // class
// const buttonclass = document.querySelector(".first")
// console.log(buttonclass);

// // id
// const buttonid = document.querySelector("#second")
// console.log(buttonid);

// // all 
// const all = document.querySelectorAll("button")


// innertext
// innerhtml
//Textcontent



//select


const Hello = document.querySelector("h1")
const numb = 2 + 2 
// let a = 2
// let b = 2 
// const c = a + b 
//  Hello.textContent = "chima"
// Hello.innerHTML = "<button>Click</button>"
// Hello.innerHTML = "Hello"
// Hello.innerText = "Etoro"

// Hello.textContent = `2 + 2 = ${numb}`

// using Dom create  paragraph 
// write i will submit my assisgnment this week
// change  the h1 to a button 

// input value
const input = document.querySelector(".first")
const input2 = document.querySelector(".second")
const submit = document.querySelector("button")
const result = document.querySelector("h1")

// const one = Number(input.value)
// const two = Number(input2.value)


//  events

// click events- when a user clicks on an element
// double click- when a user double clicks on an element
// mouseover- when a user hovers over an element
// mouseout- when a user moves the mouse away from an element
// keydown- when a user presses a key
// keyup- when a user releases a key
// keypress- when a user presses and releases a key
// parseInt- when a user enters a number in a string format and we want to convert it to a number
// Number- when a user enters a number in a string format and we want to convert it to a number

const add = () => {
    // const one = parseInt(input.value)
    // const two = parseInt(input2.value)
    const one = Number(input.value)
    const two = Number(input2.value)
    const sum = one * two   
    result.textContent = sum   
 
}

submit.addEventListener("click", add)


// JSON - JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.

// JSON syntax rules
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays


student = [
    {
        name: "Chima",
        age: 20,
        course: "Web development"
    },
    {   
        name: "John",
        age: 22,
        course: "Data Science"  
    },
    {
        name: "Jane",
        age: 21,
        course: "Cybersecurity"
    }
]

// JSON.stringify() - converts a JavaScript object or value to a JSON string
// JSON.parse() - parses a JSON string to a JavaScript object or value

// JSON.stringify(student)
 const studentJSON = JSON.stringify(student)


// const parsedStudent = JSON.parse(studentJSON)
// console.log(parsedStudent);


// localStorage - allows you to store data in the browser

// localStorage methods

//setItem - allows you to set an item in the localStorage
 
// localStorage.setItem(studentJSON)
localStorage.setItem("student", studentJSON);

const savedData = localStorage.getItem("student");
console.log(savedData);
// getItem - allows you to get an item from the localStorage
// removeItem - allows you to remove an item from the localStorage
// clear - allows you to clear all items from the localStorage

localStorage.setItem("chima", studentJSON)
 JSON.parse(studentJSON)
 const chimadata = localStorage.getItem("chima")
 console.log(chimadata);
 localStorage.removeItem("chima")
 localStorage.clear()
