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
const newMycategory = document.querySelectorAll('#categories .item')
const newTest = [...newMycategory].forEach(element => console.log(`Категория : ${element.firstElementChild.textContent} , кол-во элементов : ${element.childNodes.length}`));