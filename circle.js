class Circle {
    MAX_RADIUS = 40;
    MIN_RADIUS = 5;

    constructor({ x, y, radius, speedSignX, speedSignY, color }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = 1 * speedSignX;
        this.dy = 1 * speedSignY;
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

    update(innerWidth, innerHeight, clientX, clientY) {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (Math.abs(clientX - this.x) <= 50 && Math.abs(clientY - this.y) <= 50) {
            if (this.radius > this.MAX_RADIUS) {
                this.radius = this.MAX_RADIUS;
            }

            this.radius = this.radius + 1
        } else {
            if (this.radius < this.MIN_RADIUS) {
                this.radius = this.MIN_RADIUS;
            }

            this.radius = this.radius - 1
        }
    }
}