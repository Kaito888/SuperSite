class Humans extends Component {
    addEventListeners() {
        const humans = [];

        function humanHandler() {
            var name = document.getElementById('humanName').value;
            var age = document.getElementById('humanAge').value - 0;
            var money = document.getElementById('humanMoney').value - 0;
            var gender = document.getElementById('humanGender').value;
            if (name) {
                if (age == 0) {
                    money = 0;
                }
                var check = 0;
                for (var i = 0; i < humans.length; i++) {
                    if (humans[i].name == name) {
                        check = 1;
                    }
                }
                if (check == 0) {
                    if (gender.toLowerCase() == 'м') {
                        var newHuman = new Human(name, age, money);
                    }
                    if (gender.toLowerCase() == 'ж') {
                        var newHuman = new Woman(name, age, money);
                    }
                    if (gender.toLowerCase() == 'м' || gender.toLowerCase() == 'ж') {
                        humans.push(newHuman);
                        var people = document.createElement('div');

                        var humanName = document.createElement('span');
                        var humanAge = document.createElement('span');
                        var humanGender = document.createElement('span');

                        humanName.innerHTML = newHuman.name + " ";
                        humanAge.innerHTML = newHuman.age + " ";
                        humanGender.innerHTML = newHuman.gender + " ";

                        people.appendChild(humanName);
                        people.appendChild(humanAge);
                        people.appendChild(humanGender);

                        document.getElementById('allHumans').appendChild(people);
                    }
                }
                document.getElementById('humanName').value = "";
                document.getElementById('humanAge').value = "";
                document.getElementById('humanMoney').value = "";
                document.getElementById('humanGender').value = "";
            }
        }

        function reviveHandler() {
            var necromancer = document.getElementById('necromancer').value;
            var zombie = document.getElementById('zombie').value;
            if (necromancer && zombie) {
                var adult = 0;
                for (var i = 0; i < humans.length; i++) {
                    if (humans[i].name == necromancer) {
                        if (humans[i].age >= 18) {
                            adult = 1;
                            humans[i].stamina = humans[i].stamina / 2;
                            humans[i].money = 0;
                        }

                    }
                }
                for (var i = 0; i < humans.length; i++) {
                    if (humans[i].name == zombie && adult == 1) {
                        humans[i].status = "alive";
                        humans[i].stamina = 100;
                        humans[i].money = 0;
                    }
                }
            }
        }

        function workHandler() {
            var worker = document.getElementById('work').value;
            var worktime = document.getElementById('workTime').value - 0;
            for (var i = 0; i < humans.length; i++) {
                if (humans[i].name == worker) {
                    if (humans[i].status == "alive") {
                        humans[i].work(worktime);
                    }
                }
            }
        }

        function eatHandler() {
            var worker = document.getElementById('eat').value;
            for (var i = 0; i < humans.length; i++) {
                if (humans[i].name == worker) {
                    if (humans[i].status == "alive") {
                        humans[i].eat();
                    }
                }
            }
        }

        function partyHandler() {
            var worker = document.getElementById('party').value;
            for (var i = 0; i < humans.length; i++) {
                if (humans[i].name == worker) {
                    if (humans[i].status == "alive") {
                        humans[i].party();
                    }
                }
            }
        }

        function addKid() {
            var kidName = document.getElementById('kidName').value;
            if (kidName) {
                var check = 0;
                for (var i = 0; i < humans.length; i++) {
                    if (humans[i].name == kidName) {
                        check = 1;
                    }
                }
                var genderRandom = Math.random() * 2;
                if (check == 0) {
                    if (genderRandom < 1) {
                        var newHuman = new Human(kidName);
                    }
                    if (genderRandom >= 1) {
                        var newHuman = new Woman(kidName);
                    }

                    humans.push(newHuman);
                    var people = document.createElement('div');

                    var humanName = document.createElement('span');
                    var humanAge = document.createElement('span');
                    var humanGender = document.createElement('span');

                    humanName.innerHTML = newHuman.name + " ";
                    humanAge.innerHTML = newHuman.age + " ";
                    humanGender.innerHTML = newHuman.gender + " ";

                    people.appendChild(humanName);
                    people.appendChild(humanAge);
                    people.appendChild(humanGender);

                    document.getElementById('allHumans').appendChild(people);

                    document.getElementById('success').remove();
                    document.getElementById('kidName').remove();
                    document.getElementById('createKid').remove();
                }
            }
        }

        function multiplyHandler() {
            var worker1 = document.getElementById('multiply1').value;
            var worker2 = document.getElementById('multiply2').value;

            document.getElementById('kid').innerHTML = "";
            document.getElementById('yeshomo').src = "";

            if (worker1 && worker2) {
                if (worker1 == worker2) {
                    for (var i = 0; i < humans.length; i++) {
                        if (humans[i].name == worker1) {
                            humans[i].happy = 100;
                        }
                    }
                    var span = document.createElement('span');
                    span.innerHTML = "... Так не получится...";
                    document.getElementById('kid').appendChild(span);
                }
                if (worker1 != worker2) {
                    var homo = 0;
                    var dead = 0;
                    var adult = 1;
                    for (var i = 0; i < humans.length; i++) {
                        if (humans[i].name == worker1) {
                            for (var j = 0; j < humans.length; j++) {
                                if (humans[j].name == worker2) {
                                    if (humans[i].age < 16 || humans[j].age < 16) {
                                        adult = 0;
                                    }

                                    if (humans[i].status == "dead" || humans[j].status == "dead") {
                                        dead = 1;
                                    }

                                    if (humans[i].gender == humans[j].gender) {
                                        homo = 1;
                                    }

                                    humans[i].happy = 100;
                                    humans[j].happy = 100;
                                }
                            }
                        }
                    }

                    if (dead == 1) {
                        var span = document.createElement('span');
                        span.innerHTML = "Поздравляю, ты некрофил...";
                        document.getElementById('kid').appendChild(span);
                    }

                    if (dead == 0 && adult == 0) {
                        var span = document.createElement('span');
                        span.innerHTML = "Вaм ещё нельзя, ждите! -_-";
                        document.getElementById('kid').appendChild(span);
                    }

                    if (dead == 0 && adult == 1) {
                        if (homo == 1) {
                            var div = document.createElement('div');
                            var write = document.createElement('span');
                            write.innerHTML = "..................";
                            div.appendChild(write);
                            document.getElementById('kid').appendChild(div);
                        }
                        if (homo == 0) {
                            var div = document.createElement('div');
                            var success = document.createElement('span');
                            success.id = "success";
                            var kidName = document.createElement('input');
                            kidName.id = "kidName";

                            var createKid = document.createElement('button');
                            createKid.id="createKid";
                            success.innerHTML = "Поздравляю! Теперь у этих человеков есть свой маленький человек! :3";
                            kidName.placeholder = "введите имя";
                            createKid.addEventListener('click', addKid);
                            createKid.innerHTML = "Назвать";

                            div.appendChild(success);
                            div.appendChild(kidName);
                            div.appendChild(createKid);

                            document.getElementById('kid').appendChild(div);
                        }
                    }
                }
            }
        }

        function checkHumanHandler() {
            var worker = document.getElementById('checkHuman').value;
            document.getElementById('checkHuman').value = "";
            for (let i = 0; i < humans.length; i++) {
                if (humans[i].name === worker) {
                    const newHuman = humans[i];
                    document.getElementById('humanInfo').innerHTML =
                        `${newHuman.name} ${newHuman.age} ${newHuman.gender} ${newHuman.money} ${newHuman.stamina} ${newHuman.status} ${newHuman.happy}`;
                }
            }
        }

        document.getElementById('createHuman').addEventListener('click', humanHandler);
        document.getElementById('revive').addEventListener('click', reviveHandler);
        document.getElementById('working').addEventListener('click', workHandler);
        document.getElementById('eating').addEventListener('click', eatHandler);
        document.getElementById('partying').addEventListener('click', partyHandler);
        document.getElementById('multiplying').addEventListener('click', multiplyHandler);
        document.getElementById('checkHumanButton').addEventListener('click', checkHumanHandler);
    }
}

