class Circle {
    constructor({ x, y, radius, speedSignX, speedSignY, color }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = 2 * speedSignX;
        this.dy = 2 * speedSignY;
        this.color = color;
    }

    draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }

    update(innerWidth, innerHeight) {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}