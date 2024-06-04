const http = require("http");

const server = http.createServer((req, res) => {
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
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>Hello Guys, Good Night</h1>");
    }     
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening To the port 8000");
});