function largestOfFour(arr) {
	
	var largestArray = [];

	for (var i = 0; i < arr.length; i++) {
	  	arr[i].sort(function(a,b) {
	  		return a - b;
	  	});
	  	largestArray[i] = arr[i].pop();
	  }  

  return largestArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
