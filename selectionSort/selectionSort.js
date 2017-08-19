var arr = [3,1,50,2,8,39,3,2,77,4,34,5];
var selectionSort = function (arr) {
	for (var i = 0; i < arr.length;i++) {
		var m = i;
		for (var j = i; j < arr.length;j++) {
			if (arr[m] > arr[j]) {
				m = j;
			}
		}
		if (m != i){
			var temp = arr[m];
			arr[m] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}
console.log(selectionSort(arr));