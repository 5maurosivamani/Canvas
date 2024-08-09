const canvas7 = document.getElementById("canvas-7");

const context = canvas7.getContext("2d");

drawYinYang(canvas7.width / 2, canvas7.height / 2, 150);
drawYinYang(canvas7.width / 2 - 150, canvas7.height / 2, 50);
drawYinYang(canvas7.width / 2 + 150, canvas7.height / 2, 50);
drawYinYang(canvas7.width / 2, canvas7.height / 2 - 150, 50);
drawYinYang(canvas7.width / 2, canvas7.height / 2 + 150, 50);

function drawYinYang(centerX, centerY, radius) {
  context.save();
  context.beginPath();
  context.fillStyle = "cyan";
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.clip();

  const leftRectX = centerX - radius;
  const rightRectX = centerX;
  const rectY = centerY - radius;
  const rectHeight = radius * 2;
  const rectWidth = radius;

  context.beginPath();
  context.fillStyle = "white";
  context.fillRect(leftRectX, rectY, rectWidth, rectHeight);

  context.fillStyle = "black";
  context.fillRect(rightRectX, rectY, rectWidth, rectHeight);

  const innerCircleRadius = radius / 2;
  const innerCircleX = centerX;
  const topCircleY = centerY - innerCircleRadius;
  const bottomCircleY = centerY + innerCircleRadius;
  const smallCircleRadius = radius * 0.1;

  drawCircle(innerCircleX, topCircleY, innerCircleRadius, "white");
  drawCircle(innerCircleX, topCircleY, smallCircleRadius, "black");
  drawCircle(innerCircleX, bottomCircleY, innerCircleRadius, "black");
  drawCircle(innerCircleX, bottomCircleY, smallCircleRadius, "white");

  context.restore();
}

function drawCircle(x, y, radius, color) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}
