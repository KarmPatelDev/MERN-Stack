/*

// Event Module

- Node.js has a built-in module, called "Events",
- where you can create-, fire-, and listen for- your own events

*/


// - Example: Registering for the event to be fired only one time using once

const EventEmitter = require("events");
const event = new EventEmitter();


event.on('sayMyName', () => {
      console.log("My Name is Karm");
});

event.emit("sayMyName");


/*
The concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called. So an emitter object basically has two main features:
- emitting name events
- registering and unregistering listener functions
*/

// - Example: Create an event emitter instance and registering a couple of callbacks

event.on('sayMyName', () => {
      console.log("My Name is Karm");
});

event.on('sayMyName', () => {
      console.log("My Name is Shaileshkumar");
});

event.on('sayMyName', () => {
      console.log("My Name is Patel");
});

event.on('sayMyName', () => {
      console.log("My Name is CE");
});

event.emit("sayMyName");



// - Example: Registering for the event with callback parameter.

event.on("checkPage", (sc, msg) => {
    console.log(sc + " " + msg);
});

event.emit("checkPage", 200, "Okay");