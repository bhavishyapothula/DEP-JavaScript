/* Question Link - http://www.codewars.com/kata/array-helpers 
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

if (!Array.prototype.sum) {
    Array.prototype.sum = function() {
        var sum = 0;
        for (var i = 0; i < this.length; i++) {
            sum = sum + this[i];
        }
        return sum;
    };
}
if (!Array.prototype.square) {
    Array.prototype.square = function() {
        var newArray = [];
        for (var i = 0; i < this.length; i++) {
            newArray[i] = this[i] * this[i];
        }
        return newArray;
    };
}
if (!Array.prototype.cube) {
    Array.prototype.cube = function() {
        var newArray = [];
        for (var i = 0; i < this.length; i++) {
            newArray[i] = this[i] * this[i] * this[i];
        }
        return newArray;
    };
}
if (!Array.prototype.average) {
    Array.prototype.average = function() {
        var sum = 0;
        for (var i = 0; i < this.length; i++) {
            sum = sum + this[i];
        }
        return sum / this.length;
    };
}
if (!Array.prototype.even) {
    Array.prototype.even = function() {
        var newArray = [],
            j = 0;
        for (var i = 0; i < this.length; i++) {
            if (this[i] % 2 == 0) {
                newArray[j] = this[i];
                j++;
            }
        }
        return newArray;
    };
}
if (!Array.prototype.odd) {
    Array.prototype.odd = function() {
        var newArray = [],
            j = 0;
        for (var i = 0; i < this.length; i++) {
            if (this[i] % 2 != 0) {
                newArray[j] = this[i];
                j++;
            }
        }
        return newArray;
    };
}
