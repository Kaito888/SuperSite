Template.prototype.FigureSettingsTemplate = () => `
<div id="figureSettings">
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
`