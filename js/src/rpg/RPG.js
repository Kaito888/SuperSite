class RPG extends Component {
    addEventListeners() {
        var currentQuest = 0;

        function answerClickHandler(answer, ask) {
            if (answer) {
                for (var i = 0; i < ask.answers.length; i++) {
                    if (answer.toLowerCase() === ask.answers[i].text) {
                        currentQuest = ask.answers[i].goTo;
                        return setQuest();
                    }
                }
                if (Number(ask.goToWrong)) {
                    currentQuest = ask.goToWrong;
                    return setQuest();
                }
            }
        }

        function genAsk(ask) {
            if (ask.exit) {
                currentQuest = 0;
                setTimeout(setQuest, 5000);
            }

            var div = document.createElement('div');

            if (!ask.exit) {
                if (!ask.continue) {
                    var span = document.createElement('span');
                    span.innerHTML = ask.question;
                    div.appendChild(span);

                    var input = document.createElement('input');
                    input.placeholder = 'Отвечай';
                    div.appendChild(input);
                }

                if (ask.continue) {
                    var input = document.createElement('input');
                    input.placeholder = 'Введи что-нибудь';
                    div.appendChild(input);
                }

                var button = document.createElement('button');
                button.innerHTML = 'Продолжить';
                button.addEventListener('click', function () {
                    answerClickHandler(input.value, ask);
                });
                div.appendChild(button);
            }

            document.getElementById('question-asks').appendChild(div);
        }

        function setQuest() {
            var question = quests[currentQuest];
            document.getElementById('question-title').innerHTML = question.title;
            document.getElementById('question-description').innerHTML = question.description;
            document.getElementById('question-image').src = question.image;

            document.getElementById('question-asks').innerHTML = '';
            for (var i = 0; i < question.asks.length; i++) {
                genAsk(question.asks[i]);
            }
        }

        setQuest();
    }
}