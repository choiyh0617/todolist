const form = document.querySelector('form');
const input = document.querySelector('#input');
const ch = document.querySelector('.ch');
const detail = document.querySelector('.detail');
const ex = document.querySelector('#ex');

function checked() {
    if (ch.checked) {
        detail.style.textDecoration = 'line-through';
    } else {
        detail.style.textDecoration = 'none';
    }
}