let walletBalance = 2000000;
console.log(`Current Wallet Balance: Rs.${walletBalance}`);

const productList = [
    { itemName: "Smart TV", cost: 40000 },
    { itemName: "Soundbar", cost: 15000 },
    { itemName: "Gaming Console", cost: 30000 },
    { itemName: "Streaming Device", cost: 5000 },
    { itemName: "Bluetooth Speaker", cost: 8000 },
    { itemName: "Projector", cost: 25000 },
    { itemName: "VR Headset", cost: 28000 },
    { itemName: "Smart Lights Kit", cost: 12000 },
    { itemName: "Wireless Headphones", cost: 10000 },
    { itemName: "Home Security Cam", cost: 7000 }
];

console.log("Product Catalog:", productList);

function initiatePurchase(products, nextStep) {
    console.log("Purchase Started:");
    const selectedProducts = products.filter(p =>
        p.itemName === "Smart TV" ||
        p.itemName === "Wireless Headphones" ||
        p.itemName === "Gaming Console"
    );
    console.log("Selected Products:", selectedProducts);
    nextStep(selectedProducts);
}

function processPayment(selectedProducts, nextStep) {
    const totalCost = selectedProducts.reduce((acc, p) => acc + p.cost, 0);
    console.log("Total Bill:", totalCost);

    if (totalCost <= walletBalance) {
        console.log(`Payment of Rs.${totalCost} completed successfully`);
        walletBalance -= totalCost;
        nextStep();
    } else {
        console.log("Transaction Failed: Not enough balance");
    }
}

function showPurchaseSummary(nextStep) {
    console.log("Purchase Summary:");
    console.log("--Transaction Complete--");
    const selectedProducts = productList.filter(p =>
        p.itemName === "Smart TV" ||
        p.itemName === "Wireless Headphones" ||
        p.itemName === "Gaming Console"
    );
    console.log("Items Bought:", selectedProducts);
    nextStep();
}

function refreshWallet() {
    console.log(`Wallet Updated. Remaining balance: Rs.${walletBalance}`);
}


initiatePurchase(productList, function(selectedProducts) {
    processPayment(selectedProducts, function() {
        showPurchaseSummary(function() {
            refreshWallet();
        });
    });
});
