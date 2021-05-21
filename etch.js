
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
    createSquare ()
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
// creates div's which are squares 
function createSquare () {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square)
}

// this is clear suqares function
function clearSqr () {
    //function that clears all squares
   const clearSqr = document.getElementsByClassName('square')
   for (let i = clearSqr.length-1; i>=0; i--) {
       clearSqr[i].remove();
   }
   //function that creates new squares
    let sqrNum = prompt('Enter number of squares between 4-64')
    let newNum = Math.pow(sqrNum,2)
    for (let i=0; i<newNum; i++){
    createSquare()

//gives square a color whwn mouse enters a square 
let columns = container.style.setProperty('grid-template-columns', 'repeat(' + sqrNum + ', 1fr)');
let rows = container.style.setProperty('grid-template-rows', 'repeat(' + sqrNum + ', 1fr)');
  };
  changeColor()
};

// this is clear button with added function to add and remove squares

let columns = container.style.setProperty('grid-template-columns', 'repeat(' + defCol + ', 1fr)');
let rows = container.style.setProperty('grid-template-rows', 'repeat(' + defRow + ', 1fr)');
