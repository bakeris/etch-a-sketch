
const container = document.querySelector('#container');
for (let i=0; i<256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square)
};

const sqrs = document.querySelectorAll('.square')
sqrs.forEach(square => {
    square.addEventListener('mouseenter',(event) => {
        event.target.style.backgroundColor = 'red';
        setTimeout(function() {
            event.target.style.backgroundColor = "";
          }, 500);
        });
});


