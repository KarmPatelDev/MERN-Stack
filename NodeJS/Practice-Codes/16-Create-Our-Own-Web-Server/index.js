/*
- To access web pages of any web application, you need a web server. The web server will handle all http request for the web application
- e.g. IIS is a web server for ASP.NET web application and Apache is a web server for PHP or Java Web Application
- Node.js provides capabilities to create you own web server which will handle HTTP requests asynchronously. You Can use IIS or Apache to run Node.js web application but it is recommended to use  Node.js web server. 


*/

const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello From The Other Side");  // for give response
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port no 8000");
});


