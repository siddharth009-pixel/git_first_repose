function callname(name){
    console.log("hey "+name);
}

//var logger=require('./test02');

//logger.log1('lorem ipsum');
var path1=require('path');

var pathobj=path1.parse(__filename);

//console.log(pathobj);

var os=require('os');
var totalmemory=os.totalmem();
//console.log(`total memory ${totalmemory}`);
//console.log(totalmemory);
/*
const fs=require('fs');
var files=fs.readdir('./',function(err,files){
    if (err) console.log('error',err);
    else console.log('files',files);
});
*/

//const EventEmiter=require('events');

// const Logger = require('./test02');
// //import Logger from './test02'
// const logger = new Logger();

// logger.on('event1',(arg) => {
//     console.log('event is being listen and',arg);
// })

// logger.log('hey indian team');

//  const HTTP=require('http');
// const server=HTTP.createServer((req,res)=>{
//   if(req.url==='/')
//     res.write('hello world');
//     res.end();
//   });
//   server.on('connection',(socket)=>{
//       console.log('new connection');
//    });
//  server.listen(3000);
// console.log('listening on prt number 3000');

const express=require('express');
const Joi=require('joi');
var bodyParser = require('body-parser')
 
const app=express();
app.use(bodyParser.json())
 
app.get('/',(req,res)=>{
    res.send('Hello World!!!!');   
})

var cources=[
    {id:'1', name:'cource1'},
    {id:'2', name:'cource2'},
    {id:'3', name:'cource3'}
]

// app.get('/api/cources',(req,res)=>{
//     res.send(cources);    
// })

 app.get('/api/cources/:id',(req,res)=>{
     const cource1=cources.find(c => c.id === req.params.id);
     if(!cource1) res.status(404).send("this id is not available");
     res.send(cource1);    
 })

// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.params);   
// })

// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.query);   
// })
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`listen on ort number ${port}`);
})

app.post('/api/cources',(req, res)=>{
  

    if(!req.body.name || req.body.name<3 )
    {
        res.status(400).send("your name is not valid");
    }
    const newcource={
        id: cources.length+1,
        name: req.body.name
    }
    cources.push(newcource);
    res.send(cources);    
});

app.put('/api/cources/:id',(req,res)=>{
    const cource=cources.find(c => c.id===req.params.id);
    if(!cource) res.status(400).send("no registered cource"); 

    cource.name=req.body.name;
    res.send(cource);
})

app.post('/api/cources/:id',(req,res)=>{
    const cource=cources.find(c => c.id===req.params.id);
    if(!cource) res.status(400).send("no registered cource"); 

    cource.name=req.body.name;
    res.send(cource);
})