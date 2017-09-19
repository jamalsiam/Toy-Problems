function function_1(a,b,fun,fun3){
	var c=a+b
	console.log(c)
	fun(a,c,fun3)
}
function function_2(d,e,fun3) {
	console.log(d+e)
	fun3(d+e)
}

function function_3(x) {
	console.log(x++)
	console.log(x)
}

function_1(1,2,function_2,function_3)