const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validData);

function validData(event) {
  inputEl.classList.remove('valid');
  inputEl.classList.remove('invalid');

  inputEl.getAttribute('data-length') == event.currentTarget.value.length
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}