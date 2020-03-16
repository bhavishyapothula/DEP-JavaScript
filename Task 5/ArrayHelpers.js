/* Question Link - http://www.codewars.com/kata/array-helpers */

if (!Array.prototype.sum) {
	Array.prototype.sum = function() {
  var sum=0;
		for(var i=0;i<this.length;i++)
    {
    sum=sum+this[i];
    }
    return sum;
	}
}
if (!Array.prototype.square) {
	Array.prototype.square = function() {
  var newArray=[];
		for(var i=0;i<this.length;i++)
    {
      newArray[i]=this[i]*this[i];
    }
    return newArray;
	}
}
if (!Array.prototype.cube) {
	Array.prototype.cube = function() {
  var newArray=[];
		for(var i=0;i<this.length;i++)
    {
      newArray[i]=this[i]*this[i]*this[i];
    }
    return newArray;
	}
}
if (!Array.prototype.average) {
	Array.prototype.average = function() {
  var sum=0;
		for(var i=0;i<this.length;i++)
    {
    sum=sum+this[i];
    }
    return sum/this.length;
	}
}
if (!Array.prototype.even) {
	Array.prototype.even= function() {
  var newArray=[],j=0;
		for(var i=0;i<this.length;i++)
    {
    if(this[i]%2==0)
    {
      newArray[j]=this[i];
      j++;
      }
    }
    return newArray;
	}
}
if (!Array.prototype.odd) {
	Array.prototype.odd= function() {
  var newArray=[],j=0;
		for(var i=0;i<this.length;i++)
    {
    if(this[i]%2!=0)
    {
      newArray[j]=this[i];
      j++;
      }
    }
    return newArray;
	}
}


