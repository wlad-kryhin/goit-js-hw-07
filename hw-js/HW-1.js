const category = document.querySelector('#categories')
const allCaterogies = category.children.length
function getCat(argument) {
    console.log(`В списке ${argument} категории.`)
}
getCat(allCaterogies)
const newMyCategory = document.querySelectorAll('.item')

const newTest = [...newMyCategory].forEach(element => console.log(`Категория : ${element.querySelector('h2').textContent} , кол-во элементов : ${element.querySelectorAll('li').length}`));