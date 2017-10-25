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
