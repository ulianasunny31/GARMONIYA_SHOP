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
  balls: document.querySelector(".balls-container"),
  uniform: document.querySelector(".uniform-container"),
  rewards: document.querySelector(".rewards-container"),
  camping: document.querySelector(".camping-container"),
  boardgames: document.querySelector(".boardgames-container"),
  other: document.querySelector(".other-container"),
  categList: document.querySelector(".categories-list"),
};

//??? НЕПРАВИЛЬНО НУЖЕН ОБРАБОТЧИК НАЖАТИЯ
refs.categList.addEventListener("click", showCategoryProducts);

function showCategoryProducts(e) {
  e.preventDefault();

  const categName = e.target.closest(".categ-name");

  if (!categName) {
    console.log("Category name was not found!");
    return;
  }

  const category = categName.textContent;
  console.log(`Selected: ${category}`);

  Object.values(refs).forEach((ref) => {
    if (ref && ref !== refs.categList && ref !== refs.mainCont) {
      ref.style.display = "none";
    }
  });

  switch (category) {
    case "М'ячі":
      refs.balls.style.display = "block";
      break;
    case "Форма":
      refs.uniform.style.display = "block";
      break;
    case "Нагороди":
      refs.rewards.style.display = "block";
      break;
    case "Кемпінг":
      refs.camping.style.display = "block";
      break;
    case "Настільні ігри":
      refs.boardgames.style.display = "block";
      break;
    case "Інше":
      refs.other.style.display = "block";
      break;
  }
}

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
