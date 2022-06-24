const input = document.querySelector('#validation-input');
const maxLength = Number(input.dataset.length)


input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    const inputLength = event.currentTarget.value.length;
    inputLength <= maxLength ? input.classList.add('valid') : input.classList.add('invalid');

}

function onInputFocus(event) {
    event.currentTarget.value = '';
    input.classList.remove('invalid');
    input.classList.remove('valid');
    
}

input.addEventListener('focus', onInputFocus);