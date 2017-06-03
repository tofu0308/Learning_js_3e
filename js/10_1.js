//10_1
console.log("--------10_1-------");

{
	const u1 = {name: '和洋'};
	const u2 = {name: '花子'};
	const u3 = {name: '涼子'};
	const u4 = {name: '哲人'};

	const userRoles = new Map([
		[u1, 'ユーザー'],
		[u2, 'ユーザー'],
		[u3, '管理者'],
	]);

	console.log(userRoles.has(u1));
	console.log(userRoles.get(u1));

	console.log(userRoles.has(u3));
	console.log(userRoles.get(u3));

	console.log(userRoles.has(u4));
	console.log(userRoles.get(u4));

	console.log("---");

	userRoles.set(u1, '管理者');
	console.log(userRoles.get(u1));
	console.log(userRoles.size);

}