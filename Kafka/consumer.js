const { kafka } = require("./kafkaClient");
const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({ groupId: group});
    console.log('Consumer Connection');
    await consumer.connect();
    console.log('Consumer Connected');

    await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

    await consumer.run({
        eachMessage: async ({topic, partition, message, heartbeat, pause}) => {
            console.log(`${group}:  ${topic}: ${partition}: `, message.value.toString());
        },
    });

}

init();