/*

- Create a File index.js
- Create folder using fs command
- create file in this and write a text
- append the new data in file
- read data without use of buffer
- rename the file to myBio.txt
- delete the file and folder

*/

const fs = require("fs");

// fs.mkdir("assets", (err) => {
//     if(err){console.log(err);}
//     else{console.log("The Folder is Created");}
// });

// fs.writeFile("assets/read.txt", "Hello Good Morning", (err) => {
//     if(err){console.log(err);}
//     else{console.log("The Folder written successfully");}
// });

// fs.appendFile("assets/read.txt", " Hello Good Night", (err) => {
//     if(err){console.log(err);}
//     else{console.log("The Folder append successfully");}
// });

// fs.readFile("assets/read.txt", "utf8", (err, data) => {
//     if(err){console.log(err);}
//     else{console.log(data);}
// });

// fs.rename("assets/read.txt", "assets/read-write.txt", (err) => {
//     if(err){console.log(err);}
//     else{console.log("File is renamed");}
// });

// fs.unlink("assets/read-write.txt", (err) => {
//     if(err){console.log(err);}
//     else{console.log("File is removed");}
// });

// fs.rmdir("assets", (err) => {
//     if(err){console.log(err);}
//     else{console.log("Folder is removed");}
// });

