/////////////////////////////////////
/////////////////////////////////////
// 0001 - Introduction to JS & Variables
/////////////////////////////////////
/////////////////////////////////////

/////////////////////////////////////
// 001 - DOM and Event Fundamentals
/////////////////////////////////////

// selecting(get) elements
// const headingElement = document.getElementById("headingElement");
// console.log(headingElement);

// manipulating or modifying the text content
// headingElement.textContent = "4.0 Technologies";
// console.log(headingElement);

// manipulating the styles
// headingElement.style.color = "blue";

// How to manipulate HTML and CSS Based on User Actions?
// Events

// method 1 - onclick Event
// Defining a Function
// function manipulateStyles() {
//   headingElement.textContent = "4.0 Technologies";
//   headingElement.style.color = "blue";
// }

// // method 2 - using addEventListener
// const button = document.getElementById("button");

// button.addEventListener("click", function () {
//   console.log("Hi, this is Rahul");
// });

// *************************
// cat project
// *************************

// cat project start //

// =================================
// method 1 - using onclick event
// =================================

// nxt wave code

// function switchOff() {
//   document.getElementById("bulbImage").src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
//   document.getElementById("catImage").src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
//   document.getElementById("switchStatus").textContent = "Switched Off";
//   document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
//   document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
// }

// function switchOn() {
//   document.getElementById("bulbImage").src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
//   document.getElementById("catImage").src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
//   document.getElementById("switchStatus").textContent = "Switched On";
//   document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
//   document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
// }

// =================================
// method 2 - using addEventListener method
// =================================

// const bulbImage = document.getElementById("bulbImage");
// const switchOff = document.querySelector(".off-switch");
// const switchOn = document.querySelector(".on-switch");
// const catImage = document.getElementById("catImage");
// const switchStatus = document.getElementById("switchStatus");

// // switch off
// switchOff.addEventListener("click", function () {
//   bulbImage.src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
//   catImage.src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
//   switchStatus.textContent = "Switched Off";
//   switchOff.style.backgroundColor = "#cbd2d9";
//   switchOn.style.backgroundColor = "green";
// });

// // switch on
// switchOn.addEventListener("click", function () {
//   bulbImage.src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
//   catImage.src =
//     "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
//   switchStatus.textContent = "Switched On";
//   switchOn.style.backgroundColor = "#cbd2d9";
//   switchOff.style.backgroundColor = "red";
// });

// cat project end //

/////////////////////////////////////
// 002 - Primitive Types & Conditionals
/////////////////////////////////////

// counter project start //

// =================================
// method 1 - using onclick event
// =================================
/*
let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterElement.textContent = updatedCounterValue;

  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "black";
  }
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  counterElement.textContent = updatedCounterValue;

  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "black";
  }
}

function onReset() {
  // updatedCounterValue = 0;
  // counterElement.textContent = updatedCounterValue;

  // for me this method is better
  counterElement.textContent = 0;
  counterElement.style.color = "black";
}
*/
// =================================
// method 2 - using addEventListener method
// =================================

// counter project end //

/////////////////////////////////////
// 003 - Input Element and Math Functions
/////////////////////////////////////
// console.log(Math.random()); // returns 0 - 1 like 0.123,04567

// // The Math.ceil() function always rounds a number up to the next largest number.
// console.log(Math.ceil(51.12)); // 52
// console.log(Math.ceil(9.01)); // 10
// console.log(Math.ceil(90.01)); // 91

// getting random number from 1 to 100
// console.log(Math.ceil(Math.random() * 100));
// or
// let randomNumber = Math.random() * 100; // returns between 0 to 100
// // console.log(randomNumber);
// randomNumber = Math.ceil(randomNumber); // returns from 1 to 100
// console.log(randomNumber);

// sign in form page
// Input Element
// Text Input
// let inputElement = document.getElementById("inputElement");
// let signInTextElement = document.getElementById("signInText");

// function signIn() {
//   let inputValue = inputElement.value;
//   let verifyText = "Hi " + inputValue + ", verifying your account...";
//   signInTextElement.textContent = verifyText;
// }

// Guessing Game start //
/*
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  // console.log(randomNumber);
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too Hig! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  } else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too low! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  } else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  } else {
    gameResult.textContent = "Please Provide a valid user input.";
    gameResult.style.backgroundColor = "red";
  }
}
*/
// Guessing Game end //
