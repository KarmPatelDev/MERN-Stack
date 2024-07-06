const client = require("./client");

async function init(){
    try{
        await client.set("user:4", "Hey I am Karm");

        await client.expire("user:4", 10);

        const result = await client.get('user:4');
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

init();