  	'use strict';
	var koa = require('koa');
	var app = koa();
  var fs = require('fs');
  var parse = require('co-body');
	var port = process.argv[2];
  	app.use(function* (next) {
      //var body = yield parse(this);
      //this.body =  body.name.toUpperCase();
      if ( this.path == "/json" ) {
        this.body = { foo: 'bar' };
      } else if (this.path == "/stream") {
        this.body = fs.createReadStream(process.argv[3]);
        // koa will automatically handle errors and leaks
      } else {
        yield next
      }


    })
  	app.listen(port);


  