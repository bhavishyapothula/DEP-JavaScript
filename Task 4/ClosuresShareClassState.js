/* Question link - http://www.codewars.com/kata/using-closures-to-share-class-state
garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20
*/

var Cat = (function() {
  count = 0;
  totalWeight = 0;
  function Cat(name, weight) {
    if (!name || !weight) {
      throw new Error("Both `name` and `weight` should be provided");
    }
    count++;
    this.name = name;
    Object.defineProperty(this, "weight", {
      get: function() {
        return this._weight || 0;
      },
      set: function(val) {
        totalWeight = totalWeight - this.weight + val;
        return (this._weight = val);
      }
    });
    this.weight = weight;
  }
  Cat.averageWeight = function() {
    return totalWeight / count;
  };
  return Cat;
})();
