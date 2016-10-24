function findLongestWord(str) {

	var arrayString = str.split(' ');
  	
  	arrayString.sort(function(a, b) {
  		if(a.length < b.length)
  			return -1;
  		if(a.length > b.length)
  			return 1;

  		return 0;
  	});

  	var longestString = arrayString.pop();

  	return longestString.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));