/*
API is the acronym for application programming interface. Which is a software intermediary that allows two applications to talk to each other. Each time you use an app like facebook, send an instance message, or check the weather on your phone, You are using an API.
*/

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

    // we use synchronous for doing the data is loaded only one time 
    // if we use asynchronous then data load in loop

    const data = fs.readFileSync(`${__dirname}/User-APIs/users.json`, "utf-8");
    // console.log(data);
    const objData = JSON.parse(data);

    if(req.url == "/"){
        res.end("Hello Guys, Good Morning");
    }
    else if(req.url == "/about"){
        res.end("Hello Guys, Good Afternoon");
    }
    else if(req.url == "/contact"){
        res.writeHead({"Content-type" : "text/html"});
        res.write("<h2>Hello Guys, Good Evening</h2>");
        res.end();
    }
    else if(req.url == "/userapi"){
        res.writeHead(200, { "Content-type" : "application/json" });
        res.end(objData[0].name);
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>Hello Guys, Good Night</h1>");
    }     
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening To the port 8000");
});