
let a = 100
let d = 400


if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a)
}

// console.log(a) //ReferenceError: a is not defined
// console.log(b)// ReferenceError: a is not defined
// console.log(c) // 30 


function parent() {
    const username = "Yousuf Zai"
    function child() {
        const website = "mabubakar.com"
        console.log(username)
    }
    // console.log(website)cld

    child()
}

// parent()


if (true) {
    const username = "Yousuf Zai"
    if (username === "Yousuf Zai") {
        const website = " Youtube"
        console.log(username + website) 
    }
    // console.log(website) //ReferenceError: website is not defined
}

// console.log(username) //ReferenceError: username is not defined



// ---------------------Interesting++++++++++++++++++++++
// ---------------------hoisting Seen
console.log(addOne(5)) // Print 6

function addOne(num) {
    return num + 1
}

//-------------------------------

console.log(addTwo(5)) //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}
