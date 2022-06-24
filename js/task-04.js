

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

let currentValue = 0;

const onDecrementBtnClick = () => {
    currentValue -= 1;
    // console.log(currentValue);
    counter.textContent = currentValue;

}

decrementBtn.addEventListener('click', onDecrementBtnClick); 

const onIncrementBtnClick = () => {
    currentValue += 1;
    // console.log(currentValue);
    counter.textContent = currentValue;

}

incrementBtn.addEventListener('click', onIncrementBtnClick); 








