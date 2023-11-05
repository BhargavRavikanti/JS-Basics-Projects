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

function onIncrement() {}
function onDecrement() {}
function onReset() {}

// counter project end //
