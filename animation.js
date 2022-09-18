const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;

const speedSignX = Math.round(Math.random()) === 0 ? -1 : 1;
const speedSignY = Math.round(Math.random()) === 0 ? -1 : 1;

let dx = 4 * speedSignX; // X velocity
let dy = 4 * speedSignY; // Y velocity
const radius = 30;
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

animate();