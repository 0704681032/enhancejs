 function Spy(target, method) {
      // SOLUTION GOES HERE
      var origin = target[method];
      var obj = {};
      obj.count = 0;
    target[method] = function() {
      	 origin.apply(target,[].slice.call(arguments));
      	 obj.count++;
      }
      return obj;
    }

    //   var spy = Spy(console, 'error')

    // console.error('calling console.error')
    // console.error('calling console.error')
    // console.error('calling console.error')

    //console.log(spy.count) // 3
    module.exports = Spy