arr=[23,2,1,4,44,12,7];



function mergeSort(arr){

	if (arr.length<=1) 
	
		return arr;
	
	var nos=Math.floor(arr.length/2);
	var firstList=arr.slice(0,nos);
	var secondList=arr.slice(nos,arr.length);;

	return merge(mergeSort(secondList),mergeSort(firstList));
}

function merge(firstArr,lastArr){
	var sortedArr=[];
	while(firstArr.length && lastArr.length){
		if(firstArr[0]<=lastArr[0])
			{sortedArr.push(firstArr.shift());}
		else
			{sortedArr.push(lastArr.shift());}
	}
	while(firstArr.length){
		sortedArr.push(firstArr.shift());

	}
	while(lastArr.length){
		sortedArr.push(lastArr.shift());

	}
	return sortedArr;
}






console.log(mergeSort(arr))
console.log([1,2,3,4].slice(0,5))