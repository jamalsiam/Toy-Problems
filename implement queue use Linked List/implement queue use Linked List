function Stack  (){
	this.top =null;
}
Stack.prototype.push=function  (data){
	var node ={
		data :data ,
		next:this.top
	}
	this.top=node;
}

Stack. prototype. pup=function  (){
	if (this.top==null){
		console. log ("stack is empty")
	}
	else  {
		var node=this.top.next 
		this.top=node
	}	
}

Stack. prototype.print=function  (){
	var p=this.top
	var record ="["
	while(p){
		record=record+p.data
		if (p.next) {
			record=record+","
		}
		p=p.next
	}
	record+="]"
	return record; 
}
Stack.prototype.length=function(){
	var count =0;
	var p=this.top
	while (p!=null){
		count++;
		p=p.next
	}
	return count;
}
var stack =new Stack  ()
stack.push (10)
stack.push (23)
stack.push (2)
stack. pup ()
stack.push (3)
stack.push (6)
stack.push (76)
stack.push (32)
stack.push (12)
stack.push (22)

console.log ('length:',stack. length())
console.log (stack. print())


