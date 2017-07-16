/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

var a = ['commit','push']
Array.prototype.isSubsetOf = function (arr) {
	var subArray=this;
	var fullArray=arr.slice();
	var x=0;
	for (var i = 0; i < fullArray.length; i++) {
		for (var j = 0; j < subArray.length; j++) {
			if(subArray[j]==fullArray[i])
			{	
				x++;	
				fullArray[i]=null;
				if(x==subArray.length)
					return true;		
			}
		}

	}

return false;
}


var rr=['commit','rebase','push','blame']
console.log(a.isSubsetOf(rr))
console.log(rr)