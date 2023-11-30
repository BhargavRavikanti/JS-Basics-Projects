const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    // format date
    const formatDate = moment(date).format("MMMM Do, YYYY");

    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join("");
articlesContainer.innerHTML = articlesData;

////////////////////////
// using forEach()
// const articlesData = articles.forEach((article) => {
//   console.log(article);
// });

// Javascript uses the document object model (DOM) to manipulate the DOM elements. Rendering refers to showing the output in the browser.

// external popular library moment.js
