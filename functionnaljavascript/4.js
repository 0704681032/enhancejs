	 // var goodUsers = [
  //     { id: 1 },
  //     { id: 2 },
  //     { id: 3 }
  //   ]

  //   // `checkUsersValid` is the function you'll define
  //   var testAllValid = checkUsersValid(goodUsers)

  //   testAllValid([
  //     { id: 2 },
  //     { id: 1 }
  //   ])
  //   // => true

  //   testAllValid([
  //     { id: 2 },
  //     { id: 4 },
  //     { id: 1 }
  //   ])
  //   // => false

	function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every( u => goodUsers.some(t=>t.id==u.id) );
      };
    }

    module.exports = checkUsersValid