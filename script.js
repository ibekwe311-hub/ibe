const logo = document.getElementById("logo");
let x = 100, y = 100, dx = 2, dy = 2;
const speed = 1.5;

function randomColor() {
  return Math.floor(Math.random() * 360);
}

function animate() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const logoWidth = logo.clientWidth;
  const logoHeight = logo.clientHeight;

  x += dx * speed;
  y += dy * speed;

  if (x + logoWidth >= width || x <= 0) {
    dx *= -1;
    logo.style.filter = `hue-rotate(${randomColor()}deg)`;
  }
  if (y + logoHeight >= height || y <= 0) {
    dy *= -1;
    logo.style.filter = `hue-rotate(${randomColor()}deg)`;
  }

  logo.style.left = x + "px";
  logo.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();