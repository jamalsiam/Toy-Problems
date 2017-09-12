var arr =[2,4,7,9,23,45,46,50,55,66,78]
var num=55
function binarySearch (arr,num){
	var array =arr.slice ();
	var first=0;
	var last=array.length;
	var meddle=Math.floor ((first+last)/2);
	var loop=0;
	for (var i=0;i<array.length;i++){
		loop++
		if (last==first &&array[first]==num) {
			return true+" in "+loop+" Loop"
		}
		if (array [first]<=num && array[meddle]>=num){	
			last=meddle;
			meddle=Math.floor ((first+last)/2)
		}
		else
		{
			first=meddle+1
			meddle=Math.floor ((first+last)/2)	
		}
	}
	return false
}
console.log(binarySearch (arr,num))



