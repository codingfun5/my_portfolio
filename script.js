
let text = "Hello! My name is Sofya. I`m a web developer...";
let i = 0;
let speed = 100;
function type() {
    
if (i < text.length) {
    document.querySelector("#par"). textContent += text.charAt(i);
    i++;
    setTimeout(type,speed);
}
}
type();

document.body.addEventListener('click',(e) => {
    const element = document.createElement('span')
     element. className = 'circle'
    element.style.left = e.clientX - 10 +'px'
    element.style.top = e.clientY - 10 + 'px'
    document.body.append(element)
     setTimeout(() => {
        element.remove()
    }, 900)
})
const myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
  // do something...
})