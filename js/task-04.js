let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', decrementValue);
refs.incrementBtn.addEventListener('click', incrementValue);

function incrementValue() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}

function decrementValue() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}