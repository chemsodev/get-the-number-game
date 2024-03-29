const short=10;
const medium=14;
const long=18
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const replay = document.getElementById("replay");
const goal = document.getElementById("goal");
const countlabel = document.getElementById("count");
const timer = document.getElementById("time");
const buttons = [reset, increase, decrease];
const initialTimeHtml = `<div id="time">

           <span id="seconds">00</span>

        </div>`;
const htmlElements = {
  countLabel: countlabel
};

let count = 0;
let num = 0;
let max = 250;
let min = -250;
var win=false;
var countDown;
reset.onmousedown = function () {
  count = 0;
  countlabel.textContent = count;
  reset.style.width = "9.3vw";
  reset.style.height = "4.3vw";
};

reset.onmouseup = function () {
  reset.style.width = "9vw";
  reset.style.height = "4vw";
};

increase.onmousedown = function () {
  increase.style.width = "9.3vw";
  increase.style.height = "4.3vw";
  count++;
  countlabel.textContent = count;
  if (count==num){
    win=true;
  }
};

increase.onmouseup = function () {
  increase.style.width = "9vw";
  increase.style.height = "4vw";
};

decrease.onmousedown = function () {
  count--;
  countlabel.textContent = count;
  if (count==num){
    win=true;
  }
  decrease.style.width = "9.3vw";
  decrease.style.height = "4.3vw";
};

decrease.onmouseup = function () {
  decrease.style.width = "9vw";
  decrease.style.height = "4vw";
};

replay.onmousedown = function() {
  num = Math.floor(Math.random() * (max - min)) + min;
  goal.textContent = num;
  count = 0;
  countlabel.textContent = count;
  win=false;
  replay.style.width = "9.3vw";
  replay.style.height = "4.3vw";
};

replay.onmouseup = function () {
  replay.style.width = "9vw";
  replay.style.height = "4vw";
  enableAllButtons();
  resetCountdown();
};

const TIME_BETWEEN_UPDATES_IN_MS = 1000;

function initializeCountdown() {
  const timeUpdateIntervalId = setInterval(updateCountdown, TIME_BETWEEN_UPDATES_IN_MS);

  return {
    timeUpdateIntervalId,
    updateCountdown
  };
}
function disableAllButtons() {
  buttons.forEach((button) => {
      button.classList.add("unclickable");
  });

}


function enableAllButtons() {
  buttons.forEach((button) => {
    button.classList.remove("unclickable");
  });
}


function updateCountdown() {

  if (countDown == 0) {

    timer.textContent = "You Lost";

    timer.style.fontSize = "6vw";

    disableAllButtons();

  } else if (win) {

    timer.textContent = "You Won";

    timer.style.fontSize = "6vw";

  } else {

    countDown--;

    updateCountLabel();

  }

}

function updateCountLabel() {
  document.querySelector("#seconds").innerHTML = padTo2Digits(countDown);
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function resetCountdown() {
  if (num<50 &&num>-50) {
    countDown = short;
 }else if(num<100 &&num>-100){
   countDown=medium;
 }else{
   countDown=long;
 }
  timer.innerHTML = initialTimeHtml;
  updateCountLabel();
}
num = Math.floor(Math.random() * (max - min)) + min;
if (num<50 &&num>-50) {
   countDown = 5;
}else if(num<100 &&num>-100){
  countDown=7;
}else{
  countDown=15;
}
goal.textContent = num;
initializeCountdown();
htmlElements.countLabel.textContent = "0";