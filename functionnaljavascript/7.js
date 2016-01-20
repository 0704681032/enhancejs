 	// reduce([1,2,3], function(prev, curr, index, arr) {
  //     return prev + curr
  //   }, 0)
    // => 6
	
 	function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
      var len = arr.length ;
      var prev,next;
      prev = initial;
      for(var i = 0 ; i < len ; i ++ ) {
      		next = arr[i];
      		prev = fn(prev,next,i,arr);
      }
      return prev;
    }

    module.exports = reduce