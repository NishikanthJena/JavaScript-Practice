// Rounding a number => Taking a number & moving it to the nearest number

Math.round(2.2);
console.log(Math.round(2.2)); // Output -> 2

console.log(Math.round(2.8)); // Output -> 3

// Let's say we want to round a number down (2.8=>2) 

let num = 2.8;
let roundedDown = Math.floor(2.8);
console.log(roundedDown);   // Output : 2

// Let's say we want to round a number up (2.2=>3) 

let num1 = 2.2;
let roundedUp = Math.ceil(2.2);
console.log(roundedUp);     // Output : 2

