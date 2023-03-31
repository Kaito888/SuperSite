class Roots extends Component {
    addEventListeners() {
        document.getElementById('getRoots').addEventListener('click', this.button);
    }

    button() {
        function equat1(a, b) { //1 степень
            if (a == 0) {
                if (b == 0) return [];
                return null;
            }
            return [-b / a];
        }

        function equat2(a, b, c) { //2 степень
            if (a == 0) return (equat1(b, c));
            var d = b * b - 4 * a * c;
            if (d > 0) {
                var x1 = (-b + Math.sqrt(d)) / 2 / a, x2 = (-b - Math.sqrt(d)) / 2 / a;
                return [x1, x2];
            }
            if (d == 0) {
                return [-b / 2 / a];
            }
            return null;
        }

        function equat3(a, b, c, d) { //3 степень
            if (a == 0) return (equat2(b, c, d));
            var p, q, Q, alf, bet, x1, x2, x3, x;
            p = c / a - b * b / 3 / a / a;
            q = d / a - b * c / 3 / a / a + 2 * b * b * b / 27 / a / a / a;
            Q = p * p * p / 27 + q * q / 4;
            alf = Math.cbrt(-q / 2 + Math.sqrt(Q));
            bet = Math.cbrt(-q / 2 - Math.sqrt(Q));
            x1 = alf + bet - b / 3 / a;
            x2 = -x1 / 2 + Math.sqrt(-3) * (alf - bet) / 2 - b / 3 / a;
            x3 = -x1 / 2 - Math.sqrt(-3) * (alf - bet) / 2 - b / 3 / a;
            x = [x1, x2, x3];
            return (x);
        }

        function equat4(a, b, c, d, e) {//4 степень
            var q = a;
            a = b / q;
            b = c / q;
            c = d / q;
            d = e / q;
            var y = equat3(1, -b, a * c - 4 * d, -a * a * d + 4 * b * d - c * c);
            var y1 = y[0];
            var xright = equat2(a * a / 4 - b + y1, a * y1 / 2 - c, y1 * y1 / 4 - d);
            var xsolve = xright[0];
            var x1 = equat2(1, a / 2 - Math.sqrt(a * a / 4 - b + y1), y1 / 2 + xsolve * Math.sqrt(a * a / 4 - b + y1));
            var x2 = equat2(1, a / 2 + Math.sqrt(a * a / 4 - b + y1), y1 / 2 + xsolve * Math.sqrt(a * a / 4 - b + y1));

            var answerx = [x1[0], x1[1], x2[0], x2[1]];
            return (answerx);
        }

        function getRoots(a, b, c, d, e) {
            const WIN = {
                left: -10,
                bottom: -10,
                width: 20,
                height: 20
            };
            const canvas = new Canvas({
                id: 'graph1',
                width: 700,
                height: 700,
                WIN,
                callbacks: { wheel, mouseUp, mouseDown, mouseMove, mouseLeave }
            });
            let canMove = false;
            canvas.clear();

            let f = () => { };
            if (a && e) f = (x) => (a * x * x * x * x + b * x * x * x + c * x * x + d * x + e);
            else if (a && d) f = (x) => (a * x * x * x + b * x * x + c * x + d);
            else if (a && c) f = (x) => (a * x * x + b * x + c);
            else if (a && b) f = (x) => (a * x + b);
            else if (a) f = (x) => a;

            const zoom = 0.8;
            function wheel(event) {
                const delta = event.wheelDelta > 0 ? -zoom : zoom;
                if (WIN.width > zoom || delta > 0) {
                    WIN.width += delta;
                    WIN.height += delta;
                    WIN.left -= delta / 2;
                    WIN.bottom -= delta / 2;

                    render(f);
                }
            }

            function mouseDown() {
                canMove = true;
            }
            function mouseUp() {
                canMove = false;
            }
            function mouseLeave() {
                render(f);
                canMove = false;
            }
            function mouseMove(event) {
                if (canMove) {
                    const { movementX, movementY } = event;
                    WIN.left -= canvas.sx(movementX);
                    WIN.bottom -= canvas.sx(movementY);
                }
                render(f);
            }

            function printOXY() {
                const { left, bottom, height, width } = WIN;

                for (var x = 0; x < left + width; x += 1) {
                    canvas.line(x, bottom, x, (bottom + height), 'white');
                }
                for (var x = 0; x > left; x -= 1) {
                    canvas.line(x, bottom, x, (bottom + height), 'white');
                }
                for (var y = 0; y < bottom + height; y += 1) {
                    canvas.line(left, y, left + width, y, 'white');
                }
                for (var y = 0; y > bottom; y -= 1) {
                    canvas.line(left, y, left + width, y, 'white');
                }

                canvas.line(left, 0, width + left, 0, '#1A224B', 2);//оси
                canvas.line(0, bottom, 0, (bottom + height), '#1A224B', 2);

                canvas.line(0, bottom + height, 1, bottom + height - 1, '#1A224B', 2);//стрелочки
                canvas.line(0, bottom + height, -1, bottom + height - 1, '#1A224B', 2);

                canvas.line(left + width, 0, left + width - 1, -1, '#1A224B', 2);
                canvas.line(left + width, 0, left + width - 1, 1, '#1A224B', 2);

                //подписи осей и центра
                canvas.text('x', left + width - 0.7, -1);
                canvas.text('y', 1, height + bottom - 0.7);
                canvas.text('0', -0.5, 0.8);

                canvas.render();
            }

            function render(f) {
                canvas.clear('#C7CFFF');
                printOXY();

                printFunction(f);

                canvas.render();
            }

            function printFunction(f) {
                const dx = WIN.width / 100;
                let x = WIN.left;

                while (x < WIN.width + WIN.left) {
                    const y1 = f(x);
                    const y2 = f(x + dx);
                    if (Math.abs(y2 - y1) < WIN.height) {
                        canvas.line(x, y1, x + dx, y2, 'blue', 1);
                    } else {
                        canvas.line(x, y1, x + dx, y2, 'blue', 1, true);
                    }
                    x += dx;
                }
            }

            render(f);

            if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e))
                return equat4(a, b, c, d, e);
            if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d))
                return equat3(a, b, c, d);
            if (!isNaN(a) && !isNaN(b) && !isNaN(c))
                return equat2(a, b, c);
            if (!isNaN(a) && !isNaN(b))
                return equat1(a, b);
            return null;
        }

        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var c = document.getElementById('c').value;
        var d = document.getElementById('d').value;
        var e = document.getElementById('e').value;
        var roots = getRoots(
            a ? a - 0 : NaN,
            b ? b - 0 : NaN,
            c ? c - 0 : NaN,
            d ? d - 0 : NaN,
            e ? e - 0 : NaN
        );
        document.getElementById('resultRoots').innerHTML = roots ? roots.join(', ') : 'Нет корней';
    }
}