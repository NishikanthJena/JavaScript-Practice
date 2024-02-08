// Stack Memory (used in Primitive Type) & Heap Memory (used in Non-Primitive Type)

// Whenever Stack memory is used like when you delclared a variable you'll get a copy
// Whenever a memory is defined inside the Heap memory (like Object or anything) from there you get reference / it get change in Original value

let myGithubname = "Dev"

let anothername = myGithubname
anothername = "Sus"
console.log(myGithubname);
console.log(anothername);

let userOne = {
    email: "dev@google.com",
    upi: "user@ybl"
}


let userTwo = userOne;

userTwo.email = "sus@google.com";

console.log(userOne.email);
console.log(userTwo.email);
