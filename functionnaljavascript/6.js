 	
    // var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    // console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }


 	function countWords(inputWords) {
      // SOLUTION GOES HERE
      return inputWords.reduce((obj,next)=>{
      		obj[next] = (obj[next] || 0) +1;
      		return obj;
      },{});
    }

    module.exports = countWords