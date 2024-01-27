const cp = require('child_process')

// cp.execSync('calc')
// cp.execSync('start chrome')
// cp.execSync('start chrome https://youtube.com')
// cp.execSync('start chrome https://github.com/Satya7390')
 

console.log('Output: ' + cp.execSync('node demo.js'))