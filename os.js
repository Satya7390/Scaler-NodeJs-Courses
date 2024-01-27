const os = require('os')

console.log(os.arch())//architecture (64 or 32)

console.log(os.platform())
console.log(os.networkInterfaces())
console.log(os.cpus())//for system details 
console.log(os.totalmem())//total memory space
console.log(os.freemem())//free memory space