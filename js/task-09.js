function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());
const body = document.querySelector('body');
const colorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');


colorBtn.addEventListener('click', onColorBtnClick); 

function onColorBtnClick() {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorValue.textContent = currentColor;  
  
}