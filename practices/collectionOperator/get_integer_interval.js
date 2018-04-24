'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var n = new Array();
  if(number_a < number_b){
    for (var i = number_a;i <= number_b;i++){
      n.push(i);
    }
  }else if(number_a > number_b){
    for (var i = number_a;i >= number_b;i--){
      n.push(i);
    }
  }else if(number_a == number_b){
    n.push(number_a);
  }
  return n;

}

module.exports = get_integer_interval;

