const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
  };
  
  refs.inputName.addEventListener('input', addTextFromInput);
  
  function addTextFromInput(event) {
    const trimmedValue = event.currentTarget.value.trim();
  
    refs.outputName.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
  }
 
