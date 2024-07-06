const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter=new MyEmitter();


myEmitter.on('Waterfall',()=>{
    console.log("Please turn off the motor !");
    setTimeout(() => {
        console.log("Please turn off the motor its the final reminder");
    }, 3000);
});

console.log("The script is running ");
myEmitter.emit('Waterfall')
console.log("The script is still running ");