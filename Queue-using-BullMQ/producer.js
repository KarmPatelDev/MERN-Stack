const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
    connection: {
        host: "127.0.0.1",
        port: "6379",
    }
});

async function init(){
    const res = await notificationQueue.add("Email To Karm", {
        email: "admin@gmail.com", 
        subject: "Welcome Message", 
        body: "Hello Karm, Welcome TO This Amazing Journey.",
    });
    console.log("Job added to Queue", res.id);
}

init();