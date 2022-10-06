let car = {
    Name : 'Mercedes',
    Max_Speed : '200 km/hr',
    Color : 'Black',
    Price : 7347430,
}


let CaptiaAmerica = {
    FirstName : 'Steve',
    LastName : 'Rogers',
    age : 102,
    Friends : ['Bucky','Tony','Banner','Natsha'],
    isAvenger : true,
    Address : {
        State : 'Manhatan',
        City : 'New York',
    },
    sayHi : function(){
        console.log('Avengers Assemble');
    },
}

// console.log(CaptiaAmerica)

//dot notation
console.log(CaptiaAmerica.FirstName)
console.log(CaptiaAmerica.LastName)

//bracket notation
console.log(CaptiaAmerica['FirstName'])


console.log(CaptiaAmerica.Address.City)
console.log(CaptiaAmerica.Friends)
console.log('My best friend is',CaptiaAmerica.Friends[0])
CaptiaAmerica.sayHi()

//For in loop in objects
for(let k in CaptiaAmerica){
    console.log('Key:',k,'Value:',CaptiaAmerica[k])
}

CaptiaAmerica.isAvenger = false
console.log(CaptiaAmerica)

//Updating
CaptiaAmerica.movies = ['first avenger','civil war','winter soilder']

//deleting
delete CaptiaAmerica.age
// console.log(CaptiaAmerica)

CaptiaAmerica.Friends.push('Thor')
console.log(CaptiaAmerica)
