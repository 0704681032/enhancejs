 var koa = require('koa');

    var app = koa();

    app.use(errorHandler());

    app.use(function* () {
      if (this.path === '/error') throw new Error('ooops');
      //this.set(200);
      this.body = 'OK';
    });

    function errorHandler() {
      return function* (next) {
        // try catch all downstream errors here
        //this.set(200);
        try {
            yield next
        } catch (e) {
            //this.set(500);
            this.status = 500;
            this.body='internal server error';
        }
        
      };
    }

    app.listen(process.argv[2]);