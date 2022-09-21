const w = document.querySelectorAll('.wrapper');
const a = document.querySelector('.wrapper__first');
const b = document.querySelector('.wrapper__second');
const c = document.querySelector('.wrapper__third');
const d = document.querySelector('.wrapper__fourth');
const p1 = document.querySelector('.pagination--item1');
const p2 = document.querySelector('.pagination--item2');
const p3 = document.querySelector('.pagination--item3');
const p4 = document.querySelector('.pagination--item4');
const leftButton = document.querySelector('.slide_button--left');
const rightButton = document.querySelector('.slide_button--right');

const pages = [a, b, c, d];
const dots = [p1, p2, p3, p4];

let n = 0;

function slideRight() {

    dots.forEach((elem) => {
        elem.classList.remove('pagination--item--active');
    })
     n = n - 100;
     if (n < -300) {
        n = 0;
     }
     w.forEach((elem) => {
         elem.style.transform = `translateX(${n}%)`;
     })
     dots[Math.abs(n / 100)].classList.add('pagination--item--active');
}

function slideLeft() {

    dots.forEach((elem) => {
        elem.classList.remove('pagination--item--active');
    })
    n = n + 100;
    if (n > 0) {
        n = -300;
     }
    w.forEach((elem) => {
        elem.style.transform = `translateX(${n}%)`;
    })
    dots[Math.abs(n / 100)].classList.add('pagination--item--active');
}

rightButton.addEventListener('click', slideRight);
leftButton.addEventListener('click', slideLeft);
