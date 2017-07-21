arr=[4,5,234,656,2,7,9];


for (var i = 0; i < arr.length; i++) {
  for (var x = i; x < arr.length; x++) {
        if(arr[i]>arr[x]){
          var t=arr[i];
          arr[i]=arr[x];
          arr[x]=t;
        }

      }   
}


 console.log(arr);









