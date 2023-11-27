/*
// ***********************************
// method 1 using constructor function
// ***********************************
// creating function to see if the element we are selecting exist or not // we call helper function
// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }

// blue print or template for creating objects
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;
  // bind this to all function
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  // setting click events functionality for decrease,reset,increase
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

// creating decrease,increase,reset logic using prototype functions
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

// creating first & second counters
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);


// // checking functionality works or not by calling functions
// firstCounter.increase();
// firstCounter.increase();
// firstCounter.increase();
// firstCounter.decrease();
// secondCounter.reset();
// secondCounter.increase();
// secondCounter.increase();
// secondCounter.increase();
// secondCounter.decrease();
*/

/*
// ***********************************
// method 2 using class function
// ***********************************
// creating function to see if the element we are selecting exist or not // we call helper function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

// blue print or template for creating objects
class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;
    // bind this to all function // for functionality working bind methods to properties
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    // setting click events functionality for decrease,reset,increase buttons
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  // writing decrease,increase,reset logic functions/methods
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

// creating first & second counters // instances
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
*/

// ***********************************
// My Practice using class function
// ***********************************
// blue print or template for creating counters
// object = counter1,counter2,...
// default value 0 but we can set our interested number using value parameter

class Counter {
  constructor(object, value) {
    this.counter = object;
    this.value = value;
    this.resetBtn = object.querySelector(".reset");
    this.increaseBtn = object.querySelector(".increase");
    this.decreaseBtn = object.querySelector(".decrease");
    this.valueDOM = object.querySelector(".value");
    this.valueDOM.textContent = this.value;
    // bind this to all function // for functionality working bind methods to properties
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    // setting click events functionality for decrease,reset,increase buttons
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  // writing decrease,increase,reset logic functions/methods
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

// creating first,second & third counters// instances
const counter1 = new Counter(document.querySelector(".first-counter"), 100);
const counter2 = new Counter(document.querySelector(".second-counter"), 200);
const counter3 = new Counter(document.querySelector(".third-counter"), 300);

// we can create any number of counters using oop with ease

/*
// ***********************************
// My Practice using class function
// ***********************************
// blue print or template for creating counters
// object = counter1,counter2,...
// default value 0 we cannot change

class Counter {
  constructor(object) {
    this.counter = object;
    // this.value = value;
    this.resetBtn = object.querySelector(".reset");
    this.increaseBtn = object.querySelector(".increase");
    this.decreaseBtn = object.querySelector(".decrease");
    this.valueDOM = object.querySelector(".value");
    this.valueDOM.textContent = 0;
    // bind this to all function // for functionality working bind methods to properties
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    // setting click events functionality for decrease,reset,increase buttons
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  // writing decrease,increase,reset logic functions/methods
  increase() {
    this.valueDOM.textContent++;
  }
  decrease() {
    this.valueDOM.textContent--;
  }
  reset() {
    this.valueDOM.textContent = 0;
  }
}

// creating first,second & third counters// instances
const counter1 = new Counter(document.querySelector(".first-counter"));
const counter2 = new Counter(document.querySelector(".second-counter"));
const counter3 = new Counter(document.querySelector(".third-counter"));

// we can create any number of counters using oop with ease
*/
