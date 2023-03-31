Template.prototype.Graph2DTemplate = () => `
<div class="content-item" id="graph2D">
    <div>
        <button id="popUpOpen" class="button">Настроить графики</button>
    </div>
    <div id="popUp" class="popUp hide">
        <button id="popUpClose" class="closeButton">Закрыть</button>
        <p id="popUpBody">
            <div>
                <input id="graphColor" placeholder="цвет графика">
                <input id="graphWidth" placeholder="толщина графика">
                <button id="changeGraph" class="button">Поменять</button>
            </div>
            <p>
                <button id='addFunction' class="button">Добавить график</button>
                <div id='funcsInputs'></div>
            </p>
        </p>
    </div>
    <canvas id='canvas2D'></canvas>
</div>
`