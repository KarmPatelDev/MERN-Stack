/*

- Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four type of streams -

- Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computing and watching it later.

- Readable: Stream which are used for read operation
- Writable: Stream which is used for write operation
- Duplex: Stream which can be used for both read and write operation.
- Transform: A type of duplex stream where the output is computed based on input

- Each type of stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are -

- data: The event is fired when there is data is available to read
- end: The event is fired when there is no more data to read
- error: The event is fired when there is any error receiving or writing data
- finish: This event is fired when all the data has been flushed to underlying system

Example:
// Reading from a stream
// create a readable stream
// handle stream events -> data, end and error

*/

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {


    // simple reading without stream

    // fs.readFile("input.txt", "utf-8", (err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })


    // using streaming 

    const rstream = fs.createReadStream("input.txt");
    rstream.on("data", (chunkdata) => {
          res.write(chunkdata);
    });

    rstream.on("end", () => {
        res.end();
    });

    rstream.on("error", (err) => {
        console.log(err);
        res.end('File Not FOund');
    });

});

server.listen(8000, "127.0.0.1");
