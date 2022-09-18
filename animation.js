const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


let x = 200;
let dx = 1; // velocity
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, 300, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if (x > innerWidth || x < 0) {
        dx = -dx;
    }

    x += dx;
}

animate();