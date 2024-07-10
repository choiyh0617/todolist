const form = document.querySelector('form');
const ex = document.querySelector('#ex');
const input = document.querySelector('input');
const ch = document.querySelector('.ch');
const detail = document.querySelector('.detail');
const del = document.querySelector('.del');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);
    const div = document.createElement('div');
    div.innerText = input.value;
    ex.appendChild(div);
});

ch.addEventListener('change', checked);
function checked() {
    if (ch.checked) {
        detail.style.textDecoration = 'line-through';
    } else {
        detail.style.textDecoration = 'none';
    }
}
del.addEventListener('click',()=>{
    detail.innerText=' '
    ch.innerHTML=' '
    del.innerHTML=' '
})