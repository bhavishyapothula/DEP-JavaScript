/*Question Link - http://www.codewars.com/kata/closures-and-scopes/train/javascript
var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
*/

function createFunctions(n) {
    var callbacks = [];
    for (let i = 0; i < n; i++) {
        callbacks.push(function() {
            return i;
        });
    }

    return callbacks;
}
