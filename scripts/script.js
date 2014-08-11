var monster = {
	creater: function(name, startHP, nowHP, attack, damage){
		this.name = name;
		this.startHP = startHP;
		this.nowHP = nowHP;
		this.attack = attack;
		this. damage = damage;
		return this;
	},
	sayName: function(){
		console.log("My name is " + this.name + ", my hitpoint " + this.nowHP  + " and i can " + this.attack + " to " + this.damage + "hp");
	},
};

var monster1 = Object.create(monster).creater("CatMonster", 50, 50, "scratch", 5);
console.log(monster.isPrototypeOf(monster1));
var monster2 = Object.create(monster).creater("BirdMonster", 60, 60, "peck", 3);
console.log(monster.isPrototypeOf(monster2));


console.log(monster1);
console.log(monster2);

console.log("Щоб дізнатися про монстра введіть monster1.sayName() або monster2.sayName()");
console.log('Щоб монстр атакував введіть attackMonster("CatMonster") або attackMonster("BirdMonster")');

var attackMonster = function(name){
	this.name = name;
	switch(name){
		case "CatMonster":
			monster2.nowHP = monster2.nowHP - monster1.damage;
			console.log(monster1.name + " attack " + monster2.name + " to " + monster1.damage + " and now" + monster2.name + " has " + monster2.nowHP + "hp");
		break
		case "BirdMonster":
			monster1.nowHP = monster1.nowHP - monster2.damage;
			console.log(monster2.name + " attack " + monster1.name + " to " + monster2.damage + " and now" + monster1.name + " has " + monster1.nowHP + "hp");
	}
	
};

