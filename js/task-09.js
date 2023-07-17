function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.textEl.textContent = color;
}