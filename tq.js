//william decker
////test exampoles 
//
//this is the #5
function isEven(x) {
	if (x == 0) {
		return true;
	}	
	else if (x == 1) {
		return false;
											}
	else if (x < 0) {
		return isEven(-x);
	}
	else
		return isEven(x-2);
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(-2));

//this is #4
//
function NEST(x,y) {
	return x + y;
	x = 5;
}

console.log(NEST(1,2));


//this is #1
//
function TEST1(a,b) {
	a = 1; 
	return a + b;
	
}

console.log(TEST1(3,5));


//this is #2
//
function thisis1() {
	return "HAHA";
}
var thisis2 = function() {
	return "HOHO";
}

console.log(thisis1());
console.log(thisis2());
