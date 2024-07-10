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

document.addEventListener('DOMContentLoaded', () => {
    ch.addEventListener('click', (event) => {
        const item = document.createElement('div') // div

        const checkBox = document.createElement('input') // 완료
        checkBox.setAttribute('type','checkbox')


        const text = document.createElement('span') // 내용
        text.textContent = input.value

        const removeButton = document.createElement('button') // 삭제
        removeButton.textContent = '삭제'


        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
})

        checkBox.addEventListener('change', (event) => {
            if(checkBox.checked){
                text.style.textDecorationLine = "line-through"
            }else{
                text.style.textDecorationLine = "none"
            }
        })
                
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)

        ex.appendChild(item)
        input.value = ''
        })


})