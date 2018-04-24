'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  function sum(i,j) {
    return i+j;
  }
  let avg=Math.ceil(collection.reduce(sum)/collection.length);
  return String.fromCharCode(avg+96);
}

module.exports = average_to_letter;

