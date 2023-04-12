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
    <p id="addFigureDiv">
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
    <p id="figureSettingsDiv"></p>
    <canvas id='canvas3D'></canvas>
</div>
`