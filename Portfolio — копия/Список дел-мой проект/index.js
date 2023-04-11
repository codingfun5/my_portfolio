const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const ordersContainer = document.querySelector('.ordersContainer');

btn.addEventListener('click', ()=> {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('ordersAdded');
    ordersContainer.appendChild(item);
    inputField.value = ' ';

    item.addEventListener('click', ()=> {
     item.classList.add('ordersCompleted');
    })
     item.addEventListener('dblclick', ()=> {
        ordersContainer.removeChild(item);
     })

    })