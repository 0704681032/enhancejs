	// [ 'Tempor quis esse consequat sunt ea eiusmod.',
 //      'Id culpa ad proident ad nulla laborum incididunt.',
 //      'Ullamco in ea et ad anim anim ullamco est.',
 //      'Est ut irure irure nisi.' ]

	function getShortMessages(messages) {
      // SOLUTION GOES HERE
      return messages.filter( m =>  m.message.length < 50 ).map(m=>m.message);
    }

    module.exports = getShortMessages