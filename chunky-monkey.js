 /* Write a function that splits an array (first 
 argument) into groups the length of size
 (second argument) and returns them as a two-
 dimensional array. */

 function chunkArrayInGroups(arr, size) {
  
  var chunks = arr.length / size;
  
  var newArray      = [];
  var splittedArray = [];

  var index = 0;

  for (var i = 0; i < chunks; i++) {
  	for(var j = 0; j < size; j++) {
  		if(arr[0] !== undefined)
  			newArray.push(arr.shift());
  	}
  	splittedArray.push(newArray);
  	newArray = [];
  }
  return splittedArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));