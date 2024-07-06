const express = require("express");
const client = require("./client");
const axios = require("axios").default;

const app = express();

app.get("/", async (req, res) => {

    const cacheValue = await client.get("todos");
    if(cacheValue)return res.json(JSON.parse(cacheValue));


    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await client.set("todos", JSON.stringify(data));
    await client.expire("todos", 100);
    return res.json(data);
})

app.listen(8000, () => console.log('server start'));