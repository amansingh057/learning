let arr = [2,3,4,5,6,7,8]

let evenArray = arr.filter(function(n){
    return n%2==0;
})

console.log(evenArray)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let profitArr = transactions.filter(function(n){
    return n>0;
})
console.log(profitArr)