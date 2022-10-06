// "use strict"
console.log(this)

function test(){
    console.log(this)
}
test()

let obj = {
    name : "aman",
    age : 21,
    showThis : function(){
        console.log(this)
    }
}
obj.showThis()

let obj2 = {
    name : "aman",
    age : 21,
    showThis : function(){
        function test(){
            console.log(this)
        }
        test()
    }
}
obj2.showThis()
