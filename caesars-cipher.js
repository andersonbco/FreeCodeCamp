/*One of the simplest and most widely known
ciphers is a Caesar cipher, also known as a
shift cipher. In a shift cipher the meanings
of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher,
where the values of the letters are shifted by 13
places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded
string as input and returns a decoded string.

All letters will be uppercase. Do not transform any 
non-alphabetic character (i.e. spaces,
punctuation), but do pass them on. */

function rot13(str) { // LBH QVQ VG!
  
  var strABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var matcher = /[A-Z]/g;

  var arrayStr = str.split('');
  var arrayResult = [];

  for (var i = 0; i < arrayStr.length; i++) {

  	if(arrayStr[i].match(matcher)) {

	  	var index = strABC.indexOf(arrayStr[i]);

	  	index += 13;

	  	if (index > strABC.length - 1) 
	  		index -= strABC.length;

	  	arrayResult[i] = strABC.charAt(index);
  	} else {
  		arrayResult[i] = arrayStr[i];
  	}
  }

  return arrayResult.join('');
}


console.log(rot13("SERR PBQR PNZC")); //should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); //should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); //should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); 
//should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
