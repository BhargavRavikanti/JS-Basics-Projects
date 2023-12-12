////////////////////////////////////////
// Modern JavaScript Development_Modules,Tooling and Functional
////////////////////////////////////////

// import { totalPrice } from './shoppingCart';

// =====================================
// 001 - Section Overview
// =====================================
// =====================================
// 002 -
// =====================================
// =====================================
// 003 - An Overview of Modern Javascript Development
// =====================================

// =====================================
// 004 - An Overview of Modules in JavaScript
// =====================================

// =====================================
// 005 - Exporting and importing in ES6 Modules
// =====================================
// Importing Module
// import { addtoCart, totalPrice as price, tq } from './shoppingCart.js';

// addtoCart('bread', 5);
// console.log(price, tq);

// console.log('Importing Module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addtoCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addtoCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2); // not recomonded style
// console.log(price);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// =====================================
// 006 - The Module Pattern
// =====================================

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalquantity = 23;

//   const addtoCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shippng cost is ${shippingCost})`
//     );
//   };

//   const oderstock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   return {
//     addtoCart,
//     cart,
//     totalPrice,
//     totalquantity,
//   };
// })();

// shoppingCart2.addtoCart('apple', 4);
// shoppingCart2.addtoCart('pizza', 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost);

// =====================================
// 007 - Top-Level await (ES2022)
// =====================================
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// =====================================
// 008 - Common JS Modules
// =====================================

// =====================================
// 009 - A Brief Introduction to the Command Line
// =====================================

// =====================================
// 010 - Introduction to NPM
// =====================================
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

// =====================================
// 011 - Bundling With Parcel and NPM Scripts
// =====================================

// =====================================
// 012 - Configuring Babel and Polyfiling
// =====================================
// =====================================
// 013 - Review Writing Clean and Modern Javascript
// =====================================
// REVIEW : MODERN AND CLEAN CODE

// READABLE CODE
// GENERAL
// FUNCTIONS
// OOP
// AVOID NESTED CODE
// ASYNCHRONOUS CODE

// READABLE CODE
// 1) Write code so that others can understand it
// 2) Write code so that you can understand it in 1 year
// 3) Avoid too "clever" and overcomplicated solutions
// 4) Use descriptive variable names:what they contain
// 5) Use descriptive function names:what they do

// GENERAL
// 1) use DRY priciple(refactor your code)
// 2) Don't pollute global namespace,encapsulate instead
// 3) Don't use var
// 4) Use strong type checks(=== and !==)

// FUNCTIONS
// 1) Generally,functions should do only one thing
// 2) Don't use more than 3 function parameters
// 3) Use default parameters whenever possible
// 4) Generally,return same data type as received
// 5) Use arrow functions when then make code more redeable

// OOP
// 1) Use ES6 classes
// 2) Encapsulate data and don't mutate it from outside the class
// 3) implement method chaining
// 4) Do not use arrow functions as methods(in regular objects)

// AVOID NESTED CODE
// 1) Use early return(guard clauses)
// 2) Use ternary (conditonal) or logical operators instead if
// 3) Use multiple if instead of if/else-if
// 4) Avoid for loops,use array methods instead
// 5) Avoid callback-based asynchronous APIs

// ASYNCHRONOUS CODE
// 1) Consume promises with async/await for best readebility
// 2) Whenever possible,run promises in parallel(Promise.all)
// 3) Handle errors and promise rejections

// =====================================
// 014 - Declarative and Functional Javascript principles
// =====================================
// IMPERATIVE VS. DECLARATIVE CODE

// Two fundamentals ways of writing ways of writing code(paradigms)
// IMPERATIVE
// 1) Programmer explains "HOW to do things"
// 2) We explain the computer every single step it has to follow acieve a result
// Example : Step by step receipe of a cake

const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled[i] = arr[i] * 2;
}
console.log(doubled);

// DECLARATIVE
// 1) Programmer explains "WHAT to do"
// 2) We simply describe the way the computer should achieve the result
// 3) The HOW(step by step instructions) gets abstracted away
// Example : Description of a cake
const array = [2, 4, 6, 8];
const doubledd = array.map(n => n * 2);
console.log(doubledd);

// FUNCTIONAL PROGRAMMING PRINCIPLES

// FUNCTIONAL PROGRAMMING
// Declaritive programming paradigm
// Based on the idea of writing software by combining many pure functions,avoiding side effects and mutating data

// side effect : Modification(mutation) of any data outside of the function(mutating external variables,logging to console,writing to DOM,etc)

// Pure function : Function without side effects.Does not depend on external variables.Given the same inputs,always returns the same outputs.

// Immutability : State(data) is never modified! istead, state is copied and the copy is mutated and returned.

// Examples : React,Redux

// Functional Programming Techniques
// 1) Try to avoid data mutations mutations
// 2) Use built-in methods that don't produce side effects
// 3) Do data transformations with methods such as .map(),.filter() and .reduce()
// 4) Try to avoid side effects in functions:this is of course not always possible!

// =====================================
// 015 -
// =====================================
