const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function initialSetUpForCircle() {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;

    const speedSignX = Math.round(Math.random()) === 0 ? -1 : 1;
    const speedSignY = Math.round(Math.random()) === 0 ? -1 : 1;

    const radius = 20;

    const colors = ['yellow', 'red', 'blue', 'pink', 'green'];
    const colorIndex = Math.floor(Math.random() * 5)
    const color = colors[colorIndex];

    return { x, y, speedSignX, speedSignY, radius, color };
}

const circles = [];
for (let i = 0; i < 100; i++) {
    circles.push(new Circle(initialSetUpForCircle()));
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach(circle => {
        circle.draw(c);
        circle.update(innerWidth, innerHeight);
    });
}

animate();