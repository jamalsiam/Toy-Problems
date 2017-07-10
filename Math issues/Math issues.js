/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

*/

Math.round = function(number) {
	var subNumber=parseInt(number);
	let result=number-subNumber;
	if(result>=0.5){
		result= subNumber+1;
	}
	else
		result= subNumber;
	return result;

};

Math.ceil = function(number) {
	var  subNumber=parseInt(number);
	if(number>subNumber){
		subNumber++;
	}
	return subNumber;
};

Math.floor = function(number) {
	var  subNumber=parseInt(number);	
	return subNumber;
};




function Test(f, exp, err){
	return JSON.stringify(f) === JSON.stringify(exp) ? "Test Passed &#10003;" : err;
};

console.log(Test(Math.round(0.4), 0,"FAILED"));
console.log(Test(Math.round(0.5), 1,"FAILED"));
console.log(Test(Math.ceil(0.4), 1,"FAILED"));
console.log(Test(Math.ceil(0.5), 1,"FAILED"));
console.log(Test(Math.floor(0.4), 0,"FAILED"));
console.log(Test(Math.floor(0.5), 0,"FAILED"));
