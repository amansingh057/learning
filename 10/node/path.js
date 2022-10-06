const path = require('path')

let FilePath = 'E:\\pepcoding\\10\node\\1.txt'
 let extensionName = path.extname(FilePath)
 console.log(extensionName)

 let fileName = path.basename(FilePath)
 console.log(fileName)

 console.log(__dirname)
 console.log(__filename)