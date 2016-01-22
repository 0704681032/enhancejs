 var koa = require('koa');

    var app = koa();

    app.use(responseTime());
    app.use(upperCase());

    app.use(function* () {
      this.body = 'hello koa';
    });

    function responseTime() {
      return function* (next) {
        // record start time
        var start = +new Date();
        yield next;
        // set X-Response-Time head
        this.set('X-Response-Time', start)
      };
    }

    function upperCase() {
      return function* (next) {
        // do nothing
        yield next;
        this.body = this.body.toUpperCase();
        // convert this.body to upper case
      };
    }

    app.listen(process.argv[2]);