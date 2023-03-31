class UI3D {
    constructor({figureCountChange, figureColorChange}) {
        this.figureCountChange = figureCountChange;
        this.figureColorChange = figureColorChange;
        document.querySelectorAll('.figureParam').forEach(input => input.addEventListener('input', this.figureChangeParams));
        document.getElementById('figureCount').addEventListener('input', this.figureCountChangeHandler);
        document.getElementById('figureColor').addEventListener('keyup', (event) => this.figureColorChangeHandler(event));
    }

    figureChangeParams = () => {
        let a = document.getElementById('figureA').value - 0;
        let b = document.getElementById('figureB').value - 0;
        let c = document.getElementById('figureC').value - 0;
        a = a ? a : 5;
        b = b ? b : 5;
        c = c ? c : 5;

        let count = document.getElementById('figureCount').value - 0;
        count = count ? count : 10;
        this.figureCountChange(count, a, b, c);

        const color = document.getElementById('figureColor').value;
        if (color) this.figureColorChange(color);
    }

    figureChangeParamsVisiblity(num) {
        const a = document.getElementById('figureA');
        const b = document.getElementById('figureB');
        const c = document.getElementById('figureC');
        a.classList.add('hide');
        b.classList.add('hide');
        c.classList.add('hide');
        if (num >= 1) {
            a.classList.remove('hide');
        }
        if (num >= 2) {
            b.classList.remove('hide');
        }
        if (num === 3) {
            c.classList.remove('hide');
        }
    }

    figureCountChangeHandler = (event) => {
        let a = document.getElementById('figureA').value - 0;
        let b = document.getElementById('figureB').value - 0;
        let c = document.getElementById('figureC').value - 0;
        a = a ? a : 5;
        b = b ? b : 5;
        c = c ? c : 5;

        const count = event.target.value - 0;
        if (count) this.figureCountChange(count, a, b, c);

        const color = document.getElementById('figureColor').value;
        if (color) this.figureColorChange(color);
    }
    
    figureColorChangeHandler = (event) => {
        const color = event.target.value;
        if (color) this.figureColorChange(color);
    }
}