const myCart = document.querySelector(".my-cart-list");

const cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

if (cart.length === 0) {
  cartSection.innerHTML = `
    <h1 class="empty-heading">Ваш кошик пустий.</h1>
    `;
}

cart.forEach((product) => {
  const productHTML = `
  <li class="cart-product">
  <img src="${product.image}" alt="${product.name}" class="cart-product-image">
  <h2 class="cart-product-name">${product.name}</h2>
  <p class="cart-product-price">${product.price} грн</p>
  <div class='cart-item-btns'>
  <button class="cart-product-remove" data-id="${product.id}">+</button>
  <p class="cart-product-quantity">Кількість: ${product.quantity}</p>
  <button class="cart-product-remove" data-id="${product.id}">-</button>
  </div>
  </li>
  `;

  myCart.innerHTML = productHTML;
});
