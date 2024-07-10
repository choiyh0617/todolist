const form = document.querySelector('form');
const input = document.querySelector('input');
const ch = document.querySelector('.ch');
const detail = document.querySelector('.detail');
const del = document.querySelector('.del');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);
    const div = document.createElement('div');
    div.innerText = input.value;
    ch.innerHTML = 
    ul.appendChild(li);
});

function checked() {
    if (ch.checked) {
        detail.style.textDecoration = 'line-through';
    } else {
        detail.style.textDecoration = 'none';
    }
}