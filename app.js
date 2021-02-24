const { EventEmitter } = require("events");
const LoggerMe=require('./test02');
const logger=new LoggerMe();
logger.on('messageemit',(arg)=>{
    console.log('Listener called',arg);
});
logger.log('Message');