// The newsEvent object continuously emits three different events: newsEvent, breakingNews and error

// Attach event listeners for each event and log out their data.

import { EventEmitter } from "node:events";

function createNewsFeed() {
    const emitter = new EventEmitter();

    emitter.on("newsEvent", (data1) => {
        console.log(data1);
    });
    emitter.on("breakingNews", (data2) => {
        console.log(data2);
    });
    emitter.on("error", (error) => {
        console.error(error.message);
    });

    setInterval(() => {
        emitter.emit("newsEvent", "News: A thing happened in a place.");
    }, 1000);

    setInterval(() => {
        emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
    }, 4000);

    setTimeout(() => {
        emitter.emit("error", new Error("News feed connection error"));
    }, 5000);

    return emitter;
}

createNewsFeed();
