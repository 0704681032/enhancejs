 module.exports = function(namespace) {
      // SOLUTION GOES HERE
      var arr = [namespace];
      return function(msg) {
      	//console.log(a);
      	console.log.apply(console,arr.concat([].slice.call(arguments)));
      }
    }