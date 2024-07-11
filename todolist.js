const form = document.querySelector('form');
const input = document.querySelector('input');
const ch = document.querySelector('.ch');
const detail = document.querySelector('.detail');
const del = document.querySelector('.del');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const div = document.createElement('div');
    const span = document.createElement('span');
    const newdel = document.createElement('button');
    const newch = document.createElement('input');
    newch.type = 'checkbox'
    const txt = document.createTextNode(input.value);
    const deltxt= document.createTextNode('삭제');
    newch.className += 'ch';
    newdel.className += 'del';
    span.className +='detail';
    span.appendChild(txt);
    newdel.appendChild(deltxt);
    div.appendChild(newch);
    div.appendChild(span);
    div.appendChild(newdel);
    div.className += 'ti';
    document.body.appendChild(div);
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