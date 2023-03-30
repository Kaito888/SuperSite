class MultyShot extends Component {
    addEventListeners() {
        document.getElementById('multyShotButton').addEventListener('click', this.button);
    }

    button() {
        function shotCoor(min, max) { //случайные коры выстрела
            return Math.random() * (max - min) + min;
        }

        function shotCenter(x, y) { //попал в центр
            return (x == 0 && y == 0) ? 10 : 0;
        }

        function shotStar(x, y) { //попал в звезду
            return (Math.cbrt(x * x) + Math.cbrt(y * y) <= 1) ? 4 : 0;
        }

        function shotRhomb(x, y) { //попал в ромб
            return ((y >= 0 && y <= -Math.abs(x) + 1) || (y <= 0 && y >= Math.abs(x) - 1)) ? 3 : 0;
        }

        function shotCircle(x, y) { //попал в круг
            return (x * x + y * y <= 1) ? 2 : 0;
        }

        function shotSquare(x, y) { //попал в квадрат
            return (Math.abs(x) <= 1 && Math.abs(y) <= 1) ? 1 : 0;
        }

        function shot(min, max) { //куда попал, возвращает колво очков
            var x = shotCoor(min, max);
            var y = shotCoor(min, max);
            y = -y;

            var canvas = document.getElementById("aim");
            var drawing = canvas.getContext("2d");

            drawing.beginPath(); //звезда
            drawing.moveTo(160 + x * 150, 150 + y * 150);
            drawing.quadraticCurveTo(150 + x * 150, 150 + y * 150, 150 + x * 150, 160 + y * 150);
            drawing.quadraticCurveTo(150 + x * 150, 150 + y * 150, 140 + x * 150, 150 + y * 150);
            drawing.quadraticCurveTo(150 + x * 150, 150 + y * 150, 150 + x * 150, 140 + y * 150);
            drawing.quadraticCurveTo(150 + x * 150, 150 + y * 150, 160 + x * 150, 150 + y * 150);
            drawing.fillStyle = "rgb(255, 255, 0)";
            drawing.fill();

            drawing.beginPath(); //пуля попала
            drawing.arc(150 + x * 150, 150 + y * 150, 2, 0, Math.PI * 2, true);
            drawing.fillStyle = "rgb(255, 0, 0)";
            drawing.fill();

            return shotCenter(x, y) || shotStar(x, y) || shotRhomb(x, y) ||
                shotCircle(x, y) || shotSquare(x, y) || 0;
        }

        function shooter(count, min, max) { //стреляет count раз от min до max
            var result = 0;

            for (var i = 0; i < count; ++i) {
                result = result + shot(min, max);
            }
            return result;
        }

        function winningPhrase(score = 0, count) {
            phrase = score / count;
            return phrase < 1 ? "Тебе даже сказали где мишень..." : 
                phrase < 2 ? "Мда... Попробуй всё-таки в мишень целиться" :
                phrase < 3 ? "Неплохо" :
                phrase < 4 ? "Да ты меткий!" :
                "O-O круто";
        }

        var canvas = document.getElementById("aim");
        var context = canvas.getContext("2d");

        context.fillStyle = "rgb(102, 102, 255)";
        context.fillRect(0, 0, 300, 300);

        context.beginPath(); //круг
        context.arc(150, 150, 150, 0, Math.PI * 2, true);
        context.fillStyle = "rgb(178, 102, 255)";
        context.fill();

        context.beginPath(); //ромб
        context.moveTo(150, 0);
        context.lineTo(300, 150);
        context.lineTo(150, 300);
        context.lineTo(0, 150);
        context.lineTo(150, 0);
        context.fillStyle = "rgb(230, 102, 255)";
        context.fill();

        context.beginPath(); //звезда
        context.moveTo(150, 0);
        context.quadraticCurveTo(170, 120, 300, 150);
        context.quadraticCurveTo(170, 170, 150, 300);
        context.quadraticCurveTo(120, 170, 0, 150);
        context.quadraticCurveTo(120, 120, 150, 0);
        context.fillStyle = "rgb(255, 100, 176)";
        context.fill();

        context.beginPath(); //центр
        context.arc(150, 150, 1, 0, Math.PI * 2, true);
        context.stroke();

        var count = document.getElementById("count").value - 0;
        var x = document.getElementById("x").value - 0;
        var y = document.getElementById("y").value - 0;
        var score = shooter(count, x, y);
        var phrase = winningPhrase(score, count);
        document.getElementById("result").innerHTML = "Твой результат " + score + "! " + phrase;
    }
}