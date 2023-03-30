Template.prototype.RootsTemplate = () => `
<div class="content-item" id="roots">
    <span>Решение уравнений 1, 2, 3 и 4 степеней</span>
    <div>
        <input id="a" placeholder="a">
        <input id="b" placeholder="b">
        <input id="c" placeholder="c">
        <input id="d" placeholder="d">
        <input id="e" placeholder="e">
    </div>
    <p>
        <button id="getRoots" class="button">Найти корни</button>
        <span id="resultRoots"></span>
    </p>
    <canvas id="graph1" width="300" height="300"> </canvas>
</div>
`