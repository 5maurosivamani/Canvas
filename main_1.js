const canvas1 = document.getElementById("canvas-1");
const context = canvas1.getContext("2d");


drawBody(100, 300, 40);
drawBody(300, 300, 30);

//  draw the snow man body
function drawBody(x1, y1, r1) {
  context.beginPath();
  context.arc(x1, y1, r1, 0, 2 * Math.PI);
  context.fillStyle = "white";
  context.fill();

  context.beginPath();
  const x2 = x1,
    r2 = r1 * 0.8,
    y2 = y1 - r1 - r2;

  context.arc(x2, y2, r2, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  const x3 = x2,
    r3 = r2 * 0.8,
    y3 = y2 - r2 - r3;

  context.arc(x3, y3, r3, 0, 2 * Math.PI);
  context.fill();

  drawHat(x3, y3, r3);
}

// draw the snow man hat
function drawHat(x3, y3, r3) {
  context.beginPath();
  const x4 = x3 - r3,
    y4 = y3 - r3,
    h4 = r3 / 2,
    w4 = r3 * 2;
  context.rect(x4, y4, w4, h4);
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  const x5 = x4 + w4 * 0.1,
    h5 = w4 / 2,
    y5 = y4 - h5,
    w5 = w4 * 0.8;
  context.rect(x5, y5, w5, h5);
  context.fill();
}
