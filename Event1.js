var events=require("events");

var eventEmitter=new events.EventEmitter();

var fun1=(mesg)=>{
  console.log("Message from fun1"+mesg);
}

var fun2=(mesg)=>{
    console.log("Message from fun2"+mesg);
}

eventEmitter.on('myEvent',fun1);
eventEmitter.on('myEvent',fun1);
eventEmitter.on('myEvent',fun2);

eventEmitter.removeListener('myEvent',fun1);

eventEmitter.emit('myEvent',"EventOccured");

eventEmitter.removeAllListeners('myEvent');

eventEmitter.emit('myEvent',"Event Occured");