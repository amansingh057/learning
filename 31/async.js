///*****sync Method ****** */
// console.log('before')
const fs = require('fs')

// let data = fs.readFileSync('f1.txt')
// console.log('This is file Data -->'+ data)

// console.log('after')


//********Async method  ***** */

console.log('before')

fs.readFile('f1.txt', cb)

function cb(error, d) {
    if (error) {
        console.log(error)
    } else {
        console.log('Data -->' + d)
    }
}

fs.readFile('f2.txt', cb2)

function cb2(error, d) {
    if (error) {
        console.log(error)
    } else {
        console.log('Data -->' + d)
    }
}

console.log('After')

