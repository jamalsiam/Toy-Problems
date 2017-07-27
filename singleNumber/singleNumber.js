/*
There are 3 problems today: you can do 2 medium ones or the advanced one.
Problem 1 (medium):
Given an array of integers, return indices of the two numbers such that they add up to
a specific target.
You may assume that each input would have exactly one solution.
Extra: Can you make it run in linear time?
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/

arr=[2,3,5,16,1,4,9];


function twoSum(arr ,wanted){
	var result="";
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if(arr[i]+arr[j]==wanted && i!=j)
			result= "there is two item from array equals: "+ wanted+ " = "+arr[i]+" + "+arr[j]				
			
			};	
	}
	if(!result)
		result="no combination in array "
return result;
}
console.log(twoSum(arr,116))