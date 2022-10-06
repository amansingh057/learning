// let arr = [2,4,5,6,9]

// let cubArr = arr.map(function(n){
//     return n*n*n
// })
// function cb(n){
//     return n*n*n
//    }

// console.log(arr)
// console.log(cubArr)

// Map function to seprate First name and last name
// let namesArr = ['Shivam Verma','Shubham Samrat','Ashish Kumar']

// let FirstArr = namesArr.map(cb);
// function cb(string){
//     return string.split(' ')
// }
// console.log(FirstArr)


// Rupee to dollar
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

// let convertedArr = transactions.map(cb)
// function cb(n){
//     return (n/inrtToUsd).toFixed(0) //method will round off till the decimal place
// }
// console.log(convertedArr)
let b = -3
let max = transactions.map(cb)

function cb(n){
    if(n>b){
        b=n
    }
    // return b;
}
// console.log(b)
 
let profitArr = transactions.filter(function(n){
    return n>=b;
})
console.log(profitArr)
