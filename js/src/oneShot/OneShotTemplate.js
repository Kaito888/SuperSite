Template.prototype.OneShotTemplate = () => `
<div class="content-item" id="oneShot">
    <div>
        <span>Введи координаты х и у пули <br>(Мишень находится в интервале от -1 до 1)</span>
    </div>
    <p>
        <input id="x1" placeholder="введите x">
        <input id="y1" placeholder="введите y">
    </p>
    <p>
        <button id="oneShotButton" class="button">Выстрел!</button>
        <span id="result1"></span>
    </p>
    <canvas id="aim1" width="300" height="300"> </canvas>
</div>
`