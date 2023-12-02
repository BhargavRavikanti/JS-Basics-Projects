// we can get data from api using different methods like
// 1) XMLHttpRequest() [i call xhr method,very old style]
// 2) changing to promises
// 3) using fetch
// 4) using Async Await

// ***************************************
// 1) XMLHttpRequest() [i call xhr method,very old style]
// ***************************************

/*
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      img.classList.add("shake-img");
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;
      const random = Math.random() * 1000; // setting random seconds shake-img should shake when we click on button
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, random);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
*/

// ***************************************
// 2) changing to promises
// ***************************************
// it will be easy to understand code even if add more code in future

/*
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  getData(URL)
    .then((response) => displayData(response))
    .catch((error) => {
      console.log(error);
    });
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  img.classList.add("shake-img");
  const { value: joke } = JSON.parse(data);
  content.textContent = joke;
  const random = Math.random() * 1000; // setting random seconds shake-img should shake when we click on button
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
*/

// ***************************************
// 3) using fetch
// ***************************************
// fetch is provided by the browser
// fetch is promise based so we can use then and catch methods

/*
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function displayData({ value: joke }) {
  img.classList.add("shake-img");
  // const { value: joke } = data;
  content.textContent = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
*/

// ***************************************
// 4) using Async Await
// ***************************************
// modern method

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  img.classList.add("shake-img");
  // const { value: joke } = data;
  content.textContent = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
