let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h5>Sorry, no products matched your search</h5>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join("");
};

displayProducts();

// Text Filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  // keyup - fired when key released
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// Filter Buttons

const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join("");
};

displayButtons();
