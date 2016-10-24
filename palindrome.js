function palindrome(str) {

  var cleanString = str.replace(/\W|_/g, "");
  cleanString = cleanString.toLowerCase();
  console.log(cleanString);
  var arrayCleanString = [];

  for(var i = 0; i < cleanString.length; i++)
	  arrayCleanString[i] = cleanString.charAt(i);

  return cleanString === arrayCleanString.reverse().join("");
}

console.log(palindrome('0_0 (: /-\ :) 0-0'));