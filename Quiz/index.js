const button = document.querySelector(".btn");
button.addEventListener('click', result);
const par = document.querySelector("#disp");

function result(e){
    e. preventDefault();
    let score = 0;
    if (document.querySelector ('#answer1').checked){
        score++;
    }
    if (document.querySelector ('#answer2').checked){
        score++;
    }
    if (document.querySelector ('#answer3').checked){
        score++;
    }
    if (document.querySelector ('#answer4').checked){
        score++;
    }
    if (document.querySelector ('#answer5').checked){
        score++;
    }
    par.textContent = "Ваши очки:"+score+".";
}