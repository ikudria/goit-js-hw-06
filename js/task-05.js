
const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputValueChange);

function onInputValueChange(event) {
    // console.log(event.currentTarget.value);
    event.currentTarget.value ? refs.nameLabel.textContent = event.currentTarget.value : refs.nameLabel.textContent = "Anonymous";
}