const canvas4 = document.getElementById("canvas-4");
const context = canvas4.getContext("2d");

const heartImage = new Image();

heartImage.src = "/images/heart.png";

const maxY = 90;
const rangeY = 30;
let p = 0;

animate();

function animate() {
  p = p + 0.02;
  const y = maxY + rangeY * Math.sin(p * 1);

  context.clearRect(0, 0, canvas4.width, canvas4.height);

  context.drawImage(heartImage, y, 70, 200, 200);

  context.font = "30px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "red";
  context.fillText("HTML canvas", 200, 300);

  requestAnimationFrame(animate);
}
