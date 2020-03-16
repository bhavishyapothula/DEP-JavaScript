/* Question Link - http://www.codewars.com/kata/extract-nested-object-reference */
  
Object.prototype.hash = function(string) {
  var array = string.split( "." ),myObj=obj;
  for (var i = 0; i < array.length; i++ ) {
  if(myObj[array[i]]==undefined){
    return undefined;
    }else{
    myObj = myObj[array[i]];
    }
  }
  return myObj;
}
