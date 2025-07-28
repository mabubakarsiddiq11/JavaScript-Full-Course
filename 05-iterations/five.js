
const coding = ["js", 'ruby', "python", "java" ] 

// coding.forEach((item) => {
//     console.log(item)
// })


// just 3 parameter in loop

// coding.forEach((item,index,arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"

    },
    {
        languageName : "java",
        languageFileName : "java"

    },
    {
        languageName : "python",
        languageFileName : "py"

    },
]

myCoding.forEach((val) => {
    console.log(val.languageName)

})