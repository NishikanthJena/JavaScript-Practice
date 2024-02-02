let score = null

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// Notes :
// "33" => 33 (if you're converting a number it is easily converted)
// "33abc" => NaN (This cannot be converted)
// true => 1;   false => 0;

// let isLoggedIn = 1
// let isLoggedIn = 0
let isLoggedIn = "abc"

let booleanIsLoggedIn = Boolean (isLoggedIn)
// console.log(booleanIsLoggedIn)

// Note : 
// Values of : 1, 0, "", "Dev"
// 1 => true 
// 0 => false
// (EmptyStrings) "" => false
// (Value inside string) "Dev" => true


let someNumber = 88

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // Checking the typeof converion 