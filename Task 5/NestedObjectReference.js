/* Question Link - http://www.codewars.com/kata/extract-nested-object-reference
var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

Object.prototype.hash = function(string) {
  var array = string.split("."),
    myObj = obj;
  for (var i = 0; i < array.length; i++) {
    if (myObj[array[i]] == undefined) {
      return undefined;
    } else {
      myObj = myObj[array[i]];
    }
  }
  return myObj;
};
