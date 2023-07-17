const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
  };
  
  refs.inputEl.addEventListener('input', sizeText);
  refs.textEl.style.fontSize = `${refs.inputEl.value}px`;
  
  function sizeText() {
    refs.textEl.style.fontSize = `${refs.inputEl.value}px`;
  }