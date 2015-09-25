

var Monkey = function(name, color){
	this.name = name;
	this.color = color
}

Monkey.prototype.climb = function(tree){

	console.log(this.name + ' climbs the ' + tree + ' tree ')
}

var george = new Monkey('George', 'navajo white')

// george.climb('palm')
// var FlyingMonkey = function(name, color, wingspan){
// 	this.name = name;
// 	this.color = color;
// 	this.wingspan = wingspan
// }

// FlyingMonkey.prototype.climb = function(tree){

// 	console.log(this.name + ' climbs the ' + tree + ' tree ')
// }
// FlyingMonkey.prototype.fly = function(){

// 	console.log(this.name + ' flew ' + this.wingspan*10 + ' feet.')
// }
// var evilGeorge = new FlyingMonkey('EvilGeorge', 'dodger blue', 9)


var FlyingMonkey = function(name, color, wingspan){
	//this = {}
	// We only pass in name and color, because the base class only cares about name and color. Regular monkeys don't have a wingspan.

	Monkey.call(this, name, color)
	this.wingspan = wingspan
}
FlyingMonkey.prototype = new Monkey()
FlyingMonkey.prototype.constructor = FlyingMonkey
FlyingMonkey.prototype.fly = function(){
	console.log(this.name + ' flew ' + this.wingspan*10 + ' feet.')
}

var evilGeorge = new FlyingMonkey('EvilGeorge', 'dodger blue', 9)

//evilGeorge.climb('oak')
evilGeorge.fly()