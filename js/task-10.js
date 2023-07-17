function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  boxesEl: document.querySelector('#boxes'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDestroyEl: document.querySelector('[data-destroy]'),
};

refs.buttonCreateEl.addEventListener('click', createDiv);
refs.buttonDestroyEl.addEventListener('click', destroyBoxes);

const divArrEl = [];
let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');

    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divArrEl.push(divEl);

    width += 10;
    height += 10;
  }
  refs.boxesEl.append(...divArrEl);
}

function createDiv() {
  createBoxes(refs.inputEl.value);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = ''; // видалення вмісту <div id="boxes"></div>
  divArrEl.splice(0, divArrEl.length); // очищення масиву створених <div>
  width = 30; // повернення ширини <div> до початкового стану
  height = 30; // повернення висоти <div> до початкового стану
}