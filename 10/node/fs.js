const fileSystem = require('fs');
const path = require('path')

// reading data
// let content = fileSystem.readFileSync('1.txt');

// console.log(''+content)


// Writing data
// fileSystem.writeFileSync('2.txt','This is file 2 data')
// console.log('Data written')

// if no file exist then it will create new file
// fileSystem.writeFileSync('3.txt','This is file 3 data')
// console.log('Data written in 3')


// Append data
// fileSystem.appendFileSync('2.txt',' This is appended data')
// console.log('Data updated')

// Delete file
// fileSystem.unlinkSync('3.txt')
// console.log('Deleted')



// *****           Directories     *****

// create 
// fileSystem.mkdirSync('miDirectory')
// console.log('Directory created')

// Delete directory
// fileSystem.rmdirSync('miDirectory')
// console.log('Deleted')

// Exist Sync method lets you know if file exists or not
// return true or false
// let doesExist = fileSystem.existsSync('3.txt')
// console.log(doesExist)


// Lstat Sync
// Tells status of file if they exist or not


// let statistics = fileSystem.lstatSync('1.txt')
// console.log(statistics)

// Methods in lstat sync

// console.log('isDirectory ?',statistics.isDirectory())
// console.log('isFile ?',statistics.isFile())


// readdirSync
// See content inside file

// let folderPath = 'E:\\pepcoding\\10\\node\\miDirectory'
// let folderContent = fileSystem.readdirSync(folderPath)
// console.log('File content->'+folderContent)

// Copying File from src to dest.
let srcFilePath ='E:\\pepcoding\\10\\node\\miDirectory\\f1.txt'
let destFolderPath = 'E:\\pepcoding\\10\\node\\myDirectory2'
 let toBeCopied = path.basename(srcFilePath)//f1.txt

 let destPath = path.join(destFolderPath,toBeCopied)
 fileSystem.copyFileSync(srcFilePath,destPath)
 console.log("Copied!!!")