class Canvas {
    constructor({ id, width = 500, height = 500, WIN, callbacks }) {
        this.WIN = WIN;
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;

        this.canvasV = document.createElement('canvas');
        this.canvasV.width = width;
        this.canvasV.height = height;
        this.ctxV = this.canvasV.getContext('2d');

        //канвас в декартовую
        this.xs = (x) => (x - WIN.left) / WIN.width * this.canvas.width;
        this.ys = (y) => (-y - WIN.bottom) / WIN.height * this.canvas.height;

        const { wheel, mouseUp, mouseDown, mouseMove, mouseLeave, dblclick } = callbacks;
        this.canvas.addEventListener('wheel', wheel);
        this.canvas.addEventListener('mouseup', mouseUp);
        this.canvas.addEventListener('mousedown', mouseDown);
        this.canvas.addEventListener('dblclick', dblclick);
        this.canvas.addEventListener('mousemove', mouseMove);
        this.canvas.addEventListener('mouseleave', mouseLeave);
    }
    clear(color) {
        this.ctxV.fillStyle = color || '#fff';
        this.ctxV.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    //декартовая в канвас
    sx = (x) => x * this.WIN.width / this.canvas.width;
    sy = (y) => -y * this.WIN.height / this.canvas.height;

    line(x1, y1, x2, y2, color, width, isDash) {
        this.ctxV.beginPath();
        this.ctxV.strokeStyle = color || '#000';
        this.ctxV.lineWidth = width || 1;
        if (isDash) {
            this.ctxV.setLineDash([15, 30]);
        } else {
            this.ctxV.setLineDash([]);
        }
        this.ctxV.moveTo(this.xs(x1), this.ys(y1));
        this.ctxV.lineTo(this.xs(x2), this.ys(y2));
        this.ctxV.stroke();
    };

    point(x, y, color = 'red', size = 3) {
        this.ctxV.beginPath();
        this.ctxV.strokeStyle = color;
        this.ctxV.arc(this.xs(x), this.ys(y), size, 0, 2 * Math.PI);
        this.ctxV.stroke;
        this.ctxV.fillStyle = color;
        this.ctxV.fill();
    }

    rect(x1, y1, x2, y2, color = '#6666ff') {
        this.ctxV.beginPath();
        this.ctxV.moveTo(this.xs(x1), this.ys(y1));
        this.ctxV.lineTo(this.xs(x1), this.ys(y2));
        this.ctxV.lineTo(this.xs(x2), this.ys(y2));
        this.ctxV.lineTo(this.xs(x2), this.ys(y1));
        this.ctxV.lineTo(this.xs(x1), this.ys(y1));
        this.ctxV.fillStyle = color;
        this.ctxV.fill();
    }

    polygon(points = [], color = '#0f05') {
        if (points.length >= 3) {
            this.ctxV.beginPath();
            this.ctxV.fillStyle = color;
            this.ctxV.moveTo(this.xs(points[0].x), this.ys(points[0].y));
            for (let i = 1; i < points.length; i++) {
                this.ctxV.lineTo(this.xs(points[i].x), this.ys(points[i].y));
            }
            this.ctxV.lineTo(this.xs(points[0].x), this.ys(points[0].y));
            this.ctxV.fill();
        }
    }

    text(text, x, y) {
        this.ctxV.fillStyle = '#003366';
        this.ctxV.font = 'bold 30px Comic Sans MC';
        //this.ctxV.textAlign = 'left';
        this.ctxV.fillText(text, this.xs(x), this.ys(y));
    }

    textCanvas(text, x, y) {
        this.ctxV.fillStyle = '#003366';
        this.ctxV.font = 'bold 30px Comic Sans MC';
        //this.ctxV.textAlign = 'left';
        this.ctxV.fillText(text, x, y);
    }

    cursorX = (x) => x * this.WIN.width / this.canvas.width + this.WIN.left;
    cursorY = (y) => y * this.WIN.height / this.canvas.height + this.WIN.bottom;

    cursorCell(x, y, color) {
        this.ctxV.beginPath();
        this.ctxV.moveTo(this.xs(x), this.ys(y));
        this.ctxV.lineTo(this.xs(x + 1), this.ys(y));
        this.ctxV.lineTo(this.xs(x + 1), this.ys(y + 1));
        this.ctxV.lineTo(this.xs(x), this.ys(y + 1));
        this.ctxV.fillStyle = color || green;
        this.ctxV.fill();
    }

    cursorCoord(x, y) {
        this.ctxV.fillStyle = '#003366';
        this.ctxV.font = 'bold 15px Comic Sans MC';
        this.ctxV.textAlign = 'left';
        this.ctxV.fillText('(' + (x + 1) + ',' + -y + ')', this.xs(x + 1), this.ys(y));
        this.ctxV.fillText('(' + (x + 1) + ',' + -(y + 1) + ')', this.xs(x + 1), this.ys(y + 1));
        this.ctxV.textAlign = 'right';
        this.ctxV.fillText('(' + x + ',' + -y + ')', this.xs(x), this.ys(y));
        this.ctxV.fillText('(' + x + ',' + -(y + 1) + ')', this.xs(x), this.ys(y + 1));
    }

    render() {
        this.context.drawImage(this.canvasV, 0, 0);
    }
}