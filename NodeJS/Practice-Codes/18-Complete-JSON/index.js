/*
- JSON stands for JavaScript Object Notation. 
- JSON is a lightweight format for storing and transporting data.
- JSON is often used when data is sent from a server to a web page.
*/

// object
// const bioData = {
//     name : "Karm",
//     age : 19,
//     channel: "Karm Patel"
// };
// console.log(bioData.name);

// convert to json
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// console.log(jsonData.name); // it shows error


// convert to object
// const objData = JSON.parse(jsonData);
// console.log(objData);
// console.log(objData.name);




/* Using JSON File 

Convert to json
add to file
read file
covert back to obj
*/

const fs = require("fs");

const bioData = {
    name : "Karm",
    age : 19,
    channel: "Karm Patel"
};

const jsonData = JSON.stringify(bioData);

fs.writeFile("data.json", jsonData,(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully written");
    }
});

fs.readFile("data.json", "utf-8", (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        const objData = JSON.parse(data);
        console.log(objData);
    }
});



