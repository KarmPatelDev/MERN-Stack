const client = require("./client");

async function init() {

    const res1 = await client.lpush("message", "hey");
    console.log(res1);
    const res2 = await client.lpush("message", "hey");
    console.log(res2);
    const res3 = await client.lpush("message", "hey");
    console.log(res3);
    const res4 = await client.lpush("message", "hey");
    console.log(res4);

    const res5 = await client.rpop("message");
    console.log(res5);

    const res6 = await client.blpop("message", 40);
    console.log(res6);
}

init();