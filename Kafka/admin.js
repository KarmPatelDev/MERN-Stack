const { kafka } = require("./kafkaClient");

async function init(){
    const admin = kafka.admin();
    console.log('Admin Connection');
    admin.connect();
    console.log('Admin Connected');


    console.log('Topic Creation');
    admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            }
        ]
    });
    console.log('Topic Created');

    console.log('Admin Disconnection');
    await admin.disconnect();
}

init();