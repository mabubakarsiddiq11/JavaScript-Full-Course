
// reduce Method

const nums = [1, 2, 3];

const total = nums.reduce((acc, cur) => {
//   console.log(`acc : ${acc} and CurrentValue : ${cur}`);
  // acc : 3 and CurrentValue : 1
  // acc : 4 and CurrentValue : 2
  // acc : 6 and CurrentValue : 3
  // 9
  return acc + cur;
}, 3);

// console.log(total);


const course = [
    {
        courseName : "CSS",
        price : 1500
    },
    {
        courseName : "JavaScript",
        price : 5000
    },
    {
        courseName : "React",
        price : 1500
    },
]

const priceToPay = course.reduce((acc,item) => {
    return acc + item.price
},0)

// console.log(priceToPay)