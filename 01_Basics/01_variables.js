const accountId = 1234566
let accountEmail = "javascript@gmail.com"
var accountPassword = "12345"  

accountCity = "Mumbai"
let accountState;

// accountId = 123  // This is not allowed

accountEmail = "js@gmail.com"
accountPassword = "223344"
accountCity = "HYD"  
console.log(accountId);


/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])