const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(243, 200, 100, .6)';
c.fillRect(100, 100, 50, 50);

c.fillStyle = 'rgba(200, 243, 100, .6)';
c.fillRect(200, 100, 50, 50);

c.fillStyle = 'rgba(200, 100, 243, .6)';
c.fillRect(300, 100, 50, 50);

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle='red';
c.stroke();


c.beginPath();
//     x    y   R  startAngle endAngle
c.arc(200, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

const colors = ['yellow', 'red', 'blue', 'pink', 'green'];
for (let i = 0; i < 10; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 20, 0, Math.PI * 2, false);
    const colorIndex = Math.floor(Math.random() * 5);
    c.strokeStyle = colors[colorIndex];
    c.stroke();
}