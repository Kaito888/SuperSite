Template.prototype.PolyCalculatorTemplate = () => `
<div class="content-item" id="polyCalculator">
    <div>
        <input id="poly-input-1" placeholder="полином 1">
        <input id="poly-input-2" placeholder="полином 2">
        <textarea id="poly-point" placeholder="точка"></textarea>
    </div>
    <button class="polyOperand" data-operand="add">+</button>
    <button class="polyOperand" data-operand="sub">-</button>
    <button class="polyOperand" data-operand="mult">*</button>
    <button id="polyPointButton">значение в ∙</button>
</div>
`