/*Question Link - http://www.codewars.com/kata/partition-on*/


function partitionOn(pred, items) {
var trueList=[],falseList=[],index;
  for(index=0;index<items.length;index++)
  {
    if(pred(items[index])){
        trueList.push(items[index]);
    } else {
       falseList.push(items[index]);
    }
  }  
  var tempIndex=0;
  while(tempIndex<items.length)
  {
    for(index=0;index<falseList.length;index++)
    {
      items[tempIndex]=falseList[index];
      tempIndex++;
    }
    for(index=0;index<trueList.length;index++)
    {
      items[tempIndex]=trueList[index];
      tempIndex++;
    }
    
  }
return falseList.length;
}