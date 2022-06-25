
const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

const defString = "Anonymous";

refs.input.addEventListener('input', onInputValueChange);

function onInputValueChange(event) {
   
    event.currentTarget.value ? refs.nameLabel.textContent = event.currentTarget.value : refs.nameLabel.textContent = defString;
}