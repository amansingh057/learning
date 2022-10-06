const fs = require("fs");

// let f1p = fs.promises.readFile("f1.txt");

// f1p.then(cb);

// function cb(data) {
//   console.log("" + data);
//   let f2p = fs.promises.readFile("f2.txt");
//   f2p.then(cb2);
// }

// function cb2(data) {
//   console.log("" + data);
//   let f3p = fs.promises.readFile("f3.txt");
//   f3p.then(cb3);
// }

// function cb3(data) {
//   console.log("" + data);
// }


// IMPROVEMENT -->

let f1p = fs.promises.readFile("f1.txt");

f1p.then(cb).then(cb2).then(cb3).catch(function(err){
    console.log(err)
});

function cb(data) {
  console.log("" + data);
  let f2p = fs.promises.readFile("f2.txt");
  return f2p
}

function cb2(data) {
  console.log("" + data);
  let f3p = fs.promises.readFile("f3.txt");
  return f3p
}

function cb3(data) {
  console.log("" + data);
}


