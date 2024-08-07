const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d");

// context.beginPath();
// context.moveTo(100, 300);
// context.lineTo(300, 300);
// context.lineTo(300, 100);
// context.lineTo(200,50);
// context.lineTo(100, 100);
// context.lineTo(100, 300);
// // context.fillStyle = "#000";

// context.stroke();

// context.beginPath();
// context.arc(200, 200, 50, 0, 2 * Math.PI);
// // context.fillStyle = "#000";
// canvas.stroke();

// context.beginPath();
// context.rect(100, 100, 200, 200);
// context.lineWidth = 70;
// context.strokeStyle = "rgb(255,255,20)";
// context.fillStyle = "red";
// context.fill();
// context.stroke();

const thickness = 10;
let x = 0,
  y = 0,
  h = 400,
  w = 400;

let i = 1;

while (i < 20) {
  context.beginPath();
  context.rect(x, y, w, h);
  context.fillStyle = i % 2 === 0 ? "white" : "blue";
  context.fill();

  x += thickness;
  y += thickness;
  h -= 2 * thickness;
  w -= 2 * thickness;

  console.log("i=", i);
  console.log({ x: x, y: y, w: w, h: h });
  i++;
}
