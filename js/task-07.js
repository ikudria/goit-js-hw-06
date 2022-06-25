
const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')
// console.dir(inputRef);

inputRef.addEventListener('input', onInputValueChange);  


function onInputValueChange() {
    
        textRef.style.fontSize =  inputRef.value + 'px';
    }
  

 




