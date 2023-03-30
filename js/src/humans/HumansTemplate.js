Template.prototype.HumansTemplate = () => `
<div class="content-item" id="humans">
    <h4>Создай своего человека!</h4>
    <div>
        <div>
            <input id="humanName" placeholder="имя">
            <input id="humanAge" placeholder="возраст">
            <input id="humanMoney" placeholder="деньги">
            <input id="humanGender" placeholder="м/ж">
            <button id="createHuman" class="button">Создать!</button>
        </div>
    </div>
    <h4>Все человеки</h4>
    <span>Имя - начальный возраст - пол</span>
    <div id="allHumans"></div>
    <h4>А тут то, чем человеки занимаются</h4>
    <div>
        <div>
            <input id="necromancer" placeholder="кто возрождать будет">
            <input id="zombie" placeholder="кого">
            <button id="revive" class="button">Возродить</button>
        </div>
        <div>
            <input id="work" placeholder="кто работает">
            <input id="workTime" placeholder="сколько времени">
            <button id="working" class="button">Работать</button>
        </div>
        <div>
            <input id="eat" placeholder="кто ест">
            <button id="eating" class="button">Есть</button>
        </div>
        <div>
            <input id="party" placeholder="кто развлекается">
            <button id="partying" class="button">Развлекаться</button>
        </div>
        <div>
            <input id="multiply1" placeholder="кто размножается">
            <input id="multiply2" placeholder="с кем">
            <button id="multiplying" class="button">Размножаться</button>
            <div id="kid"></div>
            <img id="yeshomo" width="500px">
        </div>
    </div>
    <h4>Проверить человека</h4>
    <span>Узнайте всю доступную информацию о своём человеке</span>
    <input id="checkHuman" placeholder="про кого узнать">
    <button id="checkHumanButton" class="button">Узнать</button>
    <div>
        <span>Имя - возраст - пол - деньги - выносливость - статус - счастье</span>
    </div>
    <div id="humanInfo"></div>
</div>
`