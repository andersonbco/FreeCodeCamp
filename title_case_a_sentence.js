function titleCase(str) {

	var arrayString = str.toLowerCase().split(' ');
	var arrayResult = [];
	var result      = [];
	var matcher     = /\w/;
	var firstLetter = '';

	for (var i = 0; i < arrayString.length; i++) {
		
		result = arrayString[i].match(matcher);
		firstLetter = result[0].toUpperCase();
		
		arrayResult[i] = result.input.replace(/\w/, firstLetter);
	}	

	return arrayResult.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
