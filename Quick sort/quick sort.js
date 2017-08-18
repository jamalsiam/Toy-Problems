var xArr =[3,2,5,1,19,6]

var quickSort=function (arr){
	if (arr.length<=1) {
		return arr;
	}		

	var arrLength=arr.length; //5 //4 //2 //2
	var pivotPosition=Math.floor(arrLength/2); //3 //2 //1 //1
	var pivotValue=arr[pivotPosition]; //1 //5 //3 // 19
	var less=[],//  // 3,2  //2  //6// 
		more=[],//3,2,5,19,6 // 19,6 //   
		same=[];//1 // 5 // 3  //19//
	for(var i=0;i<arrLength;i++){
		if (arr[i]==pivotValue) {
			same.push(arr[i]);
		}
		else if (arr[i]<pivotValue) {
			less.push(arr[i]);
		}
		else{
			more.push(arr[i]);
		}
	}

	return quickSort(less).concat(same,quickSort(more))
			//		  []		  [1]             [3,2,5,19,6]
								// 1
													//[3,2]	 			[5]		 	[19,6]
													//[2][3][]			/5			[6][19][]
												//    /2 /3             /5 			/6 /19
								// [1,					2,3,			 5			 6, 19]

}
	
	console.log(quickSort(xArr))
