/*
Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
Examples
Input Output
string:
"abbbcc"  [ 1, 3 ]
string:
"aabbc" [ 0, 1 ]
string:
""  [ 0, 0 ]
string:
"mississippi" [ 2, 3 ]
string:
"abcdefgh"  [ 0, 0 ]
string:
"abccccccc" [ 2, 8 ]
*/


  var longestRun= function(str){
  var arr=[]
  var s="";
   for (var i = 0; i < str.length; i++) {
    if(str[i]==str[i+1]){
      s+=str[i]
    }
    else
    {

      if(!str[i+1])
        s+=str[i]
      if(str[i]!=str[i+1] && str[i+1] && s!=0)
        s+=str[i]
      if(s==0)
        s=str[i]
      arr.push(s);
      s="";

    }
}
var max=arr[0].length
var maxI;
for (var i = 0; i < arr.length; i++) {
  if(max<arr[i].length){
    max=arr[i].length;
    maxI=i;
  }
};
var first=0;

for (var i = 0; i < maxI; i++) {
    first+=arr[i].length
};

return [first ,first-1+max];
  }

console.log(longestRun("abccccccc"))