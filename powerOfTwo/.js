
var powerOfTwo = function(num){
	var pow=Math.pow(2,num).toPrecision()+"";
	var powarr=pow.split("");
	var result=0;
	if (powarr.includes("e")){
		powarr.splice(powarr.indexOf("e"),powarr.length-1);
		powarr.splice(powarr.indexOf("."),1);
	}
	for (var i = 0; i < powarr.length; i++) {
		result=result+(powarr[i]*1);
	}
	return result;
}
console.log(powerOfTwo(11))