 // * Build a function called `parsePromised` that creates a promise,performs 
 // `JSON.parse` in a `try`/`catch` block, 
 // and resolves or rejectsthe promise depending on whether an error is thrown.
 // **Note:** your function should synchronously return the promise!
 //  * Build a sequence of steps like the ones shown above that catchesany thrown 
 //  errors and logs them to the console.
'use strict'
 var q = require('q');
    

    var parsePromised = () => {
    	var defer = q.defer();
    	 try {
	       let json = JSON.parse(process.argv[2]);
	      defer.resolve(json);
	    } catch (e) {
	      //console.log会影响测试结果
	      //console.log(e);
	      defer.reject(e);
	    }
    	return defer.promise;
    }

    // your solution here
    //console.log(JSON.stringify(defer.promise));
    parsePromised().then(null,console.log);

    // setTimeout(
    // 	defer.reject, 300,new Error("REJECTED!"))

        