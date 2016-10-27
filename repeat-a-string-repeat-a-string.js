function repeatStringNumTimes(str, num) {

  var resultString = "";
  
  if(num < 0 )
  	return resultString;

  var i =0;
  while(i < num) {
  	resultString = resultString.concat(str);
  	i++;
  }

  return resultString;
}

console.log(repeatStringNumTimes("abc", 3));
