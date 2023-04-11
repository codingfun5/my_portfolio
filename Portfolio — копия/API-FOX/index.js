const button = document.querySelector('#btn');
const par = document.querySelector('#par');

button.addEventListener('click', getFoxes);
async function getFoxes() {
    const res = await fetch('https://randomfox.ca/floof/');
   
    const resReceived = await res.json();
   
    showImages(resReceived);
}
function showImages(resReceived) {
    par.innerHTML = `<img src=${resReceived.image} width='600px' alt='DOG'> `
}
