'use strict';
var koa = require('koa');
var app = koa();
var port = process.argv[2];
app.listen(port);
app.use(function *() {
  // you can set the response body in handler like this
  this.body = 'hello koa';
});
