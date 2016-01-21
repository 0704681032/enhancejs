 // * Create a promise using the `q` library
 //  * Pass `console.log` to the `then` method of our promise
 //  * Resolve the promise with a parameter `"SECOND"`
 //  * Print `"FIRST"` to the console using `console.log`

 var q = require('q');
    var defer = q.defer();

    // your solution here
    //console.log(JSON.stringify(defer.promise));
    defer.promise.then(console.log);

    defer.resolve("SECOND");

    console.log("FIRST");
        