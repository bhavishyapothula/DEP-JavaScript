/*Question link - http://www.codewars.com/kata/a-chain-adding-function
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
*/

function add(number) {
  let sum = number;
  function innerAdd(m) {
    sum += m;
    return innerAdd;
  }
  innerAdd.valueOf = function() {
    return sum;
  };
  return innerAdd;
}
