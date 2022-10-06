// let add = function(a,b){
//     console.log(a+b);
// }

// add(3,4)


let add = (a,b)=>{
    console.log(a+b);
}

add(3,5)

let regularfunction = function(name){
    console.log(`I am ${name}`)
}
let arrowfunction = (name)=>{
    console.log(`I am ${name}`)
}

regularfunction('regular')
arrowfunction('arrow')

let person = {
    name : 'Aman',
    age : 21,
    showDetails : function(){
        console.log(this.name+' '+this.age)
    },
    showDetailsarrow : ()=>{
        console.log(this.name+' -> '+this.age)
    }
}
person.showDetails()
person.showDetailsarrow()
let test = ()=>{
    console.log(this)
}
test()