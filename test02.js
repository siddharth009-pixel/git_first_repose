const { EventEmitter } = require("events");
class LoggerMe extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('event1',{id:1,url:'not proper'});
    }
}
module.exports=LoggerMe;
