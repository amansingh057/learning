const cp = require('child_process')

// cp.execSync('calc')
// cp.execSync('code')
let output=cp.execSync('node cp.js')
console.log( ''+output)