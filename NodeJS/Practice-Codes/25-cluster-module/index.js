const cluster = require("cluster");
const os = require("os");
const express = require("express");

const totalCPUs = os.cpus().length;

if(cluster.isPrimary){
    for(let i = 0; i < totalCPUs; i++){
        cluster.fork();
    }
}
else{
    const app = express();

    app.get("/", (req, res) => {
        return res.json({
            message: process.pid
        });
    });

    app.listen(9000, () => console.log("Server Started at 9000"));
}