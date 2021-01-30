/* Question link - http://www.codewars.com/kata/function-composition-1 
const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))

addOneMultTwo(5) // returns 12
*/

const compose = (...functions) => args => functions.reduceRight((args, funcs) => funcs(args), args);
