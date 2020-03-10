/*Question link - http://www.codewars.com/kata/prefill-an-array */


function prefill(number, value) {
var repeat=parseInt(number);
if(isNaN(repeat)||repeat<0||number%1!=0){
  throw new TypeError(number+" is invalid");
} else {
   return new Array(repeat).fill(value);
}   
}



