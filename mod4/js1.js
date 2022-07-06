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
console.log(mult(5,3));
mult.version = "helloNnigers"
console.log(mult.version);
console.log(mult.toString());

function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };
  
  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log(operation(10));