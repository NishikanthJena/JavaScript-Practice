//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓

// null: Imagine an Empty Box
// //* Explanation: Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.

// //? Example: You have a toy box, but if it's null, it means there are no toys inside. It's not that the box is broken; it just doesn't have anything interesting in it right now.

// undefined: Imagine a Box That Wasn't Opened Yet
//* Explanation: Now, if we talk about undefined, it's like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or looked to see what's in it.

//? Example: You have a gift box, and until you open it, you don't know what's inside. Right now, it's undefined because you haven't checked or filled it with anything yet.

// Putting It Together
// Summary: So, null is like having an empty box on purpose, and undefined is like having a box you haven't opened yet. Both tell us that there's nothing meaningful or known inside, but they imply different reasons why.

//todo Real-life Comparison: If you have an empty lunchbox (null), it means you decided not to put any food in it. If you have a closed lunchbox (undefined), it means you haven't checked or filled it yet.

//? 2: What is the purpose of typeof operator in JavaScript❓

const myName = `nish`;
console.log(myName);
console.log(typeof myName);

let myAge = 22;
console.log(myAge);
console.log(typeof myAge);

//? 3: What is the result of `typeof null` in JavaScript❓
// Answer: typeod null => is Object