/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];
  this.count=0;

   // add an item to the top of the stack
   this.push = function(value){
   	this.stack.push(value);
   	this.count++;
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	this.stack.pop();
   	this.count--;
   };

   // return the number of items in the stack
   this.size = function(){
   	return this.count;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   this.count=0;

   // called to add an item to the `queue`
   this.enqueue = function(value){
   	for (var i=0;i<inbox.stack.length;i++){
   		outbox.push(inbox.stack[i])
   	}
   	inbox.stack=[];
   	this.count++;
    inbox.push(value)
    for (var i=0;i<outbox.stack.length;i++){
   		inbox.push(outbox.stack[i])
   	}

   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
   	if (inbox.stack.length===0){
   		return false;
   	}
   	this.count--;
   	return inbox.stack.pop()
    // outbox.stack=outbox.stack.reverse();
    // outbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
   	return this.count;
   }
};