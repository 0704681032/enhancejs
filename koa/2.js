  	'use strict';
	var koa = require('koa');
	var app = koa();
	var port = process.argv[2];
  	app.use(function* (next) {

      // skip the rest of the code if the route does not match
      var map = new Map();
      map.set("/","hello koa");
      map.set("/404","page not found");
      map.set("/500","internal server error");

      if ( !map.has(this.path) ) return yield next;

      this.body =  map.get(this.path);
    })
  	app.listen(port);
