const simpleColor = ['honeydew', 'paleturquoise', 'hotpink', 'red', 'aliceblue', 'orange', 'yellow'];
const hexColor = ['#F0FFF0', '#AFEEEE', '#FF69B4', '#FF0000', '#F0F8FF', '#FFA500', '#FFFF00'];
let colorFlipper = [];
let swapBtn1 = document.querySelector('#right-block_btn1');
let swapBtn2 = document.querySelector('#right-block_btn2');
let flipBtn = document.querySelector('#container-flip_btn');
let userOutput = document.querySelector('#container-input_field');
let swapbgColor = document.querySelector('#body');
let areEqual = false;
const colorPicker = () => {
    let colorChoose = colorFlipper[Math.floor(Math.random() * colorFlipper.length)];
    userOutput.innerHTML = colorChoose;
    userOutput.style.color = colorChoose;
    swapbgColor.style.backgroundColor = colorChoose;
}
const flipRandomColor = () => {
    if (areEqual) {
        colorFlipper = simpleColor;
        colorPicker();
    }
    else {
        colorFlipper = hexColor;
        colorPicker();
    }
}
const colorSwapping = () => {
    for (let i = 0; i <= colorFlipper.length; i++) {
        if (userOutput.innerHTML === colorFlipper[i]) {
            if (areEqual) {
                userOutput.innerHTML = simpleColor[i];
                userOutput.style.color = simpleColor[i];
                swapbgColor.style.backgroundColor = simpleColor[i];
            } else {
                userOutput.innerHTML = hexColor[i];
                userOutput.style.color = hexColor[i];
                swapbgColor.style.backgroundColor = hexColor[i];
            }
        }
    }
}
flipRandomColor();
flipBtn.addEventListener('click', () => {
    flipRandomColor();
});

function fun(abc) {
    if ( "simple" === abc) {
        areEqual = true;
        colorFlipper = hexColor;
        colorSwapping();   
    } else if ("hex" === abc) {
        areEqual = false;
        colorFlipper = simpleColor;
        colorSwapping(); 
    }
}