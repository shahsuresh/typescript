//#Encapsulation
//refers to the concept of hiding the internal implementation details of a
//class and exposing only what is necessary through a public interface.
//This helps protect the integrity of the data and prevents external code
// from making unintended changes.

// In TypeScript, encapsulation is achieved using access modifiers:
// public, private and protected

class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  withdraw(withdrawlAmount: number): number {
    if (this.balance > withdrawlAmount) {
      this.balance -= withdrawlAmount;
    } else {
      console.log("You have no sufficient Balance");
    }
    return this.balance;
  }
  deposit(depositAmount: number): number {
    if (depositAmount > 0) {
      this.balance += depositAmount;
    }
    return this.balance;
  }
  showBalance() {
    console.log(this.balance);
  }
}

const account1 = new BankAccount(500);
account1.showBalance(); //500

account1.deposit(1000);
account1.showBalance(); //1500

account1.withdraw(2000); // You have no sufficient balance

account1.withdraw(1200);
account1.showBalance(); //300
