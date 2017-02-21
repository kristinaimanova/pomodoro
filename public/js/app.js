var Timer = {
  minutesLeft: 0,
  secondsLeft: 5,
  isOnBreak: false,
  numberOfBreaks: 1,
  init: function(){
    this.cacheDom();
    this.addListeners();
    this.render();

  },
  cacheDom: function(){
    this.minutes = document.querySelector('#minutes');
    this.seconds = document.querySelector('#seconds');
    this.startButton = document.querySelector('#start');
    this.stopButton = document.querySelector('#stop');
  },
  render: function(){
    this.minutes.textContent = this.pad(this.minutesLeft);
    this.seconds.textContent = this.pad(this.secondsLeft);
  },
  addListeners: function(){
    // the bind statement takes the meaning of 'this' from addListeners
    // and pushes that meaning into the start function
    this.startButton.addEventListener('click', this.start.bind(this));
    this.stopButton.addEventListener('click', this.resetAll.bind(this));

  },
  start: function(){
    if(!this.timer){
        this.timer = setInterval(this.tick.bind(this), 1000);
    }
    this.startButton.style.display = 'none';
    this.stopButton.style.display = 'block';
  },
  tick: function(){
    if(this.secondsLeft === 0 && this.minutesLeft === 0){
      clearInterval(this.timer);
      this.timer = !this.timer; //dereference
      if(this.isOnBreak){
        this.numberOfBreaks += 1;
        console.log(this.numberOfBreaks);
        this.resetWorkTime();
        this.startButton.style.display = 'block';
        this.stopButton.style.display = 'none';

      } else {
        this.resetBreakTime();

      }
      this.isOnBreak = !this.isOnBreak;

      this.render();
      return;
    }
    this.decrementMinutes();
    this.decrementSeconds();
    this.render();
  },
  decrementMinutes: function(){
    if(this.secondsLeft === 0){
      this.minutesLeft -= 1;
    }
  },
  decrementSeconds: function(){
    if(this.secondsLeft === 0){
      this.secondsLeft = 59;
    } else {
      this.secondsLeft -= 1;
    }
  },
  pad: function(num){
    if(num < 10){
      return `0${num}`;
    } else {
      return num;
    }
  },
  resetWorkTime: function(){
    this.minutesLeft = 0;
    this.secondsLeft = 5;
    // this.toggleHide();
    this.startButton.style.backgroundColor = 'green';
    this.startButton.textContent = 'Start';
  },
  resetBreakTime: function(){
    if(this.numberOfBreaks < 4){
      this.minutesLeft = 0;
      this.startButton.style.display = 'block';
      this.stopButton.style.display = 'none';
      this.startButton.textContent = `Start Break Number ${this.numberOfBreaks}`;
      this.startButton.style.backgroundColor = 'DeepSkyBlue';
      this.startButton.style.border = 'none';



    } else {
      this.minutesLeft = 15;
      this.numberOfBreaks = 0;
      this.startButton.textContent = "Last Break";
      this.startButton.style.display = 'block';
      this.stopButton.style.display = 'none';
      this.startButton.style.backgroundColor = 'SkyBlue';

    }
    this.secondsLeft = 7;
  },

  resetAll: function(){
      location.reload();

  }
};


Timer.init();




// //data and variable declarations
// var timer;
// var minutesLeft = 0;
// var secondsLeft= 10;
// var isOnBreak = false;
// var numberOfBreaks = 0;
// var i=0;
// //getting references the dom
// var minutes = document.querySelector('#minutes');
// var seconds = document.querySelector('#seconds');
// var startButton = document.querySelector('#start');
// //initalization code
//     //eventlisteners
//     startButton.addEventListener('click', start);
//     render();
// //function definitions
// function start(){
//     if(!timer){
//     timer = setInterval(tick, 1000);
//     }
// }
//
// function tick(){
//     if (minutesLeft === 0 && secondsLeft === 0){
//         if(isOnBreak===false && i===3){
//             theRealBreak();
//
//         } else if(isOnBreak === false){
//             isOnBreak = true;
//             breakTimer();
//             console.log(i);
//         } else if(isOnBreak === true){
//             isOnBreak = false;
//             minutesLeft = 0;
//             secondsLeft = 2;
//             render();
//         }
//
//     } else {
//         decrementSeconds();
//         decrementMinutes();
//     }
//     render();
//
// }
// function decrementMinutes(){
//     if(secondsLeft === 59) {
//         minutesLeft -= 1;
//     }
//
// }
// function decrementSeconds() {
//     if(secondsLeft === 0){
//         secondsLeft = 59;
//     }
//     else{
//         secondsLeft -=1;
//     }
// }
//
// function render(){
//     minutes.innerHTML = pad(minutesLeft);
//     seconds.innerHTML = pad(secondsLeft);
// }
//
//
// function pad(num){
//     if(num < 10){
//         return `0${num}`;
//     } else{
//         return num;
//     }
// }
//
// function breakTimer(){
//         minutesLeft = 0;
//         secondsLeft = 2;
//         render();
//         i+=1;
// }
//
// function theRealBreak(){
//     minutesLeft = 0;
//     secondsLeft = 8;
//     render();
//     restart();
// }
//
// function restart(){
//     i = 0;
//     timer = false;
// }
