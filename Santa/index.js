function christmasCoundown() {
const christmasDate = new Date("December 25, 2022 00:00"); 
const now = new Date();
const diff = christmasDate - now;
//console.log(diff);

const msInSecond = 1000; //сколько миллисекунд в секунде = 1000
const msInMinute = 60*1000; //сколько миллисекунд в минуте = 60000
const msInHour = 60*60*1000; //сколько миллисекунд в часе =3 600 000
const msInDay = 24*60*60*1000; //сколько миллисекунд в сутках = 86 400 000

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".days").textContent = displayDay;


const displayHour = Math.floor((diff%msInDay)/msInHour);
document.querySelector(".hours").textContent = displayHour;

const displayMinute = Math.floor((diff%msInHour)/msInMinute);
document.querySelector(".minutes").textContent = displayMinute;

const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
document.querySelector(".seconds").textContent = displaySecond;

if(diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    merryChristmas();

}
}

let timerID = setInterval(christmasCoundown,1000);
function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    heading.classList.add("red");
}




const button = document.querySelector('#myButton');
const audio = document.querySelector ('#myAudio')

button.addEventListener ('click', function() {
    if (audio.paused) {
        audio.play();
        button.classList.toggle('btn-pause')
    }
    else {
        audio.pause();
        button.classList.toggle('btn-pause');
    }
})




let colors = {
    color1: "rgba(255,255,255,1)",
    color2: "rgba(222,184,142,1)",
    color3: "rgba(232,248,255,1)",
    color4: "rgba(135,143,145,1)"
};
let options = {
    alphaSpeed: 10,
    alphaVariance: 1,
    color: [colors.color1, colors.color2, colors.color3, colors.color4],
    composition: "source-over",
    count: 350,
    direction: 161,
    float: 0.75,
    glow: 0,
    imageUrl: [
        "snow-1.svg",
        "snow-2.svg",
        "snow-3.svg",
        "snow-4.svg",
        "snow-5.svg",
        "snow-6.svg"
    ],
    maxAlpha: 2,
    maxSize: 22,
    minAlpha: -0.2,
    minSize: 4,
    parallax: 1.75,
    rotation: 0.5,
    shape: "image",
    speed: 3,
    style: "fill",
    twinkle: false,
    xVariance: 5,
    yVariance: 0,
};
window.onload = function() {
    initSparticles();
}
window.initSparticles = function() {
    let $main = document.querySelector('.falling');
    window.mySparticles = new sparticles.Sparticles($main,options);
};