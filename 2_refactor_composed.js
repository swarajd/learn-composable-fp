const Box = require('./Box');

/**
 * OLD CODE
 */
// const moneyToFloat = str =>
//     parseFloat(str.replace(/\$/g, ''))

// const percentToFloat = str => {
//     const replaced = str.replace(/\%/g, '');
//     const number = parseFloat(replaced);
//     return number * 0.01;
// }

// const applyDiscount = (price, discount) => {
//     const cost = moneyToFloat(price);
//     const savings = percentToFloat(discount);
//     return cost - cost * savings;
// }

/**
 * NEW CODE
 */
const moneyToFloat = str =>
    Box(str)
    .map(s => str.replace(/\$/g, ''))
    .fold(r => parseFloat(r))

const percentToFloat = str => 
    Box(str)
    .map(s => str.replace(/\%/g, ''))
    .map(r => parseFloat(r))
    .fold(f => f * 0.01)

// kinda wack because two folds
// but we will learn about better ways later
const applyDiscount = (price, discount) =>
    Box(moneyToFloat(price))
    .fold(cost => 
        Box(percentToFloat(discount))
        .fold(savings =>
            cost - cost * savings))

const result = applyDiscount("$5.00", "20%");

console.log(result);