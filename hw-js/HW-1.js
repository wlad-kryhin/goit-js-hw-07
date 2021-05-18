const category = document.querySelector('#categories')
const allCaterogies = category.children
const lengthCategory = allCaterogies.length
function getCat(argument){
    console.log(`В списке ${argument} категории.`)
}
// const test2 = category.firstElementChild
// const test3 = test2.firstElementChild
// const auf = category.firstElementChild.length
// console.log(auf);
// console.log(test3.textContent);
getCat(lengthCategory)
const newMycategory = document.querySelectorAll('#categories .item h2')
const newTest = [...newMycategory].forEach(obj => console.log(`Категория : ${obj.textContent}`))

const allItems = document.querySelectorAll('#categories .item ul li');
console.log(document.querySelectorAll('#categories .item ul li'));
const newCateg = console.log(`Кол-во элементов : ${allItems}`);
console.log(allItems.children);