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
const test = [...allCaterogies]
const newTest = test.forEach(obj => console.log(`Категория : ${obj.firstElementChild.textContent}`))
const newBaby = test.forEach(obj => console.log(`Кол-во элементов : ${obj.childNodes.length}`))


//     function allItems(title, item) {
//         console.log(`Категория ${title}`)
//         console.log(`Кол-во элементов ${item}`)
        
// }
     