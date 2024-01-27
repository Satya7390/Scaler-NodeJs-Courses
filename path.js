const path = require('path') //it should be  as it is

let ext = path.extname('D:\Media\Online Courses\Scaler-NodeJs-Courses\f1.txt')

console.log(ext) // for extension only
let baseName  = path.basename('D:\\Media\\Online Courses\\Scaler-NodeJs-Courses\\f1.txt')//for full name (f1.txt) it should be in the // in evry between the path

console.log(baseName)
console.log(__filename)
console.log(__dirname)
