// function sub(a,b){
//     console.log('Subtraction is ',a-b)
// }
// sub(2,3)
// function mul(a,b){
//     console.log('multiplication ',a*b)
// }
// mul(2,3)
// function div(a,b){
//     console.log('Division is ',a/b)
// }
// div(2,3)

//IIFE(immediately invoked function expression)
let sub = (function(a,b){
    console.log(a-b)
})(30,20)