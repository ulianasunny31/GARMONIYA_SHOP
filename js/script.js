//Показ вторых картинок при ховере
document.querySelectorAll(".volley-list li").forEach((item) => {
  const imgOne = item.querySelector("#image-one");
  const imgTwo = item.querySelector("#image-two");

  function mouseIn() {
    imgTwo.classList.replace("not-visible", "visible");
    imgOne.classList.replace("visible", "not-visible");
  }

  function mouseOut() {
    imgTwo.classList.replace("visible", "not-visible");
    imgOne.classList.replace("not-visible", "visible");
  }

  imgOne.addEventListener("mouseover", mouseIn);
  imgTwo.addEventListener("mouseout", mouseOut);
});