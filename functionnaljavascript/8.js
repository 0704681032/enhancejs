 	function duckCount() {
      // SOLUTION GOES HERE
      var args = [].slice.call(arguments);
      console.log(args);
      return args.filter( arg => {
      	//arg.hasOwnProperty && arg.hasOwnProperty("quack") ;
      	return Object.prototype.hasOwnProperty.call(arg, 'quack');
      	//!arg.hasOwnProperty || arg.hasOwnProperty("quack") ;
      }).length;
    }

    module.exports = duckCount

    // var notDuck = Object.create({quack: true})
    // var duck = {quack: true}
    // duckCount(duck, notDuck) // 1