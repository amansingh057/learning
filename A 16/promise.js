const fs = require('fs')


console.log('before')

// fs.readFile('f2.txt' , function(err , data){
//       if(err){
//              console.log(err)
//       }

//       else{
//              console.log('File Data ->'+ data)
//       }
// })

let promiseVariable =  fs.promises.readFile("f1.txt")
// console.log(promiseVariable)

// Pending Stage
promiseVariable.then(function(data){
    console.log('File 1 data -->'+data)
})

//Rejected and Setlled
promiseVariable.catch(function(err){
    console.log(err)
})

console.log('After')