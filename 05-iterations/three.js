// for of 

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
    
}


let greetings = "Hello World"
for (const greet of greetings) {
    // console.log(greet)
    
}

// Maps

let map = new Map()

map.set("PAK", 'Pakistan')
map.set("USA", 'United State of America')
map.set("FR", 'France')

// console.log(map)

for (const key of map) {
    // console.log(country)
    
}
for (const [keys, values] of map) {
    console.log(keys, " => ", values)
    
}

// Object me For Of Loop Working nhi krta hai