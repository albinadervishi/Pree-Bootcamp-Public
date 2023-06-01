class BankAccount {
    constructor(intRate, accountBalance) { 
        this.accountBalance = 0
        this.intRate = 0.02
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

const albina=new BankAccount("Albina");
const test1=new BankAccount("Test1");
albina.deposit(100).deposit(50).deposit(200).withdraw(50).yieldInterest().displayAccountInfo()
test1.deposit(200).deposit(200).withdraw(50).withdraw(30).withdraw(20).withdraw(50).yieldInterest().displayAccountInfo()
