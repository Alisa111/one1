'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  function max(i, j) {
    return Math.max(i, j)
  }

  return collection.reduce(max);
}

module.exports = collect_max_number;
