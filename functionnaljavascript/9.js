	var slice = Array.prototype.slice

    function logger(namespace) {
      // SOLUTION GOES HERE
      var arr = [namespace];
      return function(msg) {
      	//console.log(a);
      	console.log.apply(console,arr.concat([].slice.call(arguments)));
      }
    }

    module.exports = logger

    //var info = logger('INFO:')
    //info('this is an info message')
    // INFO: this is an info message