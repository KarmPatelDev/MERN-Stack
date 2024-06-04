/*

- We pass them a function as a argument - a callback
- that gets called when that task completes
- The callback has a argument that tells you whether the operation completed successfully.
- Now we need to say what to do when fs.writeFile
- has completed (even if it's nothing), and start checking for errors

*/

const fs = require("fs");

// fs.writeFile("read.txt", "Hello Good Morning" , (err) => {
//      if(err){
//         console.log(err);
//      }
//      else{
//         console.log("Completed");
//      }
// });


// fs.appendFile("read.txt", "Hello Good Morning" , (err) => {
//     if(err){
//        console.log(err);
//     }
//     else{
//        console.log("Append Completed");
//     }
// });

// in reading we use two parameters in callback first is give error ans second give data or response
fs.readFile("read.txt", "utf8", (err, data) => {
     if(err){
        console.log(err);
     }
     else{
        console.log(data);
     }
});
