const cartSection = document.querySelector(".main-cart-section");

const cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

if (cart.length === 0) {
  cartSection.innerHTML = `
    <h1 class="empty-heading">Ваш кошик пустий.</h1>
    `;
}
