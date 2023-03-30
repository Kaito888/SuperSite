function Woman(name, age, money) {
    this.name = name;
    this.age = age - 0 || 0;
    this.money = money || 0;
    this.stamina = 100;
    this.status = "alive";
    this.happy = 100;
    this.gender = "female";
    this.beauty = 100;

    this.work = function (time) {
        if (this.status == "alive") {
            const time1 = time / 10;
            this.money += time * 8;
            this.stamina -= time * 2;
            this.happy -= time * 8;
            this.beauty -= time;
            this.age = this.age - 0 + time1;
            this.checkDeath();
        }
    }
    this.eat = function () {
        if (this.status == "alive") {
            this.stamina += 6;
            this.money -= 4;
            this.happy += 2;
            this.checkDeath;
        }
    }
    this.party = function () {
        if (this.status == "alive") {
            this.happy += 10;
            this.money -= 10;
            this.checkDeath();
        }
    }
    this.shopping = function () {
        if (this.status == "alive") {
            this.happy += 50;
            this.money -= 50;
            this.beauty += 10;
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