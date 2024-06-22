
const fs = require("fs");

// Synchronous(blocking) => client -> event queue -> event loop -> assign a thread from thread pool -> process -> response (if thread is not available then it wait)

// Asynchronous(non blocking) => client -> event queue -> event loop -> process -> response 

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