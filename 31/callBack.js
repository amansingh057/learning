function printfirstName(firstName, callBack, cb2) {
    console.log(firstName)
    callBack('Singh')
    cb2(20)
}
function printlastName(lastName) {
    console.log(lastName)
}

function printAge(age) {
    console.log(age)
}

printfirstName('Aman', printlastName, printAge)
// lastName('Singh')

// hi = () => {
//     console.log(hello);
//   }

// ************ Calculator************

function calc(add, sub, mul, div) {
    add(10, 20)
    sub(10, 20)
    mul(10, 20)
    div(20, 20)
}

function addition(a, b) {
    console.log(a + b)
    // sub(50,1111)
}
function subtraction(a, b) {
    console.log(a - b)
}
function multiplication(a, b) {
    console.log(a * b)
}
function division(a, b) {
    console.log(a / b)
}

calc(addition, subtraction, multiplication, division)

