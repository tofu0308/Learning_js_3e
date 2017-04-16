console.log('load file.');

$(document).ready(function(){
	'use strict';
	console.log('loading...');

	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	let tool = new Tool();
	let c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';

	let text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = '20';
	text.content = 'Hello, World'; 

	//event handler
	tool.omMouseDown = function(event){
		let c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillcolor = 'green';
	}
});
