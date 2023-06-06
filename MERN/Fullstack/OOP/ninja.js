class Ninja {
    constructor(name, health, strength = 3, speed = 3) { 
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
    }
    sayName() {
        console.log("Name:", this.name);
        return this;
    }
    showStats() {
        console.log("Name", this.name, "Health:", this.health, "Strength:", this.strength, "Speed:", this.speed);
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom= wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("helllo");
        return this;
    }
    showStats() {
        super.showStats();
        console.log("Wisdom:" + this.wisdom)
        return this;
    }
}

const sensei = new Sensei("Splinter");
sensei.sayName().speakWisdom().showStats();

