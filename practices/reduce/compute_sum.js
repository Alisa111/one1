'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  function sum(i,j) {
    return i+j;

  }
  return collection.reduce(sum)
}

module.exports = calculate_elements_sum;

