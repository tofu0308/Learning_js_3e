//18_2
console.log("--------18_2-------");
{

	console.log(document instanceof Node);
	console.log(document.parentNode);
	console.log(document.childNodes);
	console.log(document.nodeType);
	console.log(document.nodeName);

	const children = document.childNodes;
	console.log("子の数 " + children.length);
	console.log(children[0]);
	console.log(children[0].nodeType);

	console.log(children[1]);
	console.log(children[1].nodeType);

	console.log(children[2]);

	console.log(Node.ELEMENT_NODE);
	console.log(children[1].nodeType === Node.ELEMENT_NODE);
	console.log(Node.TEXT_NODE);
}

console.log("--------");

{
	function printDOM(node, prefix) {
		console.log(prefix + node.nodeName);
		for(let i=0; i<node.childNodes.length; i++){
			printDOM(node.childNodes[i], prefix + ' ');
		}
	}
	printDOM(document, '');	
}

//18_3
console.log("--------18_3-------");

{
	const id = document.getElementById('content');
	console.log(id);

	const callouts = document.getElementsByClassName('callout');
	console.log(callouts);

	const paragraphs = document.getElementsByTagName('p');
	console.log(paragraphs);
}

//18_4
console.log("--------18_4-------");

{
	console.log(document.querySelectorAll('.callout'));
	console.log(document.querySelectorAll('#content p'));
	console.log(document.querySelectorAll('#content > p'));
}

//18_5
console.log("--------18_5-------");

{
	const para1 = document.getElementsByTagName('p')[0];
	console.log(para1.textContent);
	console.log(para1.innerHTML);

	console.log("変更します");

	para1.innerHTML = "HTMLを修正しました";
	console.log(para1.innerHTML);

	console.log("変更します");

	para1.innerHTML = "innerHTML を使った後の<b>修正後</b>HTML"
	console.log(para1.innerHTML);
}

//18_6
console.log("--------18_6-------");

{
	const p1 = document.createElement('p');
	const p2 = document.createElement('p');

	p1.textContent = "この段落は動的に生成された。(18_6 p1)"
	p2.textContent = "この段落は動的に生成されたその2。(18_6 p2)"

	const parent = document.getElementById('content');
	const firstchild = parent.childNodes[0];

	parent.insertBefore(p1, firstchild);
	parent.appendChild(p2);
}

//18_7
console.log("--------18_7-------");

{
	function higlightParts(containing) {
		if(typeof containing === 'string') {
			containing = new RegExp(`${containing}`);
		}

		const paras = document.getElementsByTagName('p');

		for(let p of paras) {
			if(!containing.test(p.textContent)) continue;
			p.classList.add('highligt18_7');
		}
	}
	higlightParts('ユニーク')

	function removeParaHighlights(){
		const paras = document.getElementsByTagName('p');
		//const paras = document.querySelectorAll('p.highligt18_7');
		for(let p of paras) {
			p.classList.remove('highligt18_7');
		}
	}	


//18_8
console.log("--------18_8-------");
	
	//const highlightActions = document.querySelectorAll('[data-action=highlight]');
	//console.log(highlightActions[0].dataset);

//18_9
console.log("--------18_9-------");
	const highlightActions = document.querySelectorAll('[data-action="highlight"]');
	for(let a of highlightActions){
		a.addEventListener('click', evt =>{
			evt.preventDefault();
			higlightParts(a.dataset.containing);
		});
	}

	const removeHiglightActions = document.querySelectorAll('[data-action="removeHiglight"]');

	for(let a of removeHiglightActions) {
		a.addEventListener('click', evt =>{
			evt.preventDefault();
			removeParaHighlights();	
		});
	}

}







































