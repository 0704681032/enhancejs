module.exports = function arrayMap(arr, fn) {
      // SOLUTION GOES HERE
      return arr.reduce( (obj,item ) => {
      		obj.push(fn(item));
      		return obj;
      },[]);
    }


   // var nums = [1,2,3,4,5]

   //  // `map` is your exported function
   //  var output = map(nums, function double(item) {
   //    return item * 2
   //  })

   //  console.log(output) // => [2,4,6,8,10]