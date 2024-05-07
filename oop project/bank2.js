class BankAccount {
    constructor(account_number, account_holder_name, balance) {
        this.account_number = account_number;
        this.account_holder_name = account_holder_name;
        this.balance = balance;
    }
    
    deposit(amt) {
        this.balance = this.balance + amt;
        alert("your amt is in your acc");
    }

    withdraw(amt) {
        if (this.balance < amt) {
            alert("Insufficient Balance");
        } else {
            this.balance = this.balance - amt;
    }
    }
    transfer(beneficiary_acc, amt) {
        for (let a = 0; a < accounts.length; a++) {
            if (accounts[a].account_number === beneficiary_acc) {
                accounts[a].balance = accounts[a].balance + amt;
               this.balance = this.balance - amt
                alert("Amount transferred successfully");
            }
        }
    }

    checkBalance() {
        alert(`Your account balance is ${this.balance}`);
    }
}

acc1 = new BankAccount (1001 , 'rafay' , 1000000000000)
acc2 = new BankAccount (2001 , 'anas' , 3000)