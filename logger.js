//var url="abc"; // variable exports to another page
const EventEmitter=require('events');  // Event is a class
const emitter=new EventEmitter();

//creating module and exporting to index,js or another page
function log(message){
    console.log(message);
    emitter.emit('messageLogged',{id:1, url:'url'});
}
module.exports.log=log;
// module.exports.endPoint=url;

// console.log(module);
//check the error on coomand jshint .\index.js