// Manually reject that promise using setTimeout with a delay of 300ms and pass
// it an Error object with parameter "REJECTED!";

// ## Boilerplate

    var q = require('q');
    var defer = q.defer();

    // your solution here
    //console.log(JSON.stringify(defer.promise));
    defer.promise.catch(console.log);

    // setTimeout(
    // 	defer.reject, 300,new Error("REJECTED!"))

      setTimeout(()=>{
    	//defer.reject(new Error("REJECTED!"));
    	defer.reject("REJECTED!");
    }, 300)