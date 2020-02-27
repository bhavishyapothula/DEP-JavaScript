http://www.codewars.com/kata/transportation-on-vacation


function rentalCarCost(d) {
  var total=d*40;
  if(d>=7)
  total=total-50;
  else if(d>=3)
  total=total-20;
  return total;
}