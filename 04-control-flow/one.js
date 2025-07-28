//<, >, <=, >=, ==,  ===, !=, !==

// if

const isUserLooggedIn  = true 
const temperature = 41

//Operator checking
// if (temperature <= 41) {
//     console.log("Less than 50")
    
// }else{
//     console.log("temperature is greater than 50")
// }


// const score = 200
// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power ${power}`);  
// }
// //Scope Problem
// console.log(`User Power ${power}`);


//Short Way 
const balance = 1000
// if(balance > 500) console.log("Test")


// Nested if

if(balance < 500){
    console.log("Less than 500")
} else if(balance < 750){
    console.log("Less than 750")
} else if(balance < 900){
    console.log("Less than 900")
} else {
    console.log("Less than 1200")
}

// Logical Operators: && (AND), || (OR), ! (NOT)

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}
