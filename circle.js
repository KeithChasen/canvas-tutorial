class Circle {

    constructor({ x, y, radius, maxRadius, minRadius, speedSignX, speedSignY, color, speed }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.maxRadius = maxRadius;
        this.minRadius = minRadius;
        this.dx = speed * speedSignX;
        this.dy = speed * speedSignY;
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
            if (this.radius > this.maxRadius) {
                this.radius = this.maxRadius;
            }

            this.radius = this.radius + 1
        } else {
            if (this.radius < this.minRadius) {
                this.radius = this.minRadius;
            }

            this.radius = this.radius - 1
        }
    }
}