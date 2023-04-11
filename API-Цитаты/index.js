const button = document.querySelector("#btn");
const par = document.querySelector("#par");
button.addEventListener("click", getAdvice);

async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
   

const resReceived = await res.json();
//console.log(resReceived.slip.advice);
showAdvice(resReceived)

}
function showAdvice(resReceived) {
    par.textContent = `${resReceived.slip.advice}`
    par.style.display = "block";
      
}
