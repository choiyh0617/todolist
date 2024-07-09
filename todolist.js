const form = document.querySelector('form');
const input = document.querySelector('input');
const detail = document.querySelector('.detail')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(input.value);
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
})