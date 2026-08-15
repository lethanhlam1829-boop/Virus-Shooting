const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 700;

const player = new Player(canvas.width / 2, canvas.height / 2);
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const dx = mouseX - player.x;
  const dy = mouseY - player.y;
  player.angle = Math.atan2(dy, dx);

  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
