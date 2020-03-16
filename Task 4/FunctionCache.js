/* Question link - http://www.codewars.com/kata/function-cache */

function cache(func) {
  let cacheObject = {};
  let cacheArray = new Array();
  return function(value1, value2) {
    let argumentArray = [value1,value2];
    let argumentPassed = JSON.stringify(argumentArray);
    if (cacheArray.includes(argumentPassed)) {
      return cacheObject[argumentPassed];
    } else {
      cacheArray.push(argumentPassed);
      cacheObject[argumentPassed] = func(value1, value2);
      return cacheObject[argumentPassed];
    }
  };
}