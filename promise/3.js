var q = require('q');
    var defer = q.defer();

    // your solution here
    //console.log(JSON.stringify(defer.promise));
    defer.promise.then(console.log,console.log);

    // setTimeout(
    // 	defer.reject, 300,new Error("REJECTED!"))

        defer.resolve("I FIRED");
    	defer.reject("I DID NOT FIRE!");
        