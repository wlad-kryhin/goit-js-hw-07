const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const newElements = ingredients.map(el => {
    const newEl = document.createElement('li');
    newEl.textContent = el
    return newEl;
}
)

const foods = document.querySelector('#ingredients')
foods.append(...newElements)