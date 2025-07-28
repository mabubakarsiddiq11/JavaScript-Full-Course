// for

for (let i = 0; i < 10; i++) {
    const element = i
    if (element == 5) {
        // console.log("5 is the best number")
        
    }
    // console.log(element)
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Table Number : ${i}`)
    
    for (let j = 1; j <= 10; j++) {
        
        // console.log(`Inner Loop Value : ${j} and inner loop ${i}`)
        // console.log(i + " * " + j + " = " + i*j )
    }
}


let myArr = ["Flasf", "Batman", "SuperMan"]
// console.log(myArr.length) //3

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
    
}



// Breake
// me jaha condition match hoi waha loop stop hu jai ga


for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        break;
        
    }
    // console.log(`Value OF i is ${i}`);

    
}


// Continue me jaha condition match hoi tu loop stop nhi hota balke ak bar aage chal jata hai loop

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        continue;
        
    }
    // console.log(`Value OF i is ${i}`);

    
}