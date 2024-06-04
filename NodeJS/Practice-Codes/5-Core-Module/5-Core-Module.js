/*
Consider Modules to be same as the JavaScript Libraries. A set of functions you want to include in your application 

Node.js has a set of built-in modules which we can use without further installation
*/

const fs = require("fs");

//create a file and write (Not append)
// fs.writeFileSync("read.txt", "Hello, Good Morning. How Are You?");

// fs.writeFileSync("read.txt", "Hello, Good Afternoon. How Are You?");

// append the file
// fs.appendFileSync("read.txt", "Hello, Good Night. How Are You?");


// read the file
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

// we get <Buffer 48 65 6c 6c 6f 2c 20 47 6f 6f 64 20 41 66 74 65 72 6e 6f 6f 6e 2e 20 48 6f 77 20 41 72 65 20 59 6f 75 3f 48 65 6c 6c 6f 2c 20 47 6f 6f 64 20 4e 69 67 ... 16 more 
// bytes> from this read line 

// Node.js includes an additional datatype called buffer that is not available in browser javascript
// buffer mainly used to store binary data
// while reading from the file and receiving packets over the network

// if we don't have to use buffer then use file encoding(utf8, utf16) because java use asynchronous and file is synchronous

//convert to orihginal data
const org_data = buf_data.toString();
console.log(org_data);


//rename the file
fs.renameSync("read.txt", "read-write.txt");



