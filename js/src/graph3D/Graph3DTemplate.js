Template.prototype.Graph3DTemplate = () => `
<div class="content-item" id="graph3D">
    <p>
        <span>Проигрывать анимацию</span>
        <input type="checkbox" id="doAnimation">
    </p>
    <div>
        <span>Затенённость</span><input type="checkbox" id="printShadows">
    </div>
    <div>
        <span>Вершины</span><input type="checkbox" id="printPoints">
        <span>Грани</span><input type="checkbox" id="printEdges">
        <span>Полигоны</span><input type="checkbox" id="printPolygons">
    </div>
    <p>
        <button id="changeScene">Двигать сцену</button>
        <button class ="deleteButton" id="clearScene">Очистить сцену</button>
    </p>
    <p id="addFigureDiv" class="hide">
        <select class="dropdown" id="figureSelect">
            <option value="solarSystem">Солнечная система</option>
            <option value="cube">Куб</option>
            <option value="sphere">Сфера</option>
            <option value="ellipsoid">Эллипсоид</option>
            <option value="cone">Конус</option>
            <option value="hyperboloid1">Однополостный гиперболоид</option>
            <option value="hyperboloid2">Двуполосный гиперболоид</option>
            <option value="paraboloidEll">Эллиптический параболоид</option>
            <option value="paraboloidHyp">Гиперболический параболоид</option>
            <option value="cylinderEll">Эллиптический цилиндр</option>
            <option value="cylinderHyp">Гиперболический цилиндр</option>
            <option value="cylinderPar">Параболический цилиндр</option>
            <option value="torus">Тор</option>
        </select>
        <button id="addFigure">Добавить фигуру</button>
    </p>
    <div id="figureSettings" class="hide">
        <p>
            <input id="figureColor" placeholder="цвет фигуры">
            <span>Детализация фигуры</span>
            <input type="range" min="3" max="100" id="figureCount">
            <span>Параметры фигуры</span>
            <input type="range" min="1" max="20" class="figureParam" id="figureA">
            <input type="range" min="1" max="20" class="hide figureParam" id="figureB">
            <input type="range" min="1" max="20" class="hide figureParam" id="figureC">
        </p>
        <p>
            <div>
                <span>Поворот Ox</span>
                <input type="range" min="0" max="0.5" step="0.005" value="0" id="rotateXValue">
                <span>Центр</span>
                <input placeholder="x" class="figureAnimCenter" id="rotateXCenterX">
                <input placeholder="y" class="figureAnimCenter" id="rotateXCenterY">
                <input placeholder="z" class="figureAnimCenter" id="rotateXCenterZ">
            </div>
            <div>
                <span>Поворот Oy</span>
                <input type="range" min="0" max="0.5" step="0.005" value="0" id="rotateYValue">
                <span>Центр</span>
                <input placeholder="x" class="figureAnimCenter" id="rotateYCenterX">
                <input placeholder="y" class="figureAnimCenter" id="rotateYCenterY">
                <input placeholder="z" class="figureAnimCenter" id="rotateYCenterZ">
            </div>
            <div>
                <span>Поворот Oz</span>
                <input type="range" min="0" max="0.5" step="0.005" value="0" id="rotateZValue">
                <span>Центр</span>
                <input placeholder="x" class="figureAnimCenter" id="rotateZCenterX">
                <input placeholder="y" class="figureAnimCenter" id="rotateZCenterY">
                <input placeholder="z" class="figureAnimCenter" id="rotateZCenterZ">
            </div>
            <div>
                <span>Зум</span>
                <input type="range" min="-10" max="10" step="1" value="0" id="zoomValue">
                <span>Центр</span>
                <input placeholder="x" class="figureAnimCenter" id="zoomCenterX">
                <input placeholder="y" class="figureAnimCenter" id="zoomCenterY">
                <input placeholder="z" class="figureAnimCenter" id="zoomCenterZ">
            </div>
        </p>
    </div>
    <canvas id='canvas3D'></canvas>
</div>
`