/***************************
Andrew Riberio
March 1, 2015
# Requires: processing.min.js
# Processing Version: v1.4.8
****************************/

function helloWorld(processing)
{
	processing.draw = function() 
	{
		   // determine center and max clock arm length
     var centerX = processing.width / 2, centerY = processing.height / 2;
     var maxArmLength = Math.min(centerX, centerY);
 
     function drawArm(position, lengthScale, weight) {
       processing.strokeWeight(weight);
       processing.line(centerX, centerY,
         centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
         centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
     }
 
     // erase background
     processing.background(224);
 
     var now = new Date();
 
     // Moving hours arm by small increments
     var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
     drawArm(hoursPosition, 0.5, 5);
 
     // Moving minutes arm by small increments
     var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
     drawArm(minutesPosition, 0.80, 3);
 
     // Moving hour arm by second increments
     var secondsPosition = now.getSeconds() / 60;
     drawArm(secondsPosition, 0.90, 1);
	}
}






//##### APP NAME #######
var name = "helloWorld"
//######################

var canvas = document.createElement("canvas");
canvas.setAttribute("width",600);
canvas.setAttribute("height",600);

var processingInstance = new Processing(canvas,helloWorld)

document.body.appendChild(canvas)