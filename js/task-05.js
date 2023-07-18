const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
  };
  
  refs.inputName.addEventListener('input', addTextFromInput);
  
  function addTextFromInput(event) {
    event.currentTarget.value === ''
      ? (refs.outputName.textContent = 'Anonymous')
      : (refs.outputName.textContent = event.currentTarget.value.trim());
      
  } 