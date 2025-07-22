
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = 1
tinderUser.name = "Yousuf"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "yousuf@@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Abubakar",
            lastname : "Siddiq"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1, obj2} //problem is nested obj

const obj3 = Object.assign(obj1, obj2) // 1 Option
const obj4 = {...obj1, ...obj2} // 2 Option
// console.log(obj4)

const users = [
    {
        id : 1,
        email : "yousuf@gmail.com"
    },
    {
        id : 2,
        email : "zai@gmail.com"
    },
    {
        id : 3,
        email : "official@gmail.com"
    },
]

// console.log(users[0].id)

// object ku arr me convert krdeta hai

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))



const course = {
    courseName : "JS in Urdu",
    price : 999,
    courseInstructor : "Abubakar"
}
//Destructure 
const {courseName } = course
//Destructure with name change
const {courseName : csName } = course

// console.log(csName)

