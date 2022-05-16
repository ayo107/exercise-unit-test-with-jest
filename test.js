// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("Conversion de USD a YEN", function(){
    const { fromDollarToYen } = require('./app.js')

    const japanYEN = fromDollarToYen(3.0);

    const expected = (3.0/1.2)*127.9; 
    
    expect(expected).toBe(japanYEN);
})

test("Conversion de YEN a GBP", function(){
    const { fromYanToPound	 } = require('./app.js')

    const japanYEN = fromYanToPound	(100.0);

    const expected = (100.0/127.9)*0.8;
    
    expect(expected).toBe(japanYEN);
})