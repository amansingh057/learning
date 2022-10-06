"use strict"
console.log(this)
// document.write(this)
function test(){
    console.log(this)
    // document.write(this)
}
test()

let obj = {
    name : "aman",
    age : 21,
    showThis : function(){
        console.log(this)
        // document.write(this)
    }
}
obj.showThis()

let obj2 = {
    name : "aman",
    age : 21,
    showThis : function(){
        function test(){
            console.log(this)
            // document.write(this)
        }
        test()
    }
}
obj2.showThis()
