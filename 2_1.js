console.log('load file.');

$(document).ready(function(){
	console.log('jQuery');

	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	/* draw */
	paper.view.draw;
	let tool = new Tool();;
	
	/*
	for(let x=25; x<400; x+=50){
		for (let y=25; y<400; y+=50) {
			c = Shape.Circle(x, y, 20);
			c.fillColor  =  'green';
		}
	}
	*/

	tool.onMouseDown = function(event){
		let c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'green';
	}
});