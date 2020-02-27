http://www.codewars.com/kata/word-count

function countWords(str) {
  // ...
  str=str.trim();
  if(str=="")
   return 0;
   else
   {
  var arr=str.split(/\s+/);
  return arr.length;
  }
}