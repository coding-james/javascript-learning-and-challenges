const myInterval = setInterval(() => {
    console.log("I got called every 5 seconds!")
}, 5000);

setTimeout(() => {
    console.log("I got called after 9 seconds!")
}, 9000);

setTimeout(() => {
    clearInterval(myInterval);
    console.log("The Intervals have now stopped");
}, 21000);

setImmediate(() => {
    console.log("I got called right away!")
});