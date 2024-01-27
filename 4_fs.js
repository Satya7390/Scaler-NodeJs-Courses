const fs = require('fs')

// reading s file

// let fileContent = fs.readFileSync('f1.txt')
// console.log('data of file 1>',fileContent)// if buffer fformate
// console.log('data of file 1 : '+fileContent)// in string formate by concatnate method

// // writing in a file

// fs.writeFileSync('f2.txt', 'This is changes text')
// console.log('text has been written')

// //Append a file

// fs.appendFileSync('f3.txt','this is changes data')
// console.log('text aapended')

// deleting a file

// fs.unlinkSync('f2.txt')
// console.log('file deleted')


// Directories

// fs.mkdirSync('My directory')

// let folderPath = 'D:\\Media\\Online Courses\\Scaler-NodeJs-Courses\\My directory'

// let folderContent = fs.readdirSync(folderPath)
// console.log('Folder Path is : ' +folderContent )
// console.log('Folder Path is : ' , folderContent )

//  Check Directory exit or not

// let exist = fs.existsSync('my directory')
// console.log(exist)//true


// let exists = fs.existsSync('MyDirectory')//false
// console.log(exists)

// remove directory
// fs.mkdirSync('My 2nd directory')

fs.rmdirSync('my 2nd directory')
console.log('Your 2nd directiry has been deleted')