// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euros) => {
    let result = euros * oneEuroIs.USD;
    return result;
}

const fromDollarToYen = (dolares) => {
    let result = (dolares / oneEuroIs.USD) * oneEuroIs.JPY;
    return result;
}

const fromYanToPound = (yen) => {
    let result = (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return result;
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromEuroToDollar , fromDollarToYen , fromYanToPound};
    



