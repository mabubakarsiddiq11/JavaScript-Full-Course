function myName() {
  console.log("Y");
  console.log("O");
  console.log("U");
  console.log("S");
  console.log("U");
  console.log("F");
}

// myName()

// function addTwoNum(num, num2) {
//     console.log(num + num2)

// }
// is fun me hamne kuch bhi return nhi kiya jis ki waja se undefine
// const result = addTwoNum(5, 6) // 11
// console.log("Result : ", result) // undefined

function addTwoNum(num, num2) {
  // let result = num + num2
  // return result   //OPtion 1
  // Option 2
  return num + num2;
}
// is fun me ham ne return kiya tu ans correct
const result = addTwoNum(5, 6);
// console.log("Result : ", result) // 11

// function isLoginMsg (username) {
//     return `${username} just Login`
// }
// console.log(isLoginMsg("Yousuf"))

// return se kya howa is ka matlab is se aage code nhi chale ga
function isLoginMsg(username = "Yousuf") {
  //default parameter
  if (!username) {
    console.log("Please Enter a User Name");
    return;
  }
  return `${username} just Login`;
}

// console.log(isLoginMsg())

function calCartPrice(...price) {
  //rest opearator
  return price;
}
// console.log(calCartPrice(200, 500, 900))

const user = {
  username: "Yousuf",
  price: 999,
};

function handleObj(anyUser) {
  console.log(`Username is ${anyUser.username} and price is ${anyUser.price}`);
}
// handleObj(user) //option 1

//Option 2
handleObj({
  username: "Abubakar",
  price: 888,
});

// jaise abhi aap ne uppar obj ke sath kiya hai tu waise hi arr ki sath bhi use kr sakte hu