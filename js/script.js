// Показ вторых картинок при ховере
document
  .querySelectorAll(".balls-list li")
  .forEach((item) => showAndHide(item));

document
  .querySelectorAll(".rewards-list li")
  .forEach((item) => showAndHide(item));
//Категории товаров
const categories = document.querySelectorAll(".categories-list li");
const refs = {
  mainCont: document.querySelector(".categ-container"),
  balls: document.querySelector("balls-container"),
};

//??? НЕПРАВИЛЬНО НУЖЕН ОБРАБОТЧИК НАЖАТИЯ
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

function showAndHide(i) {
  const imgOne = i.querySelector(".image-one");
  const imgTwo = i.querySelector(".image-two");

  function mouseIn() {
    imgTwo.classList.replace("not-visible", "visible");
    imgOne.classList.replace("visible", "not-visible");
  }

  function mouseOut() {
    imgTwo.classList.replace("visible", "not-visible");
    imgOne.classList.replace("not-visible", "visible");
  }

  i.addEventListener("mouseover", mouseIn);
  i.addEventListener("mouseout", mouseOut);
}
