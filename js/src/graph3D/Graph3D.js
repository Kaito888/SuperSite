class Graph3D extends Component {
    constructor(props) {
        super(props);

        this.zoom = 0.8;
        this.rotate = 0.01;
        this.drag = 0.05;
        this.canMove = false;
        this.canDrag = false;
        this.canPrintShadows = false;
        this.canPrintPoints = false;
        this.canPrintEdges = false;
        this.canPrintPolygons = true;
        this.canChangeScene = true;
        this.canAnimate = false;
        this.sceneAnimations = [];
        this.changedFigure = false;
        this.addedAnims = false;
        this.FPS = 0;

        this.WIN = {
            left: -5,
            bottom: -5,
            width: 10,
            height: 10,
            focus: new Point(0, 0, 30),
            camera: new Point(0, 0, 40),
        };
        this.LIGHT = [
            new Light(-10, 20, 0, 8000, '#ff0000'),
            new Light(10, -20, -10, 5000, '#0000ff'),
        ];

        this.scene = [];

        this.canvas = new Canvas({
            id: 'canvas3D',
            width: 800,
            height: 800,
            WIN: this.WIN,
            callbacks: {
                wheel: (event) => this.wheel(event),
                mouseUp: () => this.mouseUp(),
                mouseDown: () => this.mouseDown(),
                dblclick: () => this.dblclick(),
                mouseMove: (event) => this.mouseMove(event),
                mouseLeave: () => this.mouseLeave(),
            }
        });
        this.math3D = new Math3D({ WIN: this.WIN });

        this.ui3D = new UI3D({
            figureCountChange: this.figureCountChange,
            figureColorChange: this.figureColorChange,
        })

        setInterval(() => {
            this.scene.forEach(figure => {
                this.doAnimation(figure);
                figure.animated = false;
            });
        }, 30);

        this.timer = setInterval(1);

        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 100 / 6);
                }
        })();

        let FPS = 0;
        let lastTimeStamp = Date.now();
        const animLoop = () => {
            FPS++;
            const timeStamp = Date.now();
            if (timeStamp - lastTimeStamp >= 1000) {
                this.FPS = FPS;
                FPS = 0;
                lastTimeStamp = timeStamp;
            }
            this.renderScene();
            window.requestAnimFrame(animLoop);
        }
        animLoop();

        this.addEventListeners();
        this.setSolarSystem();
    }

    /* *************** */
    /* about animation */
    /* *************** */

    setSolarSystem() {
        this.LIGHT = [(new Light(0, 0, 0, 500, '#ffdd00'))];
        const earth = new Sphere(30, 3);
        const moon = new Torus(30, 1.5, 1.5, 0.5);

        earth.points.forEach(point => {
            point.x += 15;
        });
        const matrix = this.math3D.rotateZ(250);
        moon.points.forEach(point => {
            this.math3D.transform(matrix, point);
            point.x += 21;
        });
        earth.children.push(this.scene.length + 1);

        earth.polygons.forEach(poly => poly.figureIndex = this.scene.length);
        moon.polygons.forEach(poly => poly.figureIndex = this.scene.length + 1);

        this.math3D.calcCenter(earth);
        this.math3D.calcCenter(moon);

        this.scene.forEach(figure => {
            const animations = [];
            figure.animations.forEach(anim => {
                const { method, value, center } = anim;
                if (value != 0) {
                    animations.push({
                        method: method,
                        value: value,
                        center: center,
                    })
                }
            })
            this.sceneAnimations.push(animations);
            figure.dropAnimation();
        })

        if (this.scene.length != 0) {
            this.scene[this.scene.length - 1] = new Figure();
        }
        this.scene.push(earth);
        this.scene.push(moon);
        this.scene.push(new Figure());

        const animationsE = [];
        animationsE.push({
            method: 'rotateZ',
            value: 0.01,
            center: earth.center,
        });
        animationsE.push({
            method: 'rotateZ',
            value: 0.01,
            center: new Point(),
        });
        this.sceneAnimations[this.scene.length - 3] = animationsE;
        const animationsM = [];
        animationsM.push({
            method: 'rotateZ',
            value: 0.01,
            center: earth.center,
        });
        this.sceneAnimations[this.scene.length - 2] = animationsM;
    }

    setAnimation() {
        const rotateX = document.getElementById('rotateXValue').value - 0;
        let xx = document.getElementById('rotateXCenterX').value;
        let xy = document.getElementById('rotateXCenterY').value;
        let xz = document.getElementById('rotateXCenterZ').value;
        xx = xx === '' ? '' : xx - 0;
        xy = xy === '' ? '' : xy - 0;
        xz = xz === '' ? '' : xz - 0;

        const rotateY = document.getElementById('rotateYValue').value - 0;
        let yx = document.getElementById('rotateYCenterX').value - 0;
        let yy = document.getElementById('rotateYCenterY').value - 0;
        let yz = document.getElementById('rotateYCenterZ').value - 0;
        yx = yx === '' ? '' : yx - 0;
        yy = yy === '' ? '' : yy - 0;
        yz = yz === '' ? '' : yz - 0;

        const rotateZ = document.getElementById('rotateZValue').value - 0;
        let zx = document.getElementById('rotateZCenterX').value - 0;
        let zy = document.getElementById('rotateZCenterY').value - 0;
        let zz = document.getElementById('rotateZCenterZ').value - 0;
        zx = zx === '' ? '' : zx - 0;
        zy = zy === '' ? '' : zy - 0;
        zz = zz === '' ? '' : zz - 0;

        const zoom = document.getElementById('zoomValue').value - 0;
        if (zoom != 0) {
            let x = document.getElementById('zoomCenterX').value - 0;
            let y = document.getElementById('zoomCenterY').value - 0;
            let z = document.getElementById('zoomCenterZ').value - 0;
            x = x === '' ? '' : x - 0;
            y = y === '' ? '' : y - 0;
            z = z === '' ? '' : z - 0;
        }

        const animations = [];
        animations.push({
            method: 'rotateX',
            value: rotateX,
            center: new Point(xx, xy, xz),
        })
        animations.push({
            method: 'rotateY',
            value: rotateY,
            center: new Point(yx, yy, yz),
        })
        animations.push({
            method: 'rotateZ',
            value: rotateZ,
            center: new Point(zx, zy, zz),
        })
        this.sceneAnimations[this.sceneAnimations.length - 1] = animations;
    }

    doAnimation(figure) {
        if (!figure.animated) {
            figure.doAnimation(this.math3D);
            figure.children.forEach(child => {
                let animCount = 0;
                figure.animations.forEach(anim => {
                    const { method, value, center } = anim;
                    if (center != figure.center) {
                        this.scene[child].setAnimation(method, value, center);
                        animCount++;
                    }
                })
                this.doAnimation(this.scene[child]);
                for (let i = 0; i < animCount; i++) {
                    this.scene[child].animations[this.scene[child].animations.length - i - 1].value = 0;
                }
            })
            figure.animated = true;
        }
        this.changedFigure = false;
    }

    canDoAnimation() {
        this.canAnimate = document.getElementById('doAnimation').checked;
        if (!this.canAnimate && !this.addedAnims) {
            this.scene.forEach(figure => {
                const animations = [];
                figure.animations.forEach(anim => {
                    const { method, value, center } = anim;
                    if (value != 0) {
                        animations.push({
                            method: method,
                            value: value,
                            center: center,
                        })
                    }
                })
                this.sceneAnimations.push(animations);
                figure.dropAnimation();
            })
            document.getElementById('addFigureDiv').classList.remove('hide');
            this.addedAnims = true;
            console.log(10000001);
        } else if(this.canAnimate) {
            this.sceneAnimations.forEach((anim, i) => {
                this.scene[i].animations = anim;
            })
            this.sceneAnimations = [];
            document.getElementById('addFigureDiv').classList.add('hide');
            this.addedAnims = false;
        }
        console.log(this.scene, this.sceneAnimations);
    }

    /* ************** */
    /* changing scene */
    /* ************** */

    changeScene = () => {
        this.canChangeScene = true;
    }

    clearScene = () => {
        this.LIGHT = [
            new Light(-10, 20, 10, 8000, '#ff0000'),
            new Light(10, -20, -10, 5000, '#0000ff'),
        ];
        this.scene = [];
        this.sceneAnimations = [];

        this.canAnimate = false;
    }

    addFigure = () => {
        this.setAnimation();
        this.scene.push(new Figure());
        document.getElementById('figureSettings').classList.add('hide');
        document.querySelectorAll('.figureAnimCenter').forEach(elem => elem.value = '');
    }

    changePrintShadows = () => {
        this.canPrintShadows = document.getElementById('printShadows').checked;
    }

    changePrintPoints = () => {
        this.canPrintPoints = document.getElementById('printPoints').checked;
    }

    changePrintEdges = () => {
        this.canPrintEdges = document.getElementById('printEdges').checked;
    }

    changePrintPolygons = () => {
        this.canPrintPolygons = document.getElementById('printPolygons').checked;
    }

    /* ************************** */
    /* changing figure parameters */
    /* ************************** */

    figureChangeHandler = (event) => {
        if (!this.changedFigure) {
            let figure = new Figure();
            const type = event.target.value;
            switch (type) {
                case 'solarSystem': {
                    this.setSolarSystem();
                    document.getElementById('figureSettings').classList.add('hide');
                    break;
                }
                case 'cube': {
                    figure = new Cube();
                    this.ui3D.figureChangeParamsVisiblity(0);
                    break;
                }
                case 'sphere': {
                    figure = new Sphere();
                    this.ui3D.figureChangeParamsVisiblity(1);
                    break;
                }
                case 'ellipsoid': {
                    figure = new Ellipsoid();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'cone': {
                    figure = new Cone();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'hyperboloid1': {
                    figure = new Hyperboloid1();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'hyperboloid2': {
                    figure = new Hyperboloid2();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'paraboloidHyp': {
                    figure = new ParaboloidHyp();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'paraboloidEll': {
                    figure = new ParaboloidEll();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'cylinderEll': {
                    figure = new CylinderEll();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'cylinderHyp': {
                    figure = new CylinderHyp();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'cylinderPar': {
                    figure = new CylinderPar();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
                case 'torus': {
                    figure = new Torus();
                    this.ui3D.figureChangeParamsVisiblity(3);
                    break;
                }
            }

            if (type != 'solarSystem') {
                if (this.scene.length != 0)
                    this.scene[this.scene.length - 1] = figure;
                else this.scene.push(figure);
                document.getElementById('figureSettings').classList.remove('hide');
            }

            const count = document.getElementById('figureCount').value - 0;
            if (count) this.figureCountChange(count);

            const color = document.getElementById('figureColor').value;
            if (color) this.figureColorChange(color);

            document.querySelectorAll('.figureParam').forEach(elem => elem.value = '');

            this.canChangeScene = false;

            this.changedFigure = true;
        }
    }

    figureColorChange = (color) => {
        this.scene[this.scene.length - 1].polygons.forEach(polygon => polygon.color = polygon.hexToRgb(color));
    }

    figureCountChange = (count, a = 5, b = 5, c = 5) => {
        let figure = this.scene[this.scene.length - 1];
        const type = figure.constructor.name;
        switch (type) {
            case 'Cube': {
                figure = new Cube();
                break;
            }
            case 'Sphere': {
                figure = new Sphere(count, a);
                break;
            }
            case 'Ellipsoid': {
                figure = new Ellipsoid(count, a, b, c);
                break;
            }
            case 'Cone': {
                figure = new Cone(count, a, b, c);
                break;
            }
            case 'Hyperboloid1': {
                if (count % 2 === 1) count += 1;
                figure = new Hyperboloid1(count, a, b, c);
                break;
            }
            case 'Hyperboloid2': {
                if (count % 2 === 1) count += 1;
                figure = new Hyperboloid2(count, a, b, c);
                break;
            }
            case 'ParaboloidHyp': {
                figure = new ParaboloidHyp(count, a, b, c);
                break;
            }
            case 'ParaboloidEll': {
                figure = new ParaboloidEll(count, a, b, c);
                break;
            }
            case 'CylinderEll': {
                figure = new CylinderEll(count, a, b, c);
                break;
            }
            case 'CylinderHyp': {
                figure = new CylinderHyp(count, a, b, c);
                break;
            }
            case 'CylinderPar': {
                figure = new CylinderPar(count, a, b, c);
                break;
            }
            case 'Torus': {
                figure = new Torus(count, a, b, c);
                break;
            }
        }
        const color = document.getElementById('figureColor').value;
        if (color) this.figureColorChange(color);

        figure.polygons.forEach(poly => poly.figureIndex = this.scene.length - 1);

        this.scene[this.scene.length - 1] = figure;
    }

    /* *************** */
    /* about callbacks */
    /* *************** */

    wheel = (event) => {
        const delta = event.wheelDelta > 0 ? 1 / this.zoom : this.zoom;

        if (!this.canAnimate) {
            const matrix = this.math3D.zoom(delta);

            if (this.canChangeScene)
                this.scene.forEach(scene => scene.points.forEach(point => this.math3D.transform(matrix, point)));
            else
                this.scene[this.scene.length - 1].points.forEach(point => this.math3D.transform(matrix, point));
        } else {
            const d = event.wheelDelta > 0 ? -this.zoom : this.zoom;
            this.WIN.camera.z += d;
            this.WIN.focus.z += d;
        }
    }
    mouseDown = () => {
        this.canMove = true;
    }
    mouseUp = () => {
        this.canMove = false;
    }
    dblclick = () => {
        this.canDrag = this.canDrag === true ? false : true;
    }
    mouseLeave = () => {
        this.canMove = false;
        this.canDrag = false;
    }
    mouseMove = (event) => {
        if (!this.canAnimate) {
            if (this.canDrag) {
                const { movementX, movementY } = event;

                const matrix = this.math3D.drag(movementX * this.drag, -movementY * this.drag);

                if (this.canChangeScene)
                    this.scene.forEach(figure => figure.points.forEach(point => this.math3D.transform(matrix, point)));
                else
                    this.scene[this.scene.length - 1].points.forEach(point => this.math3D.transform(matrix, point));
            }
            else if (this.canMove) {
                const { movementX, movementY } = event;

                const matrixX = this.math3D.rotateX(movementY * this.rotate);
                const matrixY = this.math3D.rotateY(movementX * this.rotate);

                if (this.canChangeScene) {
                    this.scene.forEach(figure => figure.points.forEach(point => this.math3D.transform(matrixX, point)));
                    this.scene.forEach(figure => figure.points.forEach(point => this.math3D.transform(matrixY, point)));
                }
                else {
                    this.scene[this.scene.length - 1].points.forEach(point => this.math3D.transform(matrixX, point));
                    this.scene[this.scene.length - 1].points.forEach(point => this.math3D.transform(matrixY, point));
                }
            }

        }
    }

    /* *********** */
    /* about print */
    /* *********** */

    clear() {
        this.canvas.clear('#C7CFFF');
    }

    printScene(scene) {
        if (this.canPrintPolygons) {
            const polygons = [];
            scene.forEach(figure => {
                this.math3D.calcCenters(figure);
                this.math3D.calcRadius(figure);
                this.math3D.calcDistance(figure, this.WIN.camera, 'distance');

                if (figure.constructor.name === ('Sphere' || 'Ellipsoid')) {
                    this.math3D.calcCenter(figure);
                    this.math3D.changePolygonVisiblity(figure);
                }

                figure.polygons.forEach(poly => polygons.push(poly));
            })
            this.math3D.sortByArtistAlgorythm(polygons);

            polygons.forEach(polygon => {
                this.LIGHT.forEach((light, i) => {
                    const distance = Math.sqrt(Math.pow(light.x - polygon.center.x, 2) +
                        Math.pow(light.y - polygon.center.y, 2) +
                        Math.pow(light.z - polygon.center.z, 2));
                    polygon.lumen[i] = this.math3D.calcIllumination(distance, light.lumen);
                })
            })

            polygons.forEach(polygon => {
                if (polygon.visible) {
                    let { r, g, b } = polygon.color;
                    let R = 0, G = 0, B = 0;

                    this.LIGHT.forEach((light, i) => {
                        const rLight = light.color.r;
                        const gLight = light.color.g;
                        const bLight = light.color.b;
                        const distance = Math.sqrt(Math.pow(light.x - polygon.center.x, 2) +
                            Math.pow(light.y - polygon.center.y, 2) +
                            Math.pow(light.z - polygon.center.z, 2));

                        const { isShadow, dark } = this.canPrintShadows ? this.math3D.calcShadow(polygon, this.scene, light, i) : { isShadow: false, dark: 1 };
                        const lumen = this.math3D.calcIllumination(distance, light.lumen * (isShadow ? dark : 1));

                        R += Math.round(r * lumen + rLight * lumen);
                        G += Math.round(g * lumen + gLight * lumen);
                        B += Math.round(b * lumen + bLight * lumen);
                    })

                    R = R > 255 ? 255 : R;
                    G = G > 255 ? 255 : G;
                    B = B > 255 ? 255 : B;

                    const points = [];
                    polygon.points.forEach(num => {
                        points.push(scene[polygon.figureIndex].points[num])
                    });
                    this.canvas.polygon(
                        points.map(point => {
                            return {
                                x: this.math3D.xs(point),
                                y: this.math3D.ys(point),
                            }
                        }),
                        polygon.rgbToString(R, G, B)
                    );
                }
            })
        }

        if (this.canPrintEdges) {
            scene.forEach(figure => {
                figure.edges.forEach(edge =>
                    this.canvas.line(
                        this.math3D.xs(figure.points[edge.p1]), this.math3D.ys(figure.points[edge.p1]),
                        this.math3D.xs(figure.points[edge.p2]), this.math3D.ys(figure.points[edge.p2]),
                    )
                );
            })
        }

        if (this.canPrintPoints) {
            scene.forEach(figure => {
                figure.points.forEach(point =>
                    this.canvas.point(
                        this.math3D.xs(point),
                        this.math3D.ys(point),
                        '#337'
                    ));
            })
        }
    }

    renderScene() {
        this.clear();
        this.printScene(this.scene);
        this.canvas.textCanvas(this.FPS + ' FPS', 10, 30);

        this.canvas.render();
    }

    addEventListeners() {
        document.getElementById('figureSelect').addEventListener('change', (event) => this.figureChangeHandler(event));

        document.getElementById('printShadows').addEventListener('click', this.changePrintShadows);
        //document.getElementById('printShadows').checked = true;

        document.getElementById('printPoints').addEventListener('click', this.changePrintPoints);
        document.getElementById('printEdges').addEventListener('click', this.changePrintEdges);
        document.getElementById('printPolygons').addEventListener('click', this.changePrintPolygons);
        document.getElementById('printPolygons').checked = true;

        document.getElementById('clearScene').addEventListener('click', this.clearScene);

        document.getElementById('changeScene').addEventListener('click', this.changeScene);

        document.getElementById('addFigure').addEventListener('click', this.addFigure);

        document.getElementById('doAnimation').addEventListener('click', () => this.canDoAnimation());
        //document.getElementById('doAnimation').checked = true;
    }
}