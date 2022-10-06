let arr = [1, 2, 3, 4];

// arr2=arr  //They both have same refrence
let arr2 = [...arr];

arr.push(20);
console.log(arr);
console.log(arr2);
