const myCart = document.querySelector(".my-cart-list");
const cartSection = document.querySelector(".main-cart-section");
const totalSumSpan = document.querySelector(".total-span");
let sum = 0;
let totalSum = 0;

const cart = JSON.parse(localStorage.getItem("cart")) || [];

myCart.addEventListener("click", changeQuantity);
myCart.addEventListener("click", removeFromCart);

if (cart.length === 0) {
  cartSection.innerHTML = `
    <h1 class="empty-heading">Ваш кошик пустий.</h1>
    `;
}

cart.forEach((product) => {
  renderItem(product);
  summing(product);
});

totalSumSpan.textContent = totalSum;

function summing(product) {
  sum = product.price * product.quantity;

  return (totalSum += sum);
}

function recalculateTotalSum() {
  totalSum = 0;
  cart.forEach((product) => {
    totalSum += product.price * product.quantity;
  });

  totalSumSpan.textContent = totalSum;

  localStorage.setItem("cart", JSON.stringify(cart));
}

//
//
//

function changeQuantity(e) {
  e.stopPropagation();
  e.preventDefault();
  const target = e.target;

  const productItem = target.closest(".cart-product");
  if (!productItem) return;
  const ID = productItem.dataset.id;
  const product = cart.find((item) => item.id === ID);

  const addBtn = target.closest(".cart-product-add");
  const reduceBtn = target.closest(".cart-product-reduce");

  if (addBtn) {
    product.quantity += 1;
  } else if (reduceBtn) {
    if (product.quantity > 0) product.quantity -= 1;
  }

  if (product.quantity === 0) {
    const index = cart.findIndex((item) => item.id === ID);
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    productItem.remove();
  }

  if (cart.length === 0) {
    cartSection.innerHTML = `
    <h1 class="empty-heading">Ваш кошик пустий.</h1>
    `;
  }

  const quantityElem = productItem.querySelector(".cart-product-quantity");
  quantityElem.textContent = product.quantity;

  recalculateTotalSum();
}

//
//
//
// Находит все элементы с классом .my-cart-list
const cartListItems = document.querySelectorAll(".my-cart-list li");

// Если есть хотя бы один элемент
if (cartListItems.length > 0) {
  // У последнего элемента устанавливает margin-bottom: 0
  cartListItems[cartListItems.length - 1].style.marginBottom = "0";
}
//
//
//
function removeFromCart(e) {
  e.stopPropagation();
  e.preventDefault();
  const target = e.target;

  const productItem = target.closest(".cart-product");
  if (!productItem) return;
  const ID = productItem.dataset.id;
  const product = cart.find((item) => item.id === ID);

  const remover = target.closest(".cart-product-remove");

  if (!remover) return;
  const index = cart.findIndex((item) => item.id === ID);
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  productItem.remove();

  recalculateTotalSum();

  if (cart.length === 0) {
    cartSection.innerHTML = `
    <h1 class="empty-heading">Ваш кошик пустий.</h1>
    `;
  }
}
//
//

//Rendering items in the cart
function renderItem(product) {
  const productHTML = `
  <li class="cart-product" data-id="${product.id}">
  <img src="${product.picture}" alt="${product.name}" class="cart-product-image">
  <div> 
  <h2 class="cart-product-name">${product.name}</h2>
  <p class="cart-product-price">${product.priceText}</p>
  <div class='cart-flex-div'>
  <div class='cart-item-btns'>
  <button class="cart-product-add">+</button>
  <p class="cart-product-quantity">${product.quantity}</p>
  <button class="cart-product-reduce">-</button>
  </div>
  <buttton class="cart-product-remove">
  <svg width='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
  </buttton>
  </div>
  </div>
  </li>
  `;

  myCart.insertAdjacentHTML("beforeend", productHTML);
}
