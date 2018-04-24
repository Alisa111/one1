'use strict';

function compute_average(collection) {
  //在这里写入代码
  function sum(i,j) {
    return i+j;
  }
  return collection.reduce(sum)/collection.length
}

module.exports = compute_average;

