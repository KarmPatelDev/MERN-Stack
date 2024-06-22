const os = require("os");

console.log(os.arch()); // architecture
console.log(os.hostname()); // desktop name
console.log(os.platform());
console.log(os.type());  

const memory_available = os.freemem();  // for free memory in bytes(ram)
console.log(`${memory_available}`/1024/1024/1024);

const total_memory = os.totalmem();  // for total memory (ram)
console.log(`${total_memory}`/1024/1024/1024);

console.log(os.cpus().length)
