// Singleton
// Object.create



// object literals

const jsUser = {
    name: "Yousuf",
    age : 22,
    loaction : "Orangi",
    email : "example@google.com",
    isLoggedIn : false,
    lastloginDays : ["monday", "tuesday", "wednesday"],
  };
  
  // console.log(jsUser.name)
  // console.log(jsUser["name"])
  
  
  jsUser.email = "yousufzaiofficial"
  // Object.freeze(jsUser) //Do not change this object value using this methood
  jsUser.email = "mabubakarsiddiq"
  console.log(jsUser)
  
  jsUser.greeting = function () {
      console.log("Hello JS User")
  }
  jsUser.greetingTwo = function () {
      console.log(`Hello JS User, ${this.name}`)
  }
  console.log(jsUser.greeting())
  console.log(jsUser.greetingTwo()) 
  