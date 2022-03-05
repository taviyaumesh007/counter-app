const count = document.getElementById('count');
let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let sub = document.getElementById('sub');

plus.addEventListener('click', () => {
    count.innerHTML++;
    applyColor()
})
sub.addEventListener('click', () => {
    count.innerHTML--;
    applyColor();
})
reset.addEventListener('click', () => {
    count.innerHTML = 0;
    applyColor();
})

function applyColor() {
    if (count.innerHTML > 0) {
        count.style.color = 'rgb(22, 253, 1)';
    }
    else if(count.innerHTML < 0) {
        count.style.color = 'rgb(253, 1, 1)';
    }
    else{
        count.style.color =' rgb(5, 1, 253)';
    }
}