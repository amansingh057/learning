#!/usr/bin/env nodejs
const fs = require('fs')
const path = require('path')


////*******************            TREE VIEW          *********************/
function treefn(dirPath) {
    if (dirPath == undefined) {
        treeHelper(process.cwd(),"")
        console.log('Please Enter a Valid Path')
        return;
    }

    else {
        let doesExist = fs.existsSync(dirPath)
        if (doesExist == true) {
            treeHelper(dirPath, ' ')
        }
    }
}

function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile()



    if (isFile == true) {
        let fileName = path.basename(targetPath)
        console.log(indent + "├── " + fileName)
    }
    else {
        let dirName = path.basename(targetPath)
        console.log(indent + "└── " + dirName)

        let children = fs.readdirSync(targetPath)
        for (let i = 0; i < children.length; i++) {
            let childPath = path.join(targetPath, children[i])
            treeHelper(childPath, indent + "\t")
        }
    }
}

module.exports = {
    treefnkey: treefn
}