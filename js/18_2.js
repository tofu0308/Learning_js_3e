//18_9_1
console.log('18_9_2');
{
	 function logEvent(handlerName, type, cancel, stop, stopImmediate){
	 	return function(evt){
	 		if(cancel) evt.preventDefault();
	 		if(stop) evt.stopPropagation();
	 		if(stopImmediate) evt.stopImmediatePropagation();
	 		console.log(`${type} : ${handlerName}` + (evt.defaultPrevented ? '(キャンセルされた)' : ''));
	 	}
	 }	

	 function addEventLogger(element, type, action){
	 	const capture = type === 'capture';
	 	element.addEventListener('click', logEvent(element.tagName, type, action === 'cancel', action === 'stop', action === 'stop!'), capture);

	 }

	 const body = document.querySelector('body');
	 const div = document.querySelector('div');
	 const button = document.querySelector('button');

	 addEventLogger(body, 'capture');
	 addEventLogger(body, 'bubble');
	 addEventLogger(div, 'capture', 'cancel');
	 addEventLogger(div, 'bubble');
	 addEventLogger(button, 'capture', 'stop');
	 addEventLogger(button, 'bubble');


}



































