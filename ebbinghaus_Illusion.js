canvas8 = document.getElementById("canvas-8");
context = canvas8.getContext("2d");

const rangeRadius = 20;
let p = 0;

// Assume a flower
animate();

function animate() {
  context.clearRect(0, 0, canvas8.width, canvas8.height);

  const t = Math.sin(new Date().getTime() / 1000) ** 2;

  drawFlower({
    centerX: canvas8.width / 2 ,
    centerY: canvas8.height / 2,
    outerRadius: lerp(150, 50, t),
    diskRadius: 20,
    petalRadius: lerp(70, 15, t),
    petalCount: 10,
  });

  requestAnimationFrame(animate);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function drawFlower({
  centerX,
  centerY,
  outerRadius,
  diskRadius,
  petalRadius,
  petalCount,
}) {
  const cicumbrance = 2 * Math.PI * outerRadius;

  context.beginPath();
  context.arc(centerX, centerY, diskRadius, 0, Math.PI * 2);
  context.fillStyle = "orange";
  context.fill();

  context.beginPath();
  context.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
  context.lineWidth = petalRadius;
  context.lineCap = "round";
  context.setLineDash([0, cicumbrance / petalCount]);
  context.stroke();
}
