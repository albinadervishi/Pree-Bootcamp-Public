function alwaysHungry(arr) {
    let isHungry = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "food") {
        console.log("yummy");
        isHungry = false;
      }
    }
  
    if (isHungry) {
      console.log("I'm hungry");
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

