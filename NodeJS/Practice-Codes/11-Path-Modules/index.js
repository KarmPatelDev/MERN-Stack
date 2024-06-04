const path = require("path");

console.log(path.dirname("C:/Users/Patel Karm/Downloads/Karm/Codding/NodeJS/11-Path-Modules/index.js")); // it show directory name => C:/Users/Patel Karm/Downloads/Karm/Codding/NodeJS/11-Path-Modules

console.log(path.extname("C:/Users/Patel Karm/Downloads/Karm/Codding/NodeJS/11-Path-Modules/index.js")); // extention name

console.log(path.basename("C:/Users/Patel Karm/Downloads/Karm/Codding/NodeJS/11-Path-Modules/index.js")); // filename

console.log(path.parse("C:/Users/Patel Karm/Downloads/Karm/Codding/NodeJS/11-Path-Modules/index.js")); // it show information about this file

const myPath = path.parse("C:/Users/Patel Karm/Downloads/Karm/Codding/NodeJS/11-Path-Modules/index.js");

console.log(myPath.ext);
console.log(myPath.root);
console.log(myPath.base);


