/**
 factorial
 */

/**
  * example usage:
  * 5!=5*4*3*2*1=120
  * 
  */

  var fact = function(number) {
    if(number<=1)
      return 1;

    var result= number*fact(number-1)

return result

  }



 console.log(fact(5))