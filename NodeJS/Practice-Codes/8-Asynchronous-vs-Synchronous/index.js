
const fs = require("fs");

// const data = fs.readFileSync("read.txt", "utf8");
// console.log(data);
// console.log("This is Synchronous");

fs.readFile("read.txt", "utf8", (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log("This is Asynchronous");