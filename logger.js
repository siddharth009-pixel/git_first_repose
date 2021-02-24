const { EventEmitter } = require("events");

class LoggerMehul extends EventEmitter{
log(message)
{
    console.log(message);
    this.emit('messageemit',{id:1,url:'http://'});
}
}

module.exports=LoggerMehul;