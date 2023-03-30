class UniCalculator extends Component {
    addEventListeners() {
        document.querySelectorAll('.operand').forEach(button => button.addEventListener('click', this.operandHandler));
    }

    operandHandler(event) {
        const input1 = document.getElementById('calc-value-1');
        const input2 = document.getElementById('calc-value-2');
        const calc = new Calculator;
        const a = calc.getEntity(input1.value);
        const b = calc.getEntity(input2.value);
        const operand = event.target.dataset.operand;
        input1.value = calc[operand](a, b).toString();
        input2.value = '';
    }
}