const input = document.querySelector('#validation-input')

function validationInput(event) {
    if (event.currentTarget.value.length !== 6) {
         input.classList.replace('valid', 'invalid')
    } else {
      input.classList.add('valid')
    }
        
}

input.addEventListener('blur', validationInput)