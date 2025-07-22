// array

const arrNum = [0, 1, 2, 3, 4, 5];

const arrStr = ["Hello", "World"];

// console.log(arrNum[0])

const arr = new Array("Hello", "Yousuf");
// console.log(arr);

// Array Methods

// add Value in Last
arr.push("Zai");

// delete value in Array in the last
arr.pop();

// add in first value
arr.unshift("Zai");

// delete in first value
arr.shift("Zai");

// console.log(arr);

// arr ke undar dhondta hai return True False krta hai
// console.log(arrNum.includes(6)) // false

// Index pta krta hai
// console.log(arrNum.indexOf(6)) // -1

// arr ku apas me bind bhi krta hai our type bhi string kr deta hai
// const newArr = arrNum.join()
// console.log(newArr)

// console.log("A", arrNum)
// Slice jaha se lena hai wo btao our jha tak lena hai us se pehle tak
const num1 = arrNum.slice(1, 3);
// console.log(num1) //1,2

// Splice jaha se lena hai wo btao our jha tak lena hai
const num2 = arrNum.splice(1, 3);
// console.log(num2) // 1, 2, 3
