function Queue  (){
	this.pointer =null;
	this.count=0;
}

Queue.prototype.addQueue = function(data) {
	var node={
		pre:null,
		data:data,
		next:this.pointer
	}
	if (!this.pointer) {
		this.pointer=node
	}
	else
	{
		this.pointer.pre=node;
		this.pointer=node;
	}
	this.count++;
	
};
Queue.prototype.deQueue = function() {
	var p=this.pointer;
	var c=0;
	while(p){

	
	p=p.next
	
	}

};

Queue.prototype.print = function() {
	var record="["
	var p=this.pointer;
	while(p){
	record+=p.data;
	if (p.next) {
		record+=","
	}
	p=p.next
	}
	record+="]"
return record
};

var q= new Queue();
q.addQueue(1)
q.addQueue(2)
q.addQueue(3)
q.addQueue(4)
q.addQueue(5)
q.deQueue()
//q.deQueue()
//q.deQueue()
console.log(q.print())

