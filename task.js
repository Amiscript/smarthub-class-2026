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
    const sum = one + two   
    result.textContent = sum   
 
}




submit.addEventListener("click", add)




