// There are several things you will want to know:

//   * `q-io`'s `http` module has a `read` method which returns a promise for thecontent of a successful (status 200) HTTP request.
//   * Parse the returned JSON and `console.log` it for much win.

// This challenge is a bit tricky but the implementation is relatively
// straightforward.  If you get stuck, refer to the q-io documentation for
// clarification:

'use strict'
var HTTP = require("q-io/http");
HTTP.read("http://localhost:1337").then((json)=>{
	console.log(JSON.parse(json));
},null);
    
