// DATE
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

/* let myCreatedDate = new Date(`2024-08-08`)  // YYYY-MM-DD
console.log(myCreatedDate.toLocaleString()); */  // Output : 8/8/2024, 12:00:00 AM

let myCreatedDate = new Date(`08-15-2024`)      // MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());     // 8/15/2024, 12:00:00 AM

//TIME

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());    // This method is used for milliseconds 
// console.log(Math.floor(Date.now()/1000));   // If you want to convert this from milliseconds to seconds divide by 1000

/* let newDate = new Date()
console.log(newDate);       // 2024-03-21T11:24:04.105Z
console.log(newDate.getMonth());    // 2
console.log(newDate.getDay());    // 4
console.log(newDate.getMonth() + 1); */    //Output : 3  // if you want to increase the month count + 1 

// `${newDate.getMonth()} and the time`

// Most Important Date method 
let newDate = new Date()

newDate.toLocaleString(`default`, {
    weekday: "long",
    // timeZone: `myTimeStamp`
})





