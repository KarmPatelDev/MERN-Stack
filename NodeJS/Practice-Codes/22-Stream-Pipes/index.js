/*
stream.pipe() the method used to take a readable stream and connect it to a writable stream
*/

const fs = require("fs");
const http = require("http");
const zlib = require("zlib");

const server = http.createServer();

server.on("request", (req, res) => {
    fs.createReadStream("./input.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")));
});

server.listen(8000, "127.0.0.1");