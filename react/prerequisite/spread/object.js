let obj = {
  name: "Aman",
  address: {
    country: "USA",
    state: {
      stateName: "Newyork",
      pincode: 12345,
    },
  },
};

let obj2 = {
  ...obj,
  address: { ...obj.address,state: { ...obj.address.state } },
  
};             //....Shallow Copy......

// let obj2 = JSON.parse(JSON.stringify(obj)); // Deep copy

obj.address.country = "India";
obj.address.state.pincode = 110083;
console.log(obj);
console.log(obj2);


