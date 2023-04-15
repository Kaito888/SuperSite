class Graph2D extends Component {
    addEventListeners() {
        document.getElementById('popUpOpen').addEventListener('click', this.popUpOpenHandler);
        document.getElementById('popUpClose').addEventListener('click', this.popUpCloseHandler);
        this.start();
    }

    popUpOpenHandler() {
        document.getElementById('popUp').classList.remove('hide');
    }

    popUpCloseHandler() {
        document.getElementById('popUp').classList.add('hide');
    }

    start() {
        const WIN = {
            left: -10,
            bottom: -10,
            width: 20,
            height: 20
        };
        const funcs = [];
        const derivatives = [];
        const zeros = [];
        let canMove = false;
        const zoom = 0.8;

        const ui = new UI({ addFunction, delFunction, setColorFunction, changeZeroAndDerivative, deleteZeroAndDerevative, changeGraph, changeZero });

        const canvas = new Canvas({
            id: 'graph2D',
            width: 800,
            height: 800,
            WIN,
            callbacks: { wheel, mouseUp, mouseDown, mouseMove, mouseLeave }
        });

        /* *************** */
        /* about callbacks */
        /* *************** */

        function addFunction(f, num) {
            if (f instanceof Function) {
                if (funcs[num]) {
                    funcs[num].f = f;
                } else {
                    funcs[num] = { f, color: 'red', width: 2 };
                }

                render();
            }
        }

        function delFunction(num) {
            funcs[num] = null;
            render();
        }

        function setColorFunction(color, num) {
            if (color && num) {
                funcs[num].color = color;
                render();
            }
        }

        function wheel(event) {
            const delta = event.wheelDelta > 0 ? -zoom : zoom;
            if (WIN.width > zoom || delta > 0) {
                WIN.width += delta;
                WIN.height += delta;
                WIN.left -= delta / 2;
                WIN.bottom -= delta / 2;

                render();
            }
        }

        function mouseDown() {
            canMove = true;
        }
        function mouseUp() {
            canMove = false;
        }
        function mouseLeave() {
            canMove = false;
        }
        function mouseMove(event) {
            render();
            if (canMove) {
                const { movementX, movementY } = event;
                WIN.left -= canvas.sx(movementX);
                WIN.bottom -= canvas.sx(movementY);
            }
            printDerivative(event);
        }

        function changeZeroAndDerivative(num) {
            derivatives[num] = { func: funcs[num].f, color: 'blue' };
            if (zeros[num]) {
                zeros[num].num = num;
            } else {
                zeros[num] = { num: num };
            }
        }

        function deleteZeroAndDerevative(num) {
            derivatives[num] = null;
            zeros[num].num = null;
        }

        function changeGraph(width, color) {
            if (width) {
                funcs.forEach(func => func.width = width);
            }
            if (color) {
                funcs.forEach(func => { if (func) { func.color = color } });
            }
            render();
        }

        function changeZero(num, c, segment) {
            if (!zeros[num]) {
                zeros[num] = {};
            }
            if (segment === 'a') {
                zeros[num].a = c - 0;
            }
            if (segment === 'b') {
                zeros[num].b = c - 0;
            }
        }

        /* *********** */
        /* about print */
        /* *********** */

        function printOXY() {
            const { left, bottom, height, width } = WIN;

            for (var x = 0; x < left + width; x += 1) {
                canvas.line(x, -bottom, x, -(bottom + height), 'white');
            }
            for (var x = 0; x > left; x -= 1) {
                canvas.line(x, -bottom, x, -(bottom + height), 'white');
            }
            for (var y = 0; y > -(bottom + height); y -= 1) {
                canvas.line(left, y, left + width, y, 'white');
            }
            for (var y = 0; y < -bottom; y += 1) {
                canvas.line(left, y, left + width, y, 'white');
            }

            canvas.line(left, 0, width + left, 0, '#1A224B', 2);//оси
            canvas.line(0, -bottom, 0, -(bottom + height), '#1A224B', 2);

            canvas.line(0, -bottom, 1, -bottom - 1, '#1A224B', 2);//стрелочки
            canvas.line(0, -bottom, -1, -bottom - 1, '#1A224B', 2);

            canvas.line(left + width, 0, left + width - 1, -1, '#1A224B', 2);
            canvas.line(left + width, 0, left + width - 1, 1, '#1A224B', 2);

            //подписи осей и центра
            canvas.text('x', left + width - 0.5, -1);
            canvas.text('y', 1, -bottom - 0.7);
            canvas.text('0', -0.5, -0.8);
        }

        function render() {
            canvas.clear('#C7CFFF');

            printOXY();

            zeros.forEach(zero => {
                if ((zero.num || zero.num === 0) && zero.a < zero.b) {
                    printZero(zero.num, zero.a, zero.b);
                    getIntegral(zero.num, zero.a - 0, zero.b - 0);
                    printIntegral(zero.num, zero.a - 0, zero.b - 0);
                }
            });

            funcs.forEach(func => func && printFunction(func.f, func.color, func.width));

            canvas.render();
        }

        function printFunction(f, color, width, isDash) {
            const dx = WIN.width / 100;
            let x = WIN.left;

            while (x < WIN.width + WIN.left) {
                const y1 = f(x);
                const y2 = f(x + dx);
                if (Math.abs(y2 - y1) < WIN.height && !isDash) {
                    canvas.line(x, y1, x + dx, y2, color, width);
                } else {
                    canvas.line(x, y1, x + dx, y2, color, width, true);
                }
                x += dx;
            }
        }

        function pritSquareCursor(event) {
            const cx = canvas.cursorX(event.clientX - 8);
            const cy = canvas.cursorY(event.clientY - 518);

            const xb = cx > 0 ? Math.trunc(cx) : Math.trunc(cx) - 1;
            const yb = cy > 0 ? Math.trunc(cy) : Math.trunc(cy) - 1;
            canvas.cursorCell(xb, yb, '#3399ff');
            canvas.cursorCoord(xb, yb);
        }

        function printZero(num, a, b) {
            const f = funcs[num].f;
            const zero = getZero(f, a, b);
            if (zero || f(0) === 0) {
                canvas.point(zero, 0);
            }
        }

        function printDerivative(event) {
            const x0 = canvas.cursorX(event.clientX - 28);
            derivatives.forEach(derivative => {
                if (derivative) {
                    const f = derivative.func;
                    const k = getDerivative(f, x0);
                    const b = f(x0) - k * x0;
                    derivative.f = (x) => k * x + b;
                    printFunction(derivative.f, derivative.color, 2)
                }
            });
        }

        function printIntegral(num, a, b, d = 1000) {
            const f = funcs[num].f;
            const dx = (b - a) / d;
            for (let x = a; x < b; x += dx) {
                canvas.polygon([
                    { x: x, y: 0 },
                    { x: x + dx, y: 0 },
                    { x: x + dx, y: f(x + dx) },
                    { x: x, y: f(x + dx) },
                ])
            }
        }

        /* ***************** */
        /* about mathematics */
        /* ***************** */

        function getZero(f, a, b, eps = 0.001) {
            if (f(a) * f(b) > 0) return null;
            if (f(a) === 0) return a;
            if (f(b) === 0) return b;
            if (Math.abs(f(b) - f(a)) <= eps) return (a + b) / 2;

            const half = (a + b) / 2;
            if (f(a) * f(half) <= 0) return getZero(f, a, half, eps);
            if (f(b) * f(half) <= 0) return getZero(f, half, b, eps);

            return null;
        }

        function getDerivative(f, x0, dx = 0.0000001) {
            return (f(x0 + dx) - f(x0)) / dx;
        }

        function getIntegral(num, a, b, d = 1000) {
            const f = funcs[num].f;
            let x = a;
            const dx = (b - a) / d;
            let s = 0;
            while (x < b) {
                if (f(x) * f(x + dx) > 0) {
                    s += (Math.abs(f(x)) + Math.abs(f(x + dx))) * dx / 2;
                } else {
                    s += (Math.abs(f(x)) + Math.abs(f(x + dx))) * dx / 4;
                }
                x += dx;
            }
            return s;
        }

        render();

    }

}