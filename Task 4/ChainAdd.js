/*Question link - http://www.codewars.com/kata/a-chain-adding-function */
   

function add(number){
   let sum = number;
  function innerAdd(m){
    sum+=m;
    return innerAdd;
  }
  innerAdd.valueOf = function(){
    return sum;
  };
  return innerAdd;
}