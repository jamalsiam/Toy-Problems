/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

function linkedLists() {
	this.Head=null;
}

linkedLists.prototype.isEmpty = function() {
	if (this.Head==null) {
		return true;
	}
	else{
		return false;
	}
};
linkedLists.prototype.size = function() {
	var p=this.Head;
	var cunter=0;
	while(p !==null){
		cunter=cunter+1;
		p= p.next;
	}
	return cunter;
};

linkedLists.prototype.addToHead = function(val) {
	var node={
		data:val,
		next:this.Head
	}
	this.Head=node;
};

linkedLists.prototype.addToTail = function(val) {
	var p=this.Head
	var node={
		data:val,
		next:null
	}
	if (this.isEmpty()) {
		this.Head=node;
		return;
	}
	else
	{
			var p=this.Head

		while(p.next !==null){
			p= p.next;
		}
		p.next=node;
	}
};




linkedLists.prototype.remove = function() {
	this.Head=this.Head.next;
};

linkedLists.prototype.print = function() {
	var p=this.Head;
	var outPut="[";
	while(p !== null){
		outPut+=p.data;
		if(p.next !== null)
			outPut+=",";
		p=p.next;
	}
	outPut+="]"
	console.log(outPut)
};


var list= new linkedLists();






list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToTail(4);
list.remove()
list.addToHead(5);
console.log(list.size(),"size")
console.log( list.isEmpty(),'isEmpty');
list.print();