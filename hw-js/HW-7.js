const inputControl = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputControl.addEventListener('input',onTextChangeSize)
function onTextChangeSize(event) {
   
        spanText.style.fontSize += '20px';
  
     
}