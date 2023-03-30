class ParaboloidEll extends Figure {
    constructor(count = 20, a = 0.3, b = 0.5, c = 0.2) {
        super();
        this.a = a / 10;
        this.b = b / 10;
        this.c = c / 10;
        this.count = count;

        this.points = [];
        this.edges = [];
        this.polygons = [];

        for (let j = 0; j <= count / 2; j++) {
            const T = Math.PI / count * j;
            for (let i = 0; i < count; i++) {
                const p = 2 * Math.PI / count * i;
                this.points.push(new Point(
                    a * j * Math.cos(p) * Math.sin(T),
                    b * j * (a * Math.cos(p) * Math.cos(p) + c * Math.sin(p) * Math.sin(p)) * Math.sin(T) * Math.sin(T),
                    c * j * Math.sin(p) * Math.sin(T),
                ))
                this.edges.push(new Edge(count * j + i, i === count - 1 ? count * j : count * j + i + 1));
                if (j > 0) {
                    this.edges.push(new Edge(count * j + i, count * (j - 1) + i));
                    this.polygons.push(new Polygon([
                        count * j + i,
                        i === count - 1 ? count * j : count * j + i + 1,
                        i === count - 1 ? count * (j - 1) : count * (j - 1) + i + 1,
                        i === count - 1 ? count * (j - 1) + i : count * (j - 1) + i,
                    ]))
                }
            }
        }
    }
}