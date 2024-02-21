//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
const myName = `Nish`;
console.log(myName);

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
let myfavNum = 8;
console.log(myfavNum);

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
let isRaining = false;
let areYouAwesome = true;
console.log(`Is Raining : `+isRaining );
console.log(`Are you Awesome : `+areYouAwesome);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
var name;
console.log(name);

//? Null: Represents the absence of a value.
//        It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
var badMemories = null;
console.log(badMemories);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
const mySymbol = Symbol(`description`)
console.log(mySymbol); 


//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓

// null: Imagine an Empty Box
// //* Explanation: Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.

// //? Example: You have a toy box, but if it's null, it means there are no toys inside. It's not that the box is broken; it just doesn't have anything interesting in it right now.
