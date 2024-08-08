const canvas5 = document.getElementById("canvas-5");
const context = canvas5.getContext("2d");

// canvas5.addEventListener("mousemove", function (e) {
//   p = e.offsetX / canvas5.width;
// });

let _p = 0;

canvas5.addEventListener("mousemove", function (e) {
  _p = e.offsetX / canvas5.width;
  
});

const tie = new Image();
tie.src = "./images/tie.png";

animate();

function animate() {
  context.clearRect(0, 0, canvas5.width, canvas5.height);

  drawBody(200, 600, 120);

  requestAnimationFrame(animate);
}

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

  drawEyes(x3, y3, r3);
  drawTie(x3, y3, r3);
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

// draw the snow man eyes
function drawEyes(x3, y3, r3) {
  const rangeX = r3 / 2;

  const x = x3 + rangeX * _p;

  context.beginPath();
  context.arc(x - 40, y3, r3 * 0.2, 0, Math.PI * 2);
  context.arc(x + 10, y3, r3 * 0.2, 0, Math.PI * 2);
  context.fillStyle = "black";
  context.fill();
}

// draw the tie for snow man
function drawTie(x3, y3, r3) {
  context.drawImage(tie, x3 - r3 * 0.6, y3 + r3 * 0.7, 100, 45);

  context.font = "36px Comic Sans MS";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("Merry", 200 ,340);
  context.fillText("Christmas", 200 ,380);
}
