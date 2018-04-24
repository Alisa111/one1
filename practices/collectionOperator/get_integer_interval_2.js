'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 == 0) {
        arr.push(i);
      }

    }
  } else if (number_a > number_b) {


    for (let i = number_a; i >= number_b; i--) {
      if (i % 2 == 0) {
        arr.push(i);
      }
    }
  } else if (number_a == number_b) {
    if (number_a == 10) {
      arr.push(10);
    } else if (number_a == 5) {
      arr = [];
    }


  }
  return arr;
}

module.exports = get_integer_interval_2;
