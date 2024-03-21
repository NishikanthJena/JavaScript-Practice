// Date
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   // Object

/* let myCreatedDate = new Date(2024, 7, 8)    // In Js months starts from 0 as Jan , 1 as Feb ...
console.log(myCreatedDate.toDateString()); */  // Output : Thu Aug 08 2024

// Another Method 
/* let myCreatedDate = new Date(2024, 7, 8, 5, 3)
console.log(myCreatedDate.toLocaleString()); */   // Output : 8/8/2024, 5:03:00 AM

// When you write single digit as months it starts from 0 
// When you write double digit as months it starts from 01

let myCreatedDate = new Date(`2024-08-08`)
console.log(myCreatedDate.toLocaleString());  // Output : 8/8/2024, 12:00:00 AM



