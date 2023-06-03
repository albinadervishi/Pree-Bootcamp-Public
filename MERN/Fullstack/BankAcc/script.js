class BankAccount {
    constructor(intRate = 0.08, balance = 0) { 
        this.accountBalance = balance;
        this.intRate = intRate;
    }
    deposit(amount) {
    this.accountBalance += amount;  
    return this;
    }
    withdraw(amount) {
	this.accountBalance -= amount;  
    return this;
    }
    displayAccountInfo() {
	console.log("Balance:", this.accountBalance);
        return this;
    }
    yieldInterest() {
	this.accountBalance += this.accountBalance * this.intRate;
    return this 
    }
}

class User {
    constructor(name, email) {     
        this.name = name;
        this.email = email;
        this.account = new BankAccount();
    }
    makeDeposit(amount) {                
        this.account.deposit(amount);  
        return this;
    }
    makeWithdrawal(amount) {               
        this.account.withdraw(amount);   
        return this;
    }
    displayBalance(){
        console.log("User:", this.name ,"Balance:", this.account.accountBalance, "int Rate:", this.account.intRate);
        return this;
    }
}

const crow = new User("Crow T. Robot", "hamdingers@gizmonic.com");
const tom = new User("Tom Servo", "tommonster@gizmonic.com");

tom.makeDeposit(200).makeDeposit(100).makeDeposit(200).makeWithdrawal(100).displayBalance();
