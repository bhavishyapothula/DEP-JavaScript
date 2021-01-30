/* Question Link - http://www.codewars.com/kata/get-the-middle-character*/

function getMiddle(word) {
    var wordLength = word.length;
    var middle = wordLength / 2;
    if (wordLength % 2 != 0) {
        return word.charAt(middle);
    } else {
        return word.substring(middle - 1, middle + 1);
    }
}
