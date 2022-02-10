const logger =require('./logger'); // need require to eport module 
const path =require('path');
const os=require('os');
const fs=require('fs');
const EventEmitter=require('events');  // Event is a class
const emitter=new EventEmitter(); // creating instance of class emitter is obj 

//register a event
emitter.on('messageLogged',function(arg){
    console.log('lisser called',arg);

});
emitter.emit('messageLogged',{id:1, url:'url'});//raise a event something is happen 

logger.log('hello world'); 
//  console.log(url);

//check the module scope or properties on other page
// console.log(module);

//path module gives u path 
var osobj=os.totalmem();
console.log(osobj);
var pathobj=path.parse(__dirname);//gives u dirctor file nam __filename
console.log(pathobj);
// temple string  ES6
console.log(`total mempry ${osobj}`);

const files=fs.readdirSync('./');

fs.readdir('./',function(err,files){
    if(err) console.log('Error',err);

});



console.log(` readdirct ${files}`);

