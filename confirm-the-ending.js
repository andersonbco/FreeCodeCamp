function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var endString = str.substring(str.length - target.length);

  return endString === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));