  	'use strict';
	var koa = require('koa');
	var app = koa();
  var parse = require('co-body');
	var port = process.argv[2];
  	app.use(function* (next) {
      var body = yield parse(this);
      this.body =  body.name.toUpperCase();
    })
  	app.listen(port);


  //下面是官方的答案
  // app.use(function* (next) {
  //     // only accept POST request
  //     if (this.method !== 'POST') return yield next;

  //     // max body size limit to `1kb`
  //     var body = yield parse(this, { limit: '1kb' });

  //     // if body.name not exist, respond `400`
  //     if (!body.name) this.throw(400, '.name required');

  //     this.body = body.name.toUpperCase();
  //   });