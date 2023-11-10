/////////////////////////////////////
/////////////////////////////////////
// 0002 - Arrays and Objects
/////////////////////////////////////
/////////////////////////////////////

/////////////////////////////////////
// 001 - Arrays and More DOM Manupulations
/////////////////////////////////////
// // Creating an Array
// let myArray = [5, "six", 2, 8.2];
// console.log(myArray);
// // Accessing an Array Item
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray.length); // returns number of items in the array
// console.log(myArray.push(true)); // adds new items to the end of the array
// console.log(myArray);
// console.log(myArray.pop()); // removes last item of an array, and returns that item.
// console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);

// More DOM Manipulations
// task // creating html element h1,creating text on h1, pushing h1 to exisitng div id myConatiner, displaying h1 on web page, creating button,creating text on button,pushing button to div id myContainer,displaying button on web page

// Creating HTMNL Heading Element
let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";
// console.log(h1Element);

// // Appending to Document Body Object
// document.body.appendChild(h1Element);

// Appending to Existing Container Element
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);

// Creating and Appending Button Element
let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";
containerElement.appendChild(btnElement);

// How to manipulateHTML Heading based on USER Actions?
// method 1
// Adding Event Listeners Dynamically

// method 2
// btnElement.addEventListener("click", function () {
//   h1Element.textContent = "4.0 Technologies";
// });
