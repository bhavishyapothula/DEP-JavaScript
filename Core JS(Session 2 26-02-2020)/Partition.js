http://www.codewars.com/kata/partition-on


function partitionOn(pred, items) {
var tl=[],fl=[],i;
  for(i=0;i<items.length;i++)
  {
    if(pred(items[i]))
        tl.push(items[i]);
    else
       fl.push(items[i]);
  }  
  var j=0;
  while(j<items.length)
  {
    for(i=0;i<fl.length;i++)
    {
      items[j]=fl[i];
      j++;
    }
    for(i=0;i<tl.length;i++)
    {
      items[j]=tl[i];
      j++;
    }
    
  }
return fl.length;
}
