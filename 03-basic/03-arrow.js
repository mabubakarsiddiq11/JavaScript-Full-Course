const user = {
  username: "yousuf",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , Welcome to website`);
    console.log(this); // this current context yani current value ki bt krta hai
  },
};

// user.welcomeMessage()
// user.username = "zai"
// user.welcomeMessage()

// console.log(this)
// {} jb ham node envoirment me check krte hai tu result empty Object{} agr same browser me check kre to window object deta hai

// function zai (){
//     const username = "Abubakar"
//     console.log(this.username) // undefined q ke this object me use hota hai
//     console.log(this) // all method show
// }

// zai()

// First Arrow Function
const one = (num1, num2) => {
  return num1 + num2;
};
console.log(one(2, 3));


// Secound Arrow Function
const two = (num1, num2) => num1 + num2;

console.log(two(2, 3));

// Secound Arrow Function
const three = (num1, num2) => (num1 + num2)
console.log(three(2, 3));


//jb ap ku ak object value deni hu tu is tareqe se dejiye
const four = () => ({username : "Abubakar"})
console.log(four());

// jb ap () round bracket me lhikhe ge tu aap ku return lhkne ki need nhi
// jb ap {} karli bracket me lekhe tu tb return ki zarorat hito hai

