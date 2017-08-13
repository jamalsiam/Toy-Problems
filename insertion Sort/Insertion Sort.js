arr=[4,5,234,656,2,7,9];


for (var i = 0; i < arr.length; i++) {
  if(arr[i]>arr[i+1]){
    var num=arr[i+1]
    var count=0
    for (var x = i-1; x >= 0; x--) {
      count++;
      if(num>arr[x]){
        var temp=arr[x+1];
        arr[x+1]=num;
        for (var z = x; z < count; z++) {
          var temp2=arr[z];
          arr[z]=temp
          arr[z+1]=temp2;


        };
      }

    }
  }
}

console.log(arr)