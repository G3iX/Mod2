//var x = 'hello n-NigGrs'
//console.log(x)
var massage = " in global";
console.log(" global: massage =" + massage);
var a = function () {
	var massage = "insida a (soke dicke)"
	console.log("a: massage = " + massage);
	function b () {
	console.log("b: message = " + massage);}
	b();
}
/*
console.log("if pasha pidor we will have 3 in here : "+ ((5+4)/3))
var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}*/

/* lecture 45
var companE = new Object();
companE.name = "FREEORCSGENOCIDE"
companE.ceo = new Object();
companE.ceo.firsttname = "Volodmir "
companE.ceo.surname = "Zelenskij "
companE.ceo.favColor = "blue & yellow"

console.log(companE)
console.log("companE Ceo name is: " + companE.ceo.firsttname + companE.ceo.surname)
console.log(companE["name"]);
companE["stock of company"] = 11322222222000
console.log(companE["stock of company"])*/

function mult(x,y){
	return x*y;
	/*why are u here? why are u gei*/
}
//console.log(mult(5,3));
//mult.version = "helloNnigers"
//console.log(mult.version);
//console.log(mult.toString());

function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };
  
  return myFunFunc;
}

//var operation = makeMultiplier(10);
//console.log(operation(10));


/* lecture 49`var literalCircle = {
	radius: 10,

	getArea: funcion() {
		console.log(this) // refering to our local class (rad: 10)
		return Math.PI * Math.pow(this.radius, 2)
	}
}`*/
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

//var max = new Dog("Max", "Buddy");
//max.bark();



//var names = [
//{name: "suus"}, {name: "oid"}]

var names = ['as','ass','assumption'];
/*for (var i = 0; i < names.length; i++) {
	 console.log("hi, " + names[i])
}
var counter = 0;
var myArray = ["assumption", 2, {handle: "ass"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);

function makeMultiplier (multiplier) {
	return (function(x){
		return multiplier * x;
	});
}
var dobleAll = makeMultiplier(2);
console.log(dobleAll(30));


function makeMultiplier2 (multiplier) {
	function b() {
		console.log("Multipler is: " + multiplier);
	}
	b();
	return (function(x){ // java script closure
		return multiplier * x;
	});
}
var dobleAll = makeMultiplier(2);
console.log(dobleAll(30));
*/
//JS Namespace example 
(function(window) {
 var obj = {};
 obj.dreamOn = function () {
 console.log("I want to see the global scope! Let me out!");
 };
window.doer = obj;
 })(window);
doer.dreamOn();















