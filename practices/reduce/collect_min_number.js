'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  function min(i, j) {
    return Math.min(i, j)
  }

  return collection.reduce(min);
}

module.exports = collect_min_number;

