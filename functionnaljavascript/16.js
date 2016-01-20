	function getDependencies(tree) {
      if ( !tree) {
      	return [];
      }
      var ret = [];
      if( "dependencies" in tree ) {
      		var d = tree['dependencies'];
      		for( var t in d) {
      			if ( d.hasOwnProperty(t) ) {
      				//console.log(d.t);
      				//TODO d.t为什么不可以
      				ret.push(t+"@"+d[t].version);
      				ret = ret.concat(getDependencies(d[t]));
      			}
      		}
      }
      ret.sort();
      //要去重 擦 没看清楚条件
      var s = ret.reduce((arr,next)=> {
      	if ( !~arr.indexOf(next) ) {
      		arr.push(next);
      	}
      	return arr;
      },[]);
      return s;
    }

    module.exports = getDependencies

    // var loremIpsum = {
    //   "name": "lorem-ipsum",
    //   "version": "0.1.1",
    //   "dependencies": {
    //     "optimist": {
    //       "version": "0.3.7",
    //       "dependencies": {
    //         "wordwrap": {
    //           "version": "0.0.2"
    //         }
    //       }
    //     },
    //     "inflection": {
    //       "version": "1.2.6"
    //     }
    //   }
    // }

    // var s = getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
    // console.log(s);