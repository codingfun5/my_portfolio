let text = "Разблокируй телефон.";
let i = 0;
let speed = 90;
//console.log(text.length);
function type() {
    if (i<text.length) {
        document.querySelector(".unlock").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        play();
    }
})
button.addEventListener("click", play);
function play() {
    const userNumber = document.querySelector("#guess").value;
    console.log(userNumber);
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            title: 'Введи число от 1 до 20.',
            width: 600,
            padding: '3em',
            color: 'rgb(77, 136, 214)',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
         } )
    }
    else if (isNaN (userNumber)) {
        Swal.fire({
            title: 'Нужно ввести число.',
            width: 600,
            padding: '3em',
            color: 'rgb(77, 136, 214)',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })
    }
    else {
        if (userNumber < answer) {
            Swal.fire({
                title: 'Попробуй число повыше!',
                width: 600,
                padding: '3em',
                color: 'rgb(77, 136, 214)',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
             } )
        }
        else if (userNumber > answer) {
            Swal.fire({
                title: 'Попробуй число пониже!.',
                width: 600,
                padding: '3em',
                color: 'rgb(77, 136, 214)',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            })
        }
        else {
            Swal.fire({
                title: 'Ура, у тебя получилось!.',
                width: 600,
                padding: '3em',
                color: 'rgb(77, 136, 214)',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://images.unsplash.com/photo-1514923995763-768e52f5af87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")
                   top
                   
                  no-repeat
                `
             } )
        }
    }


}
console.log(answer);