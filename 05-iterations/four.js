let myObj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
    // console.log(key)
    // console.log(`${key} Shortcut in ${myObj[key]}`)
   
}

let myArr = ["hello","world"]
for (const key in myArr) {
    // console.log(key) // result index me krta hai..
    console.log(myArr[key]) // value ke liye is tareqe se
   
}