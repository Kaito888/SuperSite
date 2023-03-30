function Human(name, age, money) {
    this.name = name;
    this.age = age - 0 || 0;
    this.money = money || 0;
    this.stamina = 100;
    this.status = "alive";
    this.happy = 100;
    this.gender = "male";

    this.work = function (time) {
        if (this.status == "alive") {
            const time1 = time / 10;
            this.money += time * 10;
            this.stamina -= time * 2;
            this.happy -= time * 5;
            this.age = this.age - 0 + time1;
            this.checkDeath();
        }
    }
    this.eat = function () {
        if (this.status == "alive") {
            this.stamina += 6;
            this.money -= 2;
            this.happy += 1;
            this.checkDeath();
        }
    }
    this.party = function () {
        if (this.status == "alive") {
            this.happy += 10;
            this.money -= 5;
            this.checkDeath();
        }
    }
    this.checkDeath = function () {
        if (this.stamina <= 0) {
            this.status = "dead";
        }
        if (this.money < 0) {
            this.status = "dead";
        }
        if (this.stamina > 200) {
            this.status = "dead";
        }
    }
}