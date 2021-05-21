
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value')
const removeBtn = document.querySelector('[data-action="remove"]')
decrementBtn.addEventListener('click', () => {
    counter.textContent = counterValue -=1
});
incrementBtn.addEventListener('click', () => {
    counter.textContent = counterValue +=1
})

removeBtn.addEventListener('click', () => counter.textContent = 0)