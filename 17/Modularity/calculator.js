function sub(a,b){
    console.log('Subtraction is ',a-b)
}
function add(a,b){
    console.log('Addition is ',a+b)
}
// sub(2,3)
function mul(a,b){
    console.log('multiplication ',a*b)
}
// mul(2,3)
function div(a,b){
    console.log('Division is ',a/b)
}
// div(2,3)

module.exports={
    Addition : add,
    Subtraction : sub,
    Multiplication : mul,
    Divisionn : div,
}