class Polygon {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image= loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        fill(color);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
