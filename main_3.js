const canvas3 = document.getElementById("canvas-3");

const context = canvas3.getContext("2d");

const minRadius = 5;
const rangeRadius = 10;
let p = 0;

let x = 200;
let y = 200;

animate();

function animate() {
  p = p + 0.008;
  radius = minRadius + rangeRadius * p;

  if (p > 1) {
    p = 0;
  }

  context.clearRect(0, 0, canvas3.width, canvas3.height);
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.stroke();

  requestAnimationFrame(animate);
}

canvas3.addEventListener("mousemove", function (e) {
  x = e.offsetX;
  y = e.offsetY;
});
