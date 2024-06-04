/*
What is ExpressJS?
- Express.js is a node.js framework. It is most popular framework as of now(the most starred on NPM).
- Express.js is a web application framework that provides you with a simple API to build websites, web apps and backends.

Why do we actually need Express.js? How it is useful for us with Node.js?
- Try to write a small REST API server in plain Node.js (that is, using only core modules) and then in Express.js. The latter will take you 5-10x less time and lines of code.
*/

const express = require('express');  
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send("Hello From The Express");
});

app.listen(PORT, () => {
    console.log(`Listening the port at ${PORT}`);
});

/* 
API => get, put, delete, post 

- The Callback function has 2 parameters, request(req) and response(res)
- The request object(req) represents the HTTPs request and has properties for the request query string, parameters, body, HTTP headers etc.

Similarly, The response object represents the HTTP response that the Express App sends when it receives an http request.

*/

