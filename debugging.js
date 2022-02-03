function vowelCount(sentence) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (const letter of sentence) {
        // let letter = sentence[i].toLowerCase();
        if (vowels.indexOf(letter) > -1) {
            count = count + 1;
        }
    }
    return count;
}
let string = "Similarly, media queries may span multiple breakpoint widths";
console.log("Vowels count :", vowelCount(string));

// Calucolate Price 
function totalPrice(quantity) {
    if (typeof quantity != "number") {
        return "Please enter a valid quantity.";
    }
    if (quantity <= 0) {
        return "Please enter a valid quantity.";
    }
    if (quantity > 50) {
        return "Sorry! I only have 50 kg for sale.";
    }
    let price;
    if (quantity <= 2) {
        price = 30 * quantity;
    }
    else {
        price = 25 * quantity;
    }
    return price;
}
console.log("Total Price is:", totalPrice(60));

// calculate Electricity bill 
function electricBill(unit) {
    if (unit <= 0) {
        return "You didn't used any unit !! "
    }
    let bill;
    if (unit <= 100) {
        bill = unit * 5;
    }
    else if (unit > 100 && unit <= 200) {
        let firstBill = 100 * 5;
        let secondBill = (unit - 100) * 6;
        bill = firstBill + secondBill;
    }
    else if (unit > 200) {
        let firstBill = 100 * 5;
        let secondBill = 100 * 6;
        let thirdBill = (unit - 200) * 7;
        bill = firstBill + secondBill + thirdBill;
    }
    return bill;
}
let usedUnit =190;
console.log("Total Electric Bill:", electricBill(usedUnit));