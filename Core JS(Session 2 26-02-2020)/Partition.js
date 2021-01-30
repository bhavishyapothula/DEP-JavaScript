/*Question Link - http://www.codewars.com/kata/partition-on*/

function partitionOn(pred, items) {
    var trueList = items.filter(item => pred(item));
    var falseList = items.filter(item => !pred(item));
    items.length = 0;
    items.push(...falseList.concat(trueList));
    return falseList.length;
}
