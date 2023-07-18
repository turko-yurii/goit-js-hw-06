function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreateEl = document.querySelector(`[data-create]`);

const btnDestroyEl = document.querySelector(`[data-destroy]`);

const amountEl = document.querySelector("input");

const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);
let boxesArray = [];

function createBoxes(amount) {
  amount = amountEl.value;
  let widthEl = 20;
  for (let i = 1; i <= amount; i++) {
    const randomColor = getRandomHexColor();
    widthEl += 10;
    const box = `<div style="background-color: ${randomColor}; height: ${widthEl}px; width: ${widthEl}px; margin-bottom: 5px"></div>`;
    boxesArray.push(box);
  }
  const boxesStr = boxesArray.join("");
  boxesEl.innerHTML = boxesStr;
}
function destroyBoxes() {
  boxesEl.innerHTML = "";
  boxesArray = [];
  amountEl.value = 0;
}