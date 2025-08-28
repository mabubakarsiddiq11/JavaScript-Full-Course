const promiseOne = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Async Task is Completed");
    res();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promises is consumed");
});

// 2nd Promises Structure

new Promise((res, rej) => {
  setTimeout(() => {
    console.log("2nd Async Task Done");
    res();
  }, 1000);
}).then(() => {
  console.log("Promises Resolved");
});

// Data send to res
const promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({ user: "yousuf", email: "yousuf@zai.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "abubakar", password: 123 });
    } else {
      reject("ERROR: Something went wrong ");
    }
  }, 1000);
});

promisefour
.then((user) => {
    console.log(user);
    return user.userName;
})
.then((userName) => {
    console.log(userName);
}).catch((err) => {
    console.log(err)
})



const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Javascript", password: 123 });
    } else {
      reject("ERROR: JS went wrong ");
    }
  }, 1000);
});

async function consumPromiseFive () {
   try {
     const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }

}
consumPromiseFive()

// Using Fetch data
// async function apiCall() {
//     try {
//         const api = await fetch("https://dummyjson.com/todos")
//         const data = await api.json()
//         console.log(data.todos)
//     } catch (error) {
//         console.log(error)
//     }
// }
// apiCall()


// 2nd Approach with Fetch Method
// fetch("https://dummyjson.com/todos").then((res) => {
//     return res.json()
   
// }).then((todos) => {
//     console.log(todos)
// }).catch((err) => {
//     console.log(err)
// })