// Показ вторых картинок при ховере
document.querySelectorAll(".balls-list li").forEach((item) => {
  const imgOne = item.querySelector(".image-one");
  const imgTwo = item.querySelector(".image-two");

  function mouseIn() {
    imgTwo.classList.replace("not-visible", "visible");
    imgOne.classList.replace("visible", "not-visible");
  }

  function mouseOut() {
    imgTwo.classList.replace("visible", "not-visible");
    imgOne.classList.replace("not-visible", "visible");
  }

  item.addEventListener("mouseover", mouseIn);
  item.addEventListener("mouseout", mouseOut);
});

//Категории товаров
const categories = document.querySelectorAll(".categories-list li");
const refs = {
  mainCont: document.querySelector(".categ-container"),
  balls: document.querySelector("balls-container"),
};

categories.forEach((item) => {
  const category = item.textContent;
  console.log(category);
  switch (category) {
    case "М'ячі":
      break;
    case "Форма":
      break;
    case "Нагороди":
      break;
    case "Кемпінг":
      break;
    case "Настільні ігри":
      break;
    case "Інше":
      break;
  }
});
