
const container = document.querySelector('#mainContainer');
const clear = document.getElementById('clear');
clear.addEventListener('click',clearSqr)
const sqrs = document.querySelectorAll('.square')
const colorValue = document.getElementById('favcolor').value
const colorButton = document.getElementById('favcolor')
colorButton.addEventListener('input',changeColor)
const remove = document.getElementById('delete')
remove.addEventListener('click',restart)


//default window
let defCol = 20
let defRow = 20
let defNum = defCol * defRow;
for (let i=0; i<defNum; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square)
    changeColor ()
};


//gives square a color whwn mouse enters a square 
function changeColor () {
    const sqrs = document.querySelectorAll('.square')
    const colorValue = document.getElementById('favcolor').value
    sqrs.forEach(square => {
        square.addEventListener('mouseenter',(event) => {
            event.target.style.backgroundColor = colorValue;
            });
    });
};



// this function clear all squares background
function restart () {
    const restart = document.getElementsByClassName('square')
   for (let i = restart.length-1; i>=0; i--) {
       restart[i].style.backgroundColor = 'black';
   }
};

// this is clear suqares function
function clearSqr () {
    //function that clears all squares
   const clearSqr = document.getElementsByClassName('square')
   for (let i = clearSqr.length-1; i>=0; i--) {
       clearSqr[i].remove();
   }
   //function that creates new squares
    let sqrNum = prompt('Enter number of squares between 4-64')
    if (sqrNum > 64 || sqrNum < 4 || Number.isNaN(sqrNum)) {
        alert('Enter a number from 4-64 range')
    } else {
    let newNum = sqrNum * sqrNum
    for (let i=0; i<newNum; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square)
    changeColor()
};
//gives square a color whwn mouse enters a square 
let columns = container.style.setProperty('grid-template-columns', 'repeat(' + sqrNum + ', 1fr)');
let rows = container.style.setProperty('grid-template-rows', 'repeat(' + sqrNum + ', 1fr)');
  };
};

// this is clear button with added function to add and remove squares

let columns = container.style.setProperty('grid-template-columns', 'repeat(' + defCol + ', 1fr)');
let rows = container.style.setProperty('grid-template-rows', 'repeat(' + defRow + ', 1fr)');
