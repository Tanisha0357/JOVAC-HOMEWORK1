let accountBalance = 2000000;
console.log(`Wallet Balance: Rs.${accountBalance}`);

const productCatalog = [
    { product: "Smartphone", amount: 60000 },
    { product: "Laptop", amount: 75000 },
    { product: "Tablet", amount: 30000 },
    { product: "Smartwatch", amount: 15000 },
    { product: "Bluetooth Earbuds", amount: 8000 },
    { product: "Gaming Console", amount: 45000 },
    { product: "Monitor", amount: 20000 },
    { product: "Keyboard", amount: 5000 },
    { product: "External Hard Drive", amount: 7000 },
    { product: "Router", amount: 6000 }
];

console.log("Product List:", productCatalog);

function placeOrder(products) {
    return new Promise((resolve, reject) => {
        console.log("Initiating Order...");

        const chosenItems = products.filter(p =>
            p.product === "Laptop" || p.product === "Smartwatch" || p.product === "Gaming Console"
        );

        console.log("Chosen Products:", chosenItems);

        if (chosenItems.length > 0) {
            resolve(chosenItems);
        } else {
            reject("No products selected for order.");
        }
    });
}

function processPayment(chosenItems) {
    return new Promise((resolve, reject) => {
        const totalBill = chosenItems.reduce((acc, p) => acc + p.amount, 0);
        console.log("Total Payable:", totalBill);

        if (totalBill <= accountBalance) {
            console.log(`Payment of Rs.${totalBill} successful`);
            accountBalance -= totalBill;
            resolve();
        } else {
            reject("Payment Declined: Insufficient funds");
        }
    });
}

function displaySummary() {
    return new Promise((resolve) => {
        console.log("Order Summary:");
        console.log("--Transaction Completed--");

        const purchased = productCatalog.filter(p =>
            p.product === "Laptop" || p.product === "Smartwatch" || p.product === "Gaming Console"
        );

        console.log("Products Purchased:", purchased);
        resolve();
    });
}

function updateAccount() {
    return new Promise((resolve) => {
        console.log(`Updated Wallet Balance: Rs.${accountBalance}`);
        resolve();
    });
}


placeOrder(productCatalog)
    .then(processPayment)
    .then(displaySummary)
    .then(updateAccount)
    .catch((err) => {
        console.log("Error:", err);
    });
