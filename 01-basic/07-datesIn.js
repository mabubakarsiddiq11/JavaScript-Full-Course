// Dates

let myDate = new Date();

// console.log(typeof myDate)
// Object

// console.log(myDate)
// 2025-07-01T19:55:31.437Z

// console.log(myDate.toString())
// Wed Jul 02 2025 00:57:17 GMT+0500 (Pakistan Standard Time)

// console.log(myDate.toDateString())
// Wed Jul 02 2025


// console.log(myDate.toLocaleString())
// 7/2/2025, 12:59:56 AM


let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toLocaleString())
// // 1/23/2023, 12:00:00 AM


let myTimeStamp = Date.now() 
// console.log(myTimeStamp) // Mili Seconds
// console.log(myCreatedDate.getTime())  // Mili Seconds

// Convert Mili Seconds to Seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())

// To get the date in a specific format
console.log(newDate.toLocaleString(
    "default",
    {
        weekday: "long",
    }
))



