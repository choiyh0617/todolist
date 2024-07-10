const form = document.querySelector('form');
const input = document.querySelector('input');
const title = document.querySelector('div')
const ch = document.querySelector('.ch');
const detail = document.querySelector('.detail');
const del = document.querySelector('.del');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
});

function checked() {
    if (ch.checked) {
        detail.style.textDecoration = 'line-through';
    } else {
        detail.style.textDecoration = 'none';
    }
}

ch.addEventListener('change', checked);
