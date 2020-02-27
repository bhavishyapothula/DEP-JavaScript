http://www.codewars.com/kata/get-the-middle-character



function getMiddle(s)
{
  var l=s.length;
  var middle=l/2;
  if(l%2!=0)
  {
    
    return s.charAt(middle);
  }
  else
  {
    return s.substring(middle-1,middle+1);
  }
}
