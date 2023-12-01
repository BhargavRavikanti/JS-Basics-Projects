'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//////////////////////////////////////////////
// 16 - Asynchronous Javascript Promises,Async_Await,and AJAX
//////////////////////////////////////////////

// ===========================================
// 001 - Section Intro
// ===========================================
// ===========================================
// 002 -
// ===========================================
// ===========================================
// 003 - Asynchronous Javascript,AJAX and API,s
// ===========================================
// AJAX : Asynchronous Javascript And XML : Allows us to communicate with remote web servers in an asynchronous way.With AJAX calls,we can request data from web servers dynamicalls.

// API : Application Programmimg Interface

// ===========================================
// 004 -
// ===========================================
// ===========================================
// 005 - Our First AJAX Call_XML HttpRequest
// ===========================================
// old school style XML http request
// Cross-origin resource sharing (CORS)

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
// getCountryData('usa');
getCountryData('germany');

/////////////////////////////////////////////
// youtube

// console.log(data);
// console.log(data.flags.png);
// console.log(data.name.common);
// console.log(data.region);
// console.log((+data.population / 1000000).toFixed(1));
// console.log(data.languages.eng);
// console.log(data.currencies.USD.symbol);

fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {
    console.log(data[0]);
  });
// fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data[0].flags.png);
//     console.log(data[0].name.common);
//     console.log(data[0].region);
//     console.log((+data[9].population / 1000000).toFixed(1));
//     console.log(data[0].languages.eng);
//     console.log(data[0].currencies.AUD.symbol);
//   });
//////////////////////////////////////////////////
*/

// ===========================================
// 006 -
// ===========================================
// ===========================================
// 007 - Welcome to CallBack Hell
// ===========================================
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
*/

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ===========================================
// 008 -
// ===========================================
// ===========================================
// 009 -
// ===========================================
// ===========================================
// 010 -
// ===========================================
