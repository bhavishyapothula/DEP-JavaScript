/*Question Link - http://www.codewars.com/kata/calculating-with-functions */

function zero(param) {
    if(typeof param=='function') {
      return param(0);
    }else  {
    return 0;
    }
}
function one(param) {
    if(typeof param=='function') {
      return param(1);
    }else  {
    return 1;
    }
}
function two(param) {
    if(typeof param=='function') {
      return param(2);
    }else  {
    return 2;
    }
}
function three(param) {
    if(typeof param=='function') {
      return param(3);
    }else  {
    return 3;
    }
}
function four(param) {
    if(typeof param=='function') {
      return param(4);
    }else  {
    return 4;
    }
}
function five(param) {
    if(typeof param=='function') {
      return param(5);
    }else  {
    return 5;
    }
}
function six(param) {
    if(typeof param=='function') {
      return param(6);
    }else  {
    return 6;
    }
}
function seven(param) {
    if(typeof param=='function') {
      return param(7);
    }else  {
    return 7;
    }
}
function eight(param) {
    if(typeof param=='function') {
      return param(8);
    }else  {
    return 8;
    }
}
function nine(param) {
    if(typeof param=='function') {
      return param(9);
    }else  {
    return 9;
    }
}

function plus(operand2) {
  return function(operand1){
          return operand1+operand2;
      }
}
function minus(operand2) {
   return function(operand1){
          return operand1-operand2;
      }
}
function times(operand2) {
  return function(operand1){
          return operand1*operand2;
      }
}
function dividedBy(operand2) { 
  return function(operand1){
        return Math.floor(operand1/operand2);
      }
}
