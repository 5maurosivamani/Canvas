// Simple Animation through Canvas
const canvas2 = document.getElementById("canvas-2");
const context = canvas2.getContext("2d");

const minX = 100,
  rangeX = 200,
  minRadios = 10,
  rangeRadios = 30,
  animationSpeed = 0.02;
let p = 0,
  sign = 1; // p stands for percentage (1 is 100%)

animate();

function animate() {
  const x = minX + rangeX * p;
  const radius = minRadios + rangeRadios * Math.sin(p * Math.PI);
  p = p + animationSpeed * sign;

  if (p > 1 || p < 0) {
    // p = 0;
    sign = sign * -1; // reverse the direction
  }

  context.clearRect(0, 0, canvas2.width, canvas2.height);
  context.beginPath();
  context.arc(x, 200, radius, 0, Math.PI * 2);
  context.strokeStyle = "black";
  context.stroke();
  //   context.fillStyle = "black";
  //   context.fill();

  console.log(p);

  requestAnimationFrame(animate); // call the animate function again after 16ms (60 fps)
}
