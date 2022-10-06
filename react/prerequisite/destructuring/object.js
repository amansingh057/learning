// Destructuring in objects

let obj3 = {
    Name : 'Ram',
    State : 'New York',
    pincode : '12345'
}

let {Name,State,pincode}=obj3
// console.log(Name,State,pincode)

// Nested objects

let obj ={
    name : "Aman",
    address : {
        country : "India",
        state : {
            StateName : "UttarPradesh",
            Pincode : "123456"
        }
    }
}

let {name} = obj

let {address : {country:cd},address : {state : {Pincode}}}=obj
// let {address : {country},address : {state : {Pincode}}}=obj
let {address : {state : {StateName}}}=obj
console.log(name)
console.log(cd)
console.log(Pincode)
console.log(StateName)
