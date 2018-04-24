'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let m=collection.filter(element=>element%2!==0);
  function sum(i,j) {
    return i+j;
  }
  let n=m.reduce(sum);
  return n/m.length;
}

module.exports = average_uneven;
