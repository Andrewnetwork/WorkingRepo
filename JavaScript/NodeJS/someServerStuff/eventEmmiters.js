var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit("simpleEvent");

function exCallBack()
{
	console.log("Color me triggered.");
}

function MyObject()
{
	events.EventEmitter.call(this);
}

MyObject.prototype.__proto__= events.EventEmitter.prototype;

var myObject = new MyObject();
myObject.on("simpleEvent",exCallBack);

function wrap()
{
	myObject.emit("simpleEvent");
	console.log("HERE")
}
setInterval(wrap,2000);