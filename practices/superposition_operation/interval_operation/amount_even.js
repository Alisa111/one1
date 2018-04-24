'use strict';

function amount_even(collection) {

  //在这里写入代码
  let m=collection.filter(element=>element%2==0);
  function sum(i,j) {
    return i+j;

  }
  return m.reduce(sum);
}

module.exports = amount_even;
