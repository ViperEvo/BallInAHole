var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');
var point = document.querySelector('.point');

let x = 0;
let y = 0;

function handleOrientation(event) {
  x = event.beta;  // In degree in the range [-180,180]
  y = event.gamma; // In degree in the range [-90,90]

  output.innerHTML  = "Beta : " + x + "\n";
  output.innerHTML += "Gamma: " + y + "\n";
  output.innerHTML += "Points: " + points + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

}
let i = 1;
let xx = 0;
let yy = 0;
let xp = 0;
let yp = 0;
let points = 0;
let mnoznik = setInterval(mnoznikv, 10);
let pointmnoznik = setInterval(pointPos, 10000);

function mnoznikv()
{
  i = 0.04;
    
  xx += x*i;
  yy += y*i;
  ball.style.top  = (400 + xx) + "px";
  ball.style.left = (400 + yy) + "px";
    
  if (xx > 370 || xx < -390 || yy > 370 || yy < -390)
{
  gameOver();
}
  if ((400 + xx) - xp < 25 && (400 + yy) - yp < 25 && (400 + xx) - xp > -25 && (400 + yy) - yp > -25)
  {
    addPoint();
    pointPos();
  }
}

function pointPos()
{
  point.style.display = "block";
  xp = ((Math.random() * 790) + 1);
  yp = ((Math.random() * 790) + 1);
  point.style.top = (20 + xp) + "px";
  point.style.left = (20 + yp) + "px";
  console.log(xp, yp);
}

function addPoint()
{
  points += 1;
  
}

function gameOver()
{
  xx = 0;
  yy = 0;
  points = 0;
}

window.addEventListener('deviceorientation', handleOrientation);

