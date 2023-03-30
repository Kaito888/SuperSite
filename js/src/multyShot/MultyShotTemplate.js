Template.prototype.MultyShotTemplate = () => `
<div class="content-item" id="multyShot">
    <span>
        Сколько раз стрелять будешь? <input id="count" placeholder="количество пуль">
    </span>
    <p>
        <span>
            Введи минимальное и максимальное значение х и у <br>(Мишень находится в интервале от -1 до 1)
        </span>
        <input id="x" placeholder="тут минимальное">
        <input id="y" placeholder="тут максимальное">
    </p>
    <span>
        Сейчас нажми на кнопку и посмотри, сколько очков набрал :3
    </span>
    <button id="multyShotButton" class="button">Выстрел!</button>
    <p>
        <span id="result"></span>
    </p>
    <canvas id="aim" width="300" height="300"> </canvas>
</div>
`