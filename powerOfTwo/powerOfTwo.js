/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/


var powerOfTwo = function(number){
var power=Math.pow(2,number)+" ";
var result=0;
var arrOfDigits=power.split("");
arrOfDigits.splice(arrOfDigits.indexOf('e'))
if(arrOfDigits[1]==".")
arrOfDigits[1]=0;
for (var i = 0; i < arrOfDigits.length; i++) {
	result+=parseInt(arrOfDigits[i])
}
return result
}
console.log(powerOfTwo(11))