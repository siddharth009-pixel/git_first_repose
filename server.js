const express=require('express');
const app=express();


const formidable=require('express-formidable');
app.use(formidable);

const mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
var objectId=mongodb.ObjectID;

const http=require('http').createServer(app);

const bcyrpt=require('bcrypt');


app.listen(3000,()=>{
    console.log('Server Running on port 3000');
})