class Circle {
    constructor({ x, y, radius, speedSignX, speedSignY, color }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = 4 * speedSignX;
        this.dy = 4 * speedSignY;
        this.color = color;
    }

    draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();


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