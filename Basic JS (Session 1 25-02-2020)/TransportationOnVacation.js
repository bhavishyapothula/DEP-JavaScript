/*Question Link - http://www.codewars.com/kata/transportation-on-vacation*/


function rentalCarCost(days) {
  var totalFare=days*40;
  if(days>=7){
    totalFare=totalFare-50;
  } else if(days>=3) {
    totalFare=totalFare-20;
  }
  return totalFare;
}