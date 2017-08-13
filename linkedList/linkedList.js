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


var LinkedList = function(){
	//this.list={}
  	this.head=null
  	this.tail=null
  	this.c=0;
};

LinkedList.prototype.addToTail = function(x,p=this.tail) {
	// if (p===null){
	// 	this.head=this.tail;
 //  	return p[0]=([x,null]);
 //  }else if (p[0].indexOf(null)!==-1){
 //  		p[0][1]=[x,null]
 //  		return;
 //  	}else{
 //  		return LinkedList.addToTail(x,p[1])
 //  }
 	var add;
    if (this.c===0){
      	this.tail=this.Node(x);
      	this.c++;
      	this.head=this.tail;
    }else{
      add=this.tail;
      this.tail=this.Node(x);

      add.next=this.tail;
    }
    ++this.c;

    return this.tail
};

LinkedList.prototype.removeHead = function() {
	var heads=this.head;
    if(this.c===1){
      this.head=null;

      return heads.value;

    }else{
    this.head=this.head.next;
    }

    --this.c;
    return heads.value;
  };


LinkedList.prototype.contains = function(pos,head=this.head) {
    for (var i = 0; i < this.c; i++) {
      if (head.value===pos){
        return true;
      }
      if (head.next!==null){
      	head=head.next;
      }
    }
    return false
};

LinkedList.prototype.Node = function(value) {
  var nodes = {};
  	nodes.value = value;
  nodes.next = null;
  return nodes;
}
