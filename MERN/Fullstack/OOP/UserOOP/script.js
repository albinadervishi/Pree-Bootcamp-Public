class User {
    constructor(username) {     
        this.name = username      
        this.accountBalance = 0
    }
    makeDeposit(amount) {                
        this.accountBalance += amount;  
        return this;
    }
    makeWithdrawal(amount) {               
        this.accountBalance -= amount;   
        return this;
    }
    displayBalance(){
        console.log("User:", this.name ,"Balance:", this.accountBalance);
        return this;
    }
    transferMoney(otherUser, amount) {
        this.makeWithdrawal(amount);
        otherUser.makeDeposit(amount);
        console.log("User:", this.name ,"Balance:", this.accountBalance,
        "User:", otherUser.name ,"Balance:", otherUser.accountBalance);
        return this;
      }
}

const albina=new User("Albina");
const test1=new User("Test1");
const test2=new User("Test2");
albina.makeDeposit(50).makeDeposit(100).makeDeposit(200).makeWithdrawal(100).displayBalance()
test1.makeDeposit(100).makeDeposit(200).makeWithdrawal(50).makeWithdrawal(30).displayBalance()
test2.makeDeposit(500).makeWithdrawal(200).makeWithdrawal(50).makeWithdrawal(100).displayBalance()
albina.transferMoney(test2, 100)