const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(input.value);
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
})