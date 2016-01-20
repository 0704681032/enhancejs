// function curryN(fn, n) {
//       // SOLUTION GOES HERE
//       var len = n || fn.length;
//       //len = n;
//       //console.log(`len=>${len}`);
//       //var f = fn;
//       var arr = [];
//       return function a() {
//       	//[].slice.call(arguments)
//       		var t = arr.concat([].slice.call(arguments));
//       		console.log(t);
//       		if ( t.length >= len ) {
//       			// console.log('here');
//       			// console.log(t);
//       			// console.log("777");
//       			var tr = fn.apply(this,t);
//       			//console.log(tr);
//       			return tr;
//       		} else {
//       			arr = t;
//       			// console.log(a);
//       			// console.log("888");
//       			return a ;
//       		}
//       }
//     }

//对变量作用域和闭包还是没有非常深入的了解 操
function curryN(fn, n) {
      // SOLUTION GOES HERE
      var len = n || fn.length;
      //len = n;
      //console.log(`len=>${len}`);
      //var f = fn;
      var arr = [];
      return function a() {
      	//[].slice.call(arguments)
      		var t = arr.concat([].slice.call(arguments));
      		console.log(t);
      		if ( t.length >= len ) {
      			// console.log('here');
      			// console.log(t);
      			// console.log("777");
      			var tr = fn.apply(this,t);
      			//console.log(tr);
      			return tr;
      		} else {
      			arr = t;
      			// console.log(a);
      			// console.log("888");
      			return a ;
      		}
      }
    }



    function curryN(fn, n) {
      // SOLUTION GOES HERE
      var len = n || fn.length;
      //len = n;
      //console.log(`len=>${len}`);
      //var f = fn;
      //var arr = [];
      return function a() {
      	//[].slice.call(arguments)
      	    a.ex = a.ex || [] ;
      		var t = a.ex.concat([].slice.call(arguments));
      		console.log(t);
      		if ( t.length >= len ) {
      			// console.log('here');
      			// console.log(t);
      			// console.log("777");
      			var tr = fn.apply(this,t);
      			//console.log(tr);
      			return tr;
      		} else {
      			a.ex = t;
      			// console.log(a);
      			// console.log("888");
      			return a ;
      		}
      }
    }

    //答案如下 操
    function curryN(fn, n) {
		  n = n || fn.length
		  return function curriedN(arg) {
		    if (n <= 1) return fn(arg)
		    return curryN(fn.bind(this, arg), n - 1)
		  }
	}

    module.exports = curryN

    //下面的是测试用例

    function add3(one, two, three) {
      return one + two + three
    }

    var curryC = curryN(add3)
    var curryB = curryC(1)
    var curryA = curryB(2)
    console.log(curryA(3)) // => 6
    console.log(curryA(10)) // => 13

    console.log(curryN(add3)(1)(2)(3)) // => 6
  var result = [];
  function joinWithComma() {
    return Array.prototype.join.call(arguments, ',');
  }

  var curry1 = curryN(joinWithComma, 4)
  var curry2 = curry1(1)
  var curry3 = curry2(2)
  var curry4 = curry3(3)
  result.push(curry4(4))
  result.push("Testing we can change the inner function to generate different set of outputs:")
  console.log(result);
  var curry3 = curry2(6)
  var curry4 = curry3(3)
  result.push(curry4(5))