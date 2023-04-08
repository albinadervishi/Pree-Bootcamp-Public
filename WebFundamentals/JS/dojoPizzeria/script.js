function pizzaFactory() {
    var crustTypes = ['deep dish', 'thin crust', 'pan'];
    var sauceTypes = ['traditional', 'marinara', 'alfredo'];
    var cheeses = [['mozzarella'], ['cheddar'], ['feta'], ['mozzarella', 'cheddar']];
    var toppings = ['pepperoni', 'sausage', 'mushrooms', 'olives', 'onions', 'bell peppers'];

    var pizza = {};
    pizza.crustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    pizza.sauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    pizza.cheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = [];
    var numToppings = Math.floor(Math.random() * 5) + 1; // random number of toppings between 1 and 5
    for (var i = 0; i < numToppings; i++) {
        var randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
        pizza.toppings.push(randomTopping);
    }
    return pizza;
}

var p1 = pizzaFactory("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaFactory("hand tossed", "marinara", ["mozzarella", "feta"],  ["mushrooms", "olives", "onions"]);
console.log(p2);  

var randomPizza = pizzaFactory();
console.log(randomPizza);



