  "use strict"
  function loadUsers(userIds, load, done) {
      var users = []
      for (let i = 0; i < userIds.length; i++) {
        //users.push(load(userIds[i]))
		load(userIds[i],function(obj) {
			users[i] = obj;
			if ( users.length == userIds.length ) {
				done(users);
			}
		});

      }
      return users
    }

    module.exports = loadUsers