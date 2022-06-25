
const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')
// console.dir(inputRef);

inputRef.addEventListener('input', onInputValueChange);  


function onInputValueChange(event) {
    // console.log(event.currentTarget.value);
        textRef.style.fontSize =  event.currentTarget.value + 'px';
    }
  


 




