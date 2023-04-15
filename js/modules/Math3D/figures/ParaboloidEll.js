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

        for (let k = 0; k < 4; k++) {
            const num = k * count * count;
            for (let j = 0; j < count; j++) {
                for (let i = 0; i < count; i++) {
                    this.points.push(new Point(
                        a * i * (k > 1 ? -1 : 1),
                        b * j * (k % 2 == 0 ? 1 : -1),
                        i * i / a / a + j * j / b / b
                    ));
                    if (i != count - 1) {
                        this.edges.push(new Edge(num + count * j + i, num + count * j + i + 1));
                    }
                    if(j > 0){
                        this.edges.push(new Edge(num + count * j + i, num + count * (j - 1) + i));
                    }
                    if (j > 0 && i != count - 1) {
                        this.polygons.push(new Polygon([
                            num + count * j + i,
                            num + count * j + i + 1,
                            num + count * (j - 1) + i + 1,
                            num + count * (j - 1) + i,
                        ]))
                    }
                }
            }
        }
    }
}