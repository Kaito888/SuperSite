class CylinderHyp extends Figure {
    constructor(count = 10, a = 3, b = 0.8, c = 5) {
        super();
        this.a = a / 10;
        this.b = b / 10;
        this.c = c / 10;
        this.count = count;

        this.points = [];
        this.edges = [];
        this.polygons = [];

        for (let j = 0; j < count; j++) {
            for (let i = 0; i < count; i++) {
                this.points.push(new Point(
                    a * i,
                    b * j,
                    c * Math.sqrt(i * i - 1),
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

        for (let j = 0; j < count; j++) {
            for (let i = 0; i < count; i++) {
                this.points.push(new Point(
                    a * i,
                    b * j,
                    -c * Math.sqrt(i * i - 1),
                ))
                this.edges.push(new Edge(count * (count + j) + i, i === count - 1 ? count * (count + j) : count * (count + j) + i + 1));
                if (j > 0) {
                    this.edges.push(new Edge(count * (count + j) + i, count * (count + j - 1) + i));
                    this.polygons.push(new Polygon([
                        count * (count + j) + i,
                        i === count - 1 ? count * (count + j) : count * (count + j) + i + 1,
                        i === count - 1 ? count * (count + j - 1) : count * (count + j - 1) + i + 1,
                        i === count - 1 ? count * (count + j - 1) + i : count * (count + j - 1) + i,
                    ]))
                }
            }
        }
    }
}