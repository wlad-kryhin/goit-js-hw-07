const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

function onInputChangeSomething(event) {
    if (event.currentTarget.value === '') {
        span.textContent = 'незнакомец'
    } else {
        span.textContent = event.currentTarget.value
    }
    
}
input.addEventListener('input', onInputChangeSomething)