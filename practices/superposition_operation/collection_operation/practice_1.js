'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let arr=collection.map(x=>x*3+2);
  function sum(i,j) {
    return i+j;
  }
  return arr.reduce(sum);
}

module.exports = hybrid_operation;

