// const form = document.querySelector('form');
// const input = document.querySelector('input');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const div = document.createElement('div');
//     const span = document.createElement('span');
//     const newdel = document.createElement('button');
//     const newch = document.createElement('input');
//     newch.type = 'checkbox';
//     const txt = document.createTextNode(input.value);
//     const deltxt= document.createTextNode('삭제');
//     newch.className += 'ch';
//     newdel.className += 'del';
//     span.className +='detail';
//     span.appendChild(txt);
//     newdel.appendChild(deltxt);
//     div.appendChild(newch);
//     div.appendChild(span);
//     div.appendChild(newdel);
//     div.className += 'ti';
//     document.body.appendChild(div);
//     input.value = '';
// })

// const del = document.querySelector('.del');
// const ch = document.querySelector('.ch');
// const div = document.querySelector('.ti');
// const detail = document.querySelector('.detail');

// ch.addEventListener('change', checked);
// function checked() {
//     if (ch.checked) {
//         detail.style.textDecoration = 'line-through';
//     } else {
//         detail.style.textDecoration = 'none';
//     }
// }

// del.addEventListener('click',()=>{
//     div.remove();
// })

const input = document.querySelector("#input");
const inputBtn = document.getElementById("al");
const list = document.getElementById("ex");

inputBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const toDo = input.value.trim();
  if (toDo !== "") {
    const div = document.createElement("div");
    div.classList.add("ti");

    const ch = document.createElement("input");
    ch.setAttribute("type", "checkbox");
    ch.classList.add("ch");

    const detail = document.createElement("span");
    detail.textContent = toDo;
    detail.classList.add("detail");

    const del = document.createElement("button");
    del.textContent = "삭제";
    del.classList.add("del");

    div.appendChild(ch);
    div.appendChild(detail);
    div.appendChild(del);

    list.appendChild(div);
    input.value = "";
  }
});

ch.addEventListener("change", checked);
del.addEventListener("click", () => {
  div.remove();
});

function checked(event) {
  const detail = event.target.nextElementSibling;
  if (event.target.checked) {
    detail.style.textDecoration = "line-through";
  } else {
    detail.style.textDecoration = "none";
  }
}
