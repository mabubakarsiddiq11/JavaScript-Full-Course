const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = myNums.map((num) => {
//     return num + 10
// })


//this is called chainnig
const newNums = myNums
.map((num) => num * 10 )
.map((nNums) => nNums + 1 )
.filter((fNum) => fNum >= 50)
// console.log(newNums)