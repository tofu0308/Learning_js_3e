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

	console.log("---");

	for(let u of userRoles.keys()){
		console.log(u.name);
	}

	console.log("---");

	for(let r of userRoles.values()){
		console.log(r);
	}

	console.log("---");

	for(let ur of userRoles.entries()){
		console.log(`${ur[0].name}:${ur[1]}`);
	}
	
	console.log("---");

	for(let [u, r] of userRoles.entries()){
		console.log(`${u.name}:${r}`);
	}

	console.log("---");

	for(let [u, r] of userRoles){
		console.log(`${u.name}:${r}`);
	}

	console.log("---");

	console.log(userRoles.values());
	console.log([...userRoles.values()]);

	userRoles.delete(u2);
	console.log(userRoles.size);
	console.log([...userRoles.values()]);

	userRoles.clear();
	console.log(userRoles.size);
	console.log([...userRoles.values()]);
}

//10_2
console.log("--------10_2-------");

{
	const secretHolder = (function(){
		const secrets = new WeakMap();
		return class {
			setSecret(secret) {
				secrets.set(this, secret);
			}
			getSecret(){
				return secrets.get(this);
			}
		}
	})();

	const a = new secretHolder();
	const b = new secretHolder();

	a.setSecret('秘密A');
	b.setSecret('秘密B');

	console.log(a.getSecret());
	console.log(b.getSecret());
}

