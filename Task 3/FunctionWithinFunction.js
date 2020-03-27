/*Question Link - http://www.codewars.com/kata/a-function-within-a-function
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

var three = always(3);
three(); // returns 3 
*/

function always(number) {
    return function() {
        return number;
    };
}
