#!/usr/bin/env nodejs
const fs = require('fs')
const path = require('path')


let types = {
    media: ["mp4", "mkv", "mp3", "jpeg"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
        "pptx",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};




// Organize Function will organize all your target folder's files in a different folders acc to their extensions

function organizefn(dirPath) { // We need a Directory path as parameter.
    let destPath

    // if no dir path entered
    if (dirPath == undefined) {
        destPath=process.cwd()
        console.log('Enter a valid Path')
        return;
    }

    // Find  if dirpath entered exist or not
    let doesExist = fs.existsSync(dirPath)

    if (doesExist == true) {
        // Create path of name organized_files Joining dirPath and new orgnized path folder name
        destPath = path.join(dirPath, 'organized_path')

        // Check whether if folderof same name exist and if doest not exist make a folder
        if (fs.existsSync(destPath) == false) {
            fs.mkdirSync(destPath) // make a folder
        }
        else {
            console.log('Folder Already Exist')
        }
    }
    else {
        console.log('Please enter a valid path')
    }
    organizeHelper(dirPath, destPath)
}

function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src)
    // console.log(childNames)

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i])
        isFile = fs.lstatSync(childAddress).isFile()


        if (isFile == true) {
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i] + ' -----------> ' + fileCategory)

            sendFiles(childAddress, dest, fileCategory)
        }
    }
}

function getCategory(FileName) {
    let ext = path.extname(FileName).slice(1) //Taking extension name from files..
    // console.log(ext)

    for (key in types) {
        cTypeArr = types[key] //Taking all category type array.
        // console.log(cTypeArr)

        for (let i = 0; i < cTypeArr.length; i++) {
            if (ext == cTypeArr[i]) {
                return key
            }
        }
    }
    return "others"
}

function sendFiles(srcFilePath, dest, fileCategory) {
    // we will create path for each category type encountered to create folders of their names
    let catPath = path.join(dest, fileCategory)

    //D:\FJP4\test folder\organized_files\media
    //D:\FJP4 \test folder\organized_files\documents


    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath)
    }


    let fileName = path.basename(srcFilePath)

    // we took out the basename of all the files

    let destFilePath = path.join(catPath, fileName)


    fs.copyFileSync(srcFilePath, destFilePath)

    fs.unlinkSync(srcFilePath)


    console.log('File Organized')




}

module.exports = {
    organizefnkey: organizefn
}