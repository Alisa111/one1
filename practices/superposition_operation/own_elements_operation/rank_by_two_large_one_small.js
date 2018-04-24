'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  function ee(a, b) {
    return a - b;

  }
  collection.sort(ee);

  for (let index in collection) {
    if ((index + 1) % 3 === 0) {
      let arr = collection[index - 2];
      collection[index - 2] = collection[index - 1];
      collection[index - 1] = collection[index];
      collection[index] = arr;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
