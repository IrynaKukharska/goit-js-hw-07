function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector(".js-container");
const input = document.querySelector(".input");
const create = document.querySelector(".create-btn");
const destroy = document.querySelector(".destroy-btn");

create.addEventListener("click", handleCreate);
destroy.addEventListener("click", handleDestroy);

// Обробка події на кнопку створення
function handleCreate() {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // очищуємо значення інпуту після створення колекції
  } else {
    alert("Введіть, будь ласка, число від 1 до 100 :)");
  }
}

// Створення квадратиків
function createBoxes(amount) {
  container.innerHTML = ""; // Очищуємо попередні елементи перед створенням нових

  let boxSize = 30; // Початковий розмір квадратика
  const boxBigger = 10; // Збільшення розміру квадратика

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += boxBigger; // Збільшуємо розмір для наступного квадратика
    fragment.appendChild(box); // Додаємо квадратик до фрагменту
  }
  container.appendChild(fragment); // Додаємо всі елементи до контейнера в одній операції
}

// Обробка події на кнопку видалення
function handleDestroy() {
  container.innerHTML = "";
}
