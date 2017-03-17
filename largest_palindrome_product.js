/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  loopIterations = Math.pow(10, digits);
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

  function isPalindrome(number) {
    number = String(number);
    reverseNumber = number.split("").reverse().join("");
    return number === reverseNumber;
  }

  for (var i = 1; i < loopIterations; i++) {
    for (var j = 1; j < loopIterations; j++) {
      if (isPalindrome(j * i) && (j* i) > palindromeNumber) {
        factor_0 = i;
        factor_1 = j;
        palindromeNumber = (j*i);
      }
    }
  }



  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};