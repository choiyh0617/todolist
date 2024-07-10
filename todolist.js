const form = document.querySelector('form');
const input = document.querySelector('input');
const ch = document.querySelector('.ch');
const detail = document.querySelector('.detail');
const del = document.querySelector('.del');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const span = document.createElement('span');
    const newdel = document.createElement('button');
    const newch = document.createElement('checkbox');
    const txt = document.createTextNode(input.value);
    const chtxt = document.createTextNode('삭제');
    span.appendChild(txt);
    newdel.appendChild(chtxt);
    newch.className += 'ch';
    newdel.className += 'del';
    span.className +='detail';
    document.body.appendChild(span);
    document.body.appendChild(newdel);
    input.value = ''
})

ch.addEventListener('change', checked);
function checked() {
    if (ch.checked) {
        detail.style.textDecoration = 'line-through';
    } else {
        detail.style.textDecoration = 'none';
    }
}

del.addEventListener('click',()=>{
    detail.remove();
    ch.remove();
    del.remove();
})