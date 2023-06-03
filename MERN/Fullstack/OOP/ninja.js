class Ninja {
    constructor(name, health) { 
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
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

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().drinkSake().drinkSake().showStats();
