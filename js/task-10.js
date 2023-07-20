function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
inputEl.addEventListener("input", onGetAmount);
createBtnEl.addEventListener("click", onCreateBtn);
destroyBtnEl.addEventListener("click", destroyBoxes);
function onGetAmount(event) {
  createBtnEl.value = event.currentTarget.value;
}
function onCreateBtn() {
  createBoxes(createBtnEl.value);
}
function createBoxes(amount) {
  let boxArray = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxSize += 10;
    boxArray.push(boxEl);
  }
  boxesEl.append(...boxArray);
}
function destroyBoxes() {
  inputEl.value = "";
  boxesEl.innerHTML = "";
}