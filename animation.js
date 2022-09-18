const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function initialSetUpForCircle() {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;

    const speedSignX = Math.round(Math.random()) === 0 ? -1 : 1;
    const speedSignY = Math.round(Math.random()) === 0 ? -1 : 1;

    const maxRadius = Math.random() * 40 + 10;
    const minRadius = Math.random() * 5 + 1;

    const speed = Math.random();

    const radius = 5;

    const colors = ['yellow', 'red', 'blue', 'pink', 'green'];
    const colorIndex = Math.floor(Math.random() * 5)
    const color = colors[colorIndex];

    return { x, y, speedSignX, speedSignY, radius, color, minRadius, maxRadius, speed };
}

const circles = [];
for (let i = 0; i < 100; i++) {
    circles.push(new Circle(initialSetUpForCircle()));
}

let clientX = null;
let clientY = null;
addEventListener('mousemove', function (e) {
    clientX = e.clientX;
    clientY = e.clientY;
});

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach(circle => {
        circle.draw(c);
        circle.update(innerWidth, innerHeight, clientX, clientY);
    });
}

animate();