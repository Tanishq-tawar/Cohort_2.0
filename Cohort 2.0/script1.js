function withdraw(amount) {
    if (amount > bal) {
        console.log("Insufficient funds");
    } else {
        bal -= amount;
        console.log("Withdrawal successful. Remaining balance: " + bal);
    }}
let bal = 1000;
// let amt = prompt("Enter the amount to withdraw:");
for (let i = 0; i < 3; i++) {
let amt = prompt("Enter the amount to withdraw:");
withdraw(amt);
}
