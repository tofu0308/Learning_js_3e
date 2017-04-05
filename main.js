console.log('load file.');

$(document).ready(function(){
	console.log('jQuery');

	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	/* draw */
	paper.view.draw;
	let c = Shape.Circle(200, 200, 50);
	c.fillColor  =  'green';
});