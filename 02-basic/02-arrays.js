const marvel_heros = ["Thor", "Ironman", "spider"];

const dc_heros = ["Superman", "flash", "batman"];

// arr ke andar aaray add hu gya hai
// marvel_heros.push(dc_heros)

// console.log(marvel_heros) // [ 'Thor', 'Ironman', 'spider', [ 'Superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]) //flash

// ye method  hai 2 arr ku merge krne ke liye
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// spread oprater best merge array
const allNewHeros = [...marvel_heros,...dc_heros]
// console.log(allNewHeros)

const mixArr = [0, 1, 2, [3, 4, 5, [6, 7]]];
// console.log(mixArr)

// nested arr ku convert kr deta hai 1 arr me
const allinOne = mixArr.flat(Infinity);
// console.log(allinOne)

// interst and interview

// console.log(Array.isArray("Yousuf")); //false

// console.log(Array.from("Yousuf")); // [ 'Y', 'o', 'u', 's', 'u', 'f' ]


let score1 = 100
let score2 = 200
let score3 = 300
// ye sab ku aak arr bna deta hai 
// console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]