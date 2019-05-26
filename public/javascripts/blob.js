function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;

    this.show = () => {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }

    this.update = () => {
        let mouse = createVector(mouseX, mouseY);
        mouse.sub(this.pos);
        mouse.setMag(3);
        this.pos.add(mouse);
    }
}