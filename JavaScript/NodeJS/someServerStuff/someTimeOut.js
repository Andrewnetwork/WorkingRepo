
var asked = 0

function sayHello()
{
	console.log("Hey!")
}

function areYouStillThere()
{
	console.log("Are you still here? A:"+(++asked));
}

setTimeout(sayHello,1000)
setTimeout(sayHello,6000)


// clearInterval and clearTomeout

setInterval(areYouStillThere,2000);

// setImmediate( callback, time) 
// You should use immediate timers to yield long-running execution segments 
// to other callbacks to prevent starving the I/O events.

