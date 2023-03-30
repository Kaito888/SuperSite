Template.prototype.UniCalculatorTemplate = () => `
<div class="content-item" id="calculator">
    <div>
        <textarea id="calc-value-1"></textarea>
        <textarea id="calc-value-2"></textarea>
    </div>
    <button class="operand" data-operand="add">+</button>
    <button class="operand" data-operand="sub">-</button>
    <button class="operand" data-operand="mult">*</button>
    <button class="operand" data-operand="div">/</button>
    <button class="operand" data-operand="pow">^</button>
    <button class="operand" data-operand="prod">x</button>
</div>
`