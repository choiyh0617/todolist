const form = document.querySelector('form');
const ex = document.querySelector('#ex');
const input = document.querySelector('input');
const ch = document.querySelector('.ch');
const detail = document.querySelector('.detail');
const del = document.querySelector('.del');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const div = document.createElement('div');
    const newdel = document.createElement('button');
    const newch = document.createElement('checkbox');
    const txt = document.createTextNode(input.value);
    const chtxt = document.createTextNode('삭제');
    div.appendChild(txt);
    newdel.appendChild(chtxt);
    newch.className += 'ch';
    document.body.appendChild(newdel);
    document.body.appendChild(div);
    document.body.appendChild(del);
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
    detail.remove()
    ch.remove()
    del.remove()
})