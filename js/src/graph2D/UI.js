class UI {
    constructor({ addFunction, delFunction, setColorFunction, changeZeroAndDerivative, deleteZeroAndDerevative, changeGraph, changeZero }) {
        this.addFunction = addFunction;
        this.delFunction = delFunction;
        this.setColorFunction = setColorFunction;
        this.changeZeroAndDerivative = changeZeroAndDerivative;
        this.deleteZeroAndDerevative = deleteZeroAndDerevative;
        this.changeGraph = changeGraph;
        this.changeZero = changeZero;
        this.num = 0;
        document.getElementById('changeGraph').addEventListener('click', () => this.changeGraphHandler());
        document.getElementById('addFunction').addEventListener('click', () => this.addFunctionHandler());
    }

    addFunctionHandler() {
        //set function
        const input = document.createElement('input');
        input.dataset.num = this.num;
        input.placeholder = 'функция';
        input.addEventListener('keyup', (event) => this.keyUpHandler(event));
        //set function color
        const inputColor = document.createElement('input');
        inputColor.placeholder = 'цвет';
        inputColor.dataset.num = this.num;
        inputColor.addEventListener('keyup', (event) => this.keyUpSetColorHandler(event));
        //set zero
        const a = document.createElement('input');
        a.placeholder = 'a';
        a.dataset.num = this.num;
        a.addEventListener('keyup', (event) => this.keyUpSegmentAHandler(event));

        const b = document.createElement('input');
        b.placeholder = 'b';
        b.dataset.num = this.num;
        b.addEventListener('keyup', (event) => this.keyUpSegmentBHandler(event));

        //checkbox
        const needDerivative = document.createElement('input');
        needDerivative.type = 'checkbox';
        needDerivative.dataset.num = this.num;
        needDerivative.addEventListener('click', (event) => this.changeZeroAndDerivativeHandler(event));

        const derivative = document.createElement('span');

        const button = document.createElement('button');
        button.innerHTML = 'Удалить';
        button.classList.add('deleteButton');
        button.addEventListener('click', () => {
            div.removeChild(input);
            div.removeChild(inputColor);
            div.removeChild(a);
            div.removeChild(b);
            div.removeChild(button);
            div.removeChild(needDerivative);
            div.removeChild(br);
            this.delFunction(input.dataset.num);
        });

        const br = document.createElement('br');

        const div = document.getElementById('funcsInputs');
        div.appendChild(needDerivative);
        div.appendChild(input);
        div.appendChild(inputColor);
        div.appendChild(a);
        div.appendChild(b);
        div.appendChild(button);
        div.appendChild(br);
        this.num++;
    }

    keyUpHandler(event) {
        try {
            let f;
            eval(`f = function(x){return ${event.target.value}}`);
            this.addFunction(f, event.target.dataset.num);
        } catch (e) { console.log(e); }
    }

    keyUpSetColorHandler(event) {
        if (event.target.value) {
            this.setColorFunction(event.target.value, event.target.dataset.num);
        }
    }

    changeZeroAndDerivativeHandler(event) {
        if (event.target.checked) {
            this.changeZeroAndDerivative(event.target.dataset.num);
        } else {
            this.deleteZeroAndDerevative(event.target.dataset.num);
        }
    }

    changeGraphHandler() {
        const width = document.getElementById('graphWidth').value - 0;
        const color = document.getElementById('graphColor').value;
        if (width || color) {
            this.changeGraph(width, color);
        }
    }

    keyUpSegmentAHandler(event) {
        if (event.target.value) {
            this.changeZero(event.target.dataset.num, event.target.value, 'a');
        }
    }

    keyUpSegmentBHandler(event) {
        if (event.target.value) {
            this.changeZero(event.target.dataset.num, event.target.value, 'b');
        }
    }
}