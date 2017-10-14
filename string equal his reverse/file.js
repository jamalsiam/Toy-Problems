 function reverse(x) {
 	var strRevese="";
 	for (var i = x.length - 1; i >= 0; i--) 
 		 strRevese+= x[i];
 	return x==strRevese;
 }
 console.log(reverse("mum"));
 console.log(reverse("noor"));
