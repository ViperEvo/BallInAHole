var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

let x = 0;
let y = 0;

function handleOrientation(event) {
  x = event.beta;  // In degree in the range [-180,180]
  y = event.gamma; // In degree in the range [-90,90]

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

}
let i = 1;
let xx = 0;
let yy = 0;
let mnoznik = setInterval(mnoznikv, 10);

  function mnoznikv()
{
    i = 0.01;
    
    xx += x*i;
    yy += y*i;
    ball.style.top  = (400 + xx) + "px";
    ball.style.left = (400 + yy) + "px";
}


window.addEventListener('deviceorientation', handleOrientation);

