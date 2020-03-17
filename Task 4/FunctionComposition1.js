/* Question link - http://www.codewars.com/kata/function-composition-1 */

const compose = (...functions) => args => functions.reduceRight((args,funcs)=>funcs(args),args);