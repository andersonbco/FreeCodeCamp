/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, 
"", undefined, and NaN. */

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var cleanArray = arr.filter(function(value) {
  	
  	if(value === false ||
  		value === null ||
  		value === 0    ||
  		value === undefined ||
  		(typeof value === 'string' && value === '') ||
  		(typeof value !== 'string' && isNaN(value)) )
  		return false;
  	else
  		return true;
  });

  return cleanArray;
}

console.log(bouncer([7, "ate", "", false, 9]))  //should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"]))  //should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])) //should return [].
console.log(bouncer([1, null, NaN, 2, undefined])) //should return [1, 2]