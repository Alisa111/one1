'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let n = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      n.push(arr[i - 1]);

    }
  } else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      n.push(arr[i - 1]);
    }

  }else if(number_a == number_b){
    n.push(arr[number_a-1]);
  }

  return n;
}

module.exports = get_letter_interval;
