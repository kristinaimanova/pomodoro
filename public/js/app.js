//data and variable declarations
var timer;
var minutesLeft = 25;
var secondsLeft= 60;
var isOnBreak = false;
var numberOfBreaks = 0;
//getting references the dom
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var startButton = document.querySelector('#start');
//initalization code
    //eventlisteners
    startButton.addEventListener('click', start);
//function definitions
function start(){
    if(!timer){
    timer = setInterval(tick, 1000);
    }
}
function render(){}
function tick(){
    console.log('tick');
}
