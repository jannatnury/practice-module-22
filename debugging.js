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
let usedUnit = 300;
console.log("Total Electric Bill:", electricBill(usedUnit));
// If any of your friend get A+

function checkGpa(marks) {
    for (let i = 0; i < marks.length; i++) {
        let element = marks[i];
        if (element >= 80) {
            return true;
        }
    }
    return false;
}
// checkGpa([78, 82, 69]);
console.log(checkGpa([78, 82, 69]));

// Find the Largest element of an Array
// let array = [3,5,7,1,9];
function largestElement(array) {
    let largest = array[0];
    for (const element of array) {
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
let array = [2, 4, 8, 9, 1, 12];
console.log("Largest element is:", largestElement(array));
// Find the 2nd Largest element of an Array
// let array = [3,5,7,1,9];
function secondLargeststElement(array2) {
    let largest = array2[0];
    let secondLargest = array2[0];
    for (let i = 0; i < array2.length; i++) {
        let element = array2[i];
        if (element > largest) {
            secondLargest = largest;
            largest = element;
        }
        else if (element > secondLargest) {
            secondLargest = element;
        }
    }
    return secondLargest;
}
let array2 = [45, 41, 56, 35, 64, 60];
console.log("Second Largest is:", secondLargeststElement(array2));
