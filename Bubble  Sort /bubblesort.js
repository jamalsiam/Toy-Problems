arr=[4,5,234,656,2,7,9];
let swap = true;
var count = 0;
while(swap){
	swap = false;
	for(let i=0; i < arr.length; i++){
		if(arr[i]>arr[i+1]){
			let temp=arr[i+1];
			arr[i+1]=arr[i];
			arr[i]=temp;
			swap = true;
			count++;
		}
	}
}
console.log(arr,count)