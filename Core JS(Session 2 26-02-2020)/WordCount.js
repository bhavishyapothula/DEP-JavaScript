/*Question Link - http://www.codewars.com/kata/word-count*/

function countWords(sentence) {
  sentence=sentence.trim();
  if(sentence=="") {
   return 0;
   }else {
      var wordArray=sentence.split(/\s+/);
      return wordArray.length;
  }
}