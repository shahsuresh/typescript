//? create a bank Acoount Class. Write a bank account class with following properties.
// Account number: string
// balance: number(private)
//The class should have methods
//deposit(amount:number): void(to add to balance)
//withdraw (amount:number): void(to subtract from balance)
//getbalance(): number(to get current balance)

class Bank_Account {
  account_number: string;
  private balance: number;
  constructor(account_number: string, balance: number) {
    this.account_number = account_number;
    this.balance = balance;
  }
  deposit(deposit_amount: number): void {
    this.balance = this.balance + deposit_amount;
    // console.log(this.balance);
  }
  withdraw(withdrawn_amount: number): void {
    if (withdrawn_amount > this.balance) {
      throw new Error("You have no sufficient balance in your account");
    }
    this.balance = this.balance - withdrawn_amount;
  }
  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new Bank_Account("0212299Q", 15000);
console.log(myAccount.getBalance()); //15000

myAccount.deposit(5000);
console.log(myAccount.getBalance()); //20,000

myAccount.withdraw(10000);
console.log(myAccount.getBalance()); //20,000

// myAccount.withdraw(30000); // Error : You have no sufficient balance in your account
console.log(myAccount.getBalance());

//? Create an Employ class With Inheritance
//Define an employ class with properties name and salary
//create a subclass manager that adds a department property
//Both classes should have a getDetails methods that returns
// a string with the employ details

class Employ {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  getDetails(): string {
    return `Employee name is ${this.name}. His Salary is ${this.salary}`;
  }
}

class Manager extends Employ {
  constructor(public department: string, name: string, salary: number) {
    super(name, salary);
  }
  getDetails(): string {
    return `Manager name is ${this.name}. His Salary is ${this.salary} and department is ${this.department}`;
  }
}

console.log("Q2. ------------------------------------------------");
const emp1 = new Employ("Rakesh", 32000);
console.log(emp1.getDetails());

const manager = new Manager("Civil", "aibul", 55000);
console.log(manager.getDetails());
