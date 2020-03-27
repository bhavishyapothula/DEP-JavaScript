/*Question link - http://www.codewars.com/kata/prefill-an-array
  prefill(3,1) --> [1,1,1]

    prefill(2,"abc") --> ['abc','abc']

    prefill("1", 1) --> [1]

    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]

    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
*/

function prefill(number, value) {
    var repeat = parseInt(number);
    if (isNaN(repeat) || repeat < 0 || number % 1 != 0) {
        throw new TypeError(number + ' is invalid');
    } else {
        return new Array(repeat).fill(value);
    }
}
