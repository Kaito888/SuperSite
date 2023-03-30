class Background extends Component {
    addEventListeners() {
        document.getElementById('openBGpopUp').addEventListener('click', this.openBGchangeHandler);
        document.getElementById('closeBGpopUp').addEventListener('click', this.closeBGchangeHandler);
        document.querySelectorAll('.chooseBG').forEach(button => button.addEventListener('click', this.BGchangeHandler));
    }

    openBGchangeHandler() {
        document.getElementById('backgroung').classList.remove('hide');
    }

    closeBGchangeHandler() {
        document.getElementById('backgroung').classList.add('hide');
    }

    BGchangeHandler(event) {
        let number = 0;
        number = event.target.dataset.choose;
        document.body.style.background = `url("img/bg${number}.png") no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';
    }
}