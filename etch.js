
const container = document.querySelector('#mainContainer');
let cNum = 15;
let rNum = 15;
let sqNum = cNum * rNum;
//loops trough grid and creates divs
for (let i=0; i<sqNum; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square)
};
//gives square a color whwn mouse enters a square 
const sqrs = document.querySelectorAll('.square')
sqrs.forEach(square => {
    square.addEventListener('mouseenter',(event) => {
        event.target.style.backgroundColor = 'red';
        setTimeout(function() {
            event.target.style.backgroundColor = "red";
          }, 500);
        });
});

const grid = document.getElementById('#mainContainer');

const clear = document.getElementById('#clear');



let columns = container.style.setProperty('grid-template-columns', 'repeat(' + cNum + ', 1fr)');;
let rows = container.style.setProperty('grid-template-columns', 'repeat(' + rNum + ', 1fr)');
