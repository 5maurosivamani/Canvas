const canvas6 = document.getElementById("canvas-6");
const context = canvas6.getContext("2d");

context.strokeStyle = "black";
context.lineWidth = 2;

function drawSquare(x, y, size) {
  context.beginPath();
  context.rect(x, y, size, size);
  context.stroke();
  context.fill();
}

const size = 40;
let offset = 0;

for (let y = 0; y <= canvas6.height; y += size) {
  for (let x = 0; x <= canvas6.width; x += size) {
    if ((x / size) % 2 === 0) {
      context.fillStyle = "black";
    } else {
      context.fillStyle = "white";
    }

    drawSquare(x - offset, y, size);
  }
  offset = size / 2 - offset;
}
