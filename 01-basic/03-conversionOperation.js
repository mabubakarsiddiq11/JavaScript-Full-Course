// Conversion Operation means
// Number() to String,
// String() to Number
// Booleean() to Number
// etc

let score = 33;

// you can do it in 2 ways.

// console.log(typeof score);
// console.log(typeof score);

let num = "22ssa";
//  let valueInNumber = Number(num)
// console.log(typeof valueInNumber)

// console.log(valueInNumber ) // NaN

let nul = "null";
let valueInNumber = Number(num);
console.log(typeof valueInNumber);

console.log(valueInNumber); // 0

// "33" => 33
// "22fd" => NaN
// true => 1; false => 0

// ............................Operations..................

let value = 5;
let negValue = -value;
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str = "Yousuf";
let str2 = "Zai";

let str3 = str + str2;

// console.log(str3);

console.log("1" + 3) //13
console.log(1 + "3") //13
console.log("1" + 3 + 2) //132
console.log( 2 + 3 + "2") //52 

console.log(+true) // 1
console.log(+"") // 0