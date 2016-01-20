function repeat(operation, num) {
      // SOLUTION GOES HERE
      //typeof operation == "function" && 
      for(var i = 0 ; i < num ; i++ ) {
      	 operation();
      }
}

// Do not remove the line below
module.exports = repeat