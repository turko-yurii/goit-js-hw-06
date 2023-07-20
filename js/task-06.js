const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', validateInput);

const inputLength = Number(inputEl.dataset.length);

function validateInput() {
  const trimmedValue = inputEl.value.trim();
  
  if (trimmedValue.length === inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
